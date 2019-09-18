
// let showText = true

// const toggleVisibility = () => {
//   showText = !showText
//   renderVisibility()
// }

// const renderVisibility = () => {
//   const visibilityTemplate = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>{showText ? 'Hide text' : 'Show text'}</button>
//       {showText && <p>'This is my message'</p>}
//     </div>
//   )

//   const visibilityDOM = document.getElementById('app')

//   ReactDOM.render(visibilityTemplate, visibilityDOM)
// }

// renderVisibility()

class Visibility extends React.Component {
  constructor(props) {
    super(props)
    this.toggleVisibility = this.toggleVisibility.bind(this)
    this.state = {
      showText: true
    }
  }
  toggleVisibility() {
    this.setState((prevState) => ({ showText: !prevState.showText }))
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.showText ? 'Hide text' : 'Show text'}
        </button>
        {this.state.showText && <p>'This is my message'</p>}
      </div>
    )
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))
