import React from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import OptionModal from './OptionModal'

export default class Indecision extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  }
  handleRemoveAll = () => {
    this.setState(() => ({ options: [] }))
  }
  handleRemoveOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }))
  }
  handlePick = () => {
    const randomIndex = Math.floor(Math.random() * this.state.options.length)
    const decision = this.state.options[randomIndex]
    this.setState(() => ({ selectedOption: decision }))
  }
  handleCloseModal = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }))
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      if (options) {
        this.setState(() => ({ options }))
      } else {
        localStorage.setItem('options', JSON.stringify(this.state.options))
      }
    } catch (error) {

    }

  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }
  render() {
    const app = {
      title: 'Indecision',
      subtitle: 'Put your life in the hands of a computer',

    }

    return (
      <div>
        <Header title={app.title} subtitle={app.subtitle} />
        <div className='container'>
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className='widget'>
            <Options
              options={this.state.options}
              handleRemoveAll={this.handleRemoveAll}
              handleRemoveOption={this.handleRemoveOption}
            />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />

      </div>
    )
  }
}

Indecision.defaultProps = {
  options: []
}