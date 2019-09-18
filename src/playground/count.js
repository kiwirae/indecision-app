// let count = 0

// const addOne = () => {
//   count++
//   renderCount()
// }

// const minusOne = () => {
//   count--
//   renderCount()
// }

// const resetCount = () => {
//   count = 0
//   renderCount()
// }

// const renderCount = () => {
//   const template = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={resetCount}>reset</button>
//     </div>
//   )

//   const appDOM = document.getElementById('app')

//   ReactDOM.render(template, appDOM)
// }

// renderCount()

class Count extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleResetCount = this.handleResetCount.bind(this)
    this.state = {
      count: props.count
    }
  }
  componentDidMount() {
    const json = localStorage.getItem('count')
    const count = parseInt(json, 10)
    if (!isNaN(count)) {
      this.setState(() => ({ count }))
    } else {
      localStorage.setItem('count', this.state.count)
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count)
    }
  }
  handleAddOne() {
    this.setState((prevState) => ({count: prevState.count + 1}))
  }
  handleMinusOne() {
    this.setState((prevState) => ({count: prevState.count - 1}))
  }
  handleResetCount() {
    this.setState(() => ({count: 0}))
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleResetCount}>reset</button>
      </div>
    )
  }
}

Count.defaultProps = {
  count: 0
}

ReactDOM.render(<Count />, document.getElementById('app'))