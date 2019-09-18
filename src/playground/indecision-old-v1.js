
const app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer.',
    options: ['one', 'two', 'three']
  }
  
  const onFormSubmit = (event) => {
    event.preventDefault()
    const option = event.target.elements.option.value.trim()
  
    if (option) {
      app.options.push(option)
      renderIndecision()
    }
  
    event.target.elements.option.value = ''
  }
  
  const makeDecision = () => {
    const randomIndex = Math.floor(Math.random() * app.options.length)
    console.log(app.options[randomIndex])
  }
  
  const renderIndecision = () => {
    const template = (
      <div>
        <h1>{app.title}</h1>
        <h3>{app.subtitle}</h3>
        <button disabled={app.options.length === 0} onClick={makeDecision}>What Should I Do?</button>
        <ul>
          {
            app.options.map((option) => <li key={option}>{option}</li>)
          }
        </ul>
        <form onSubmit={onFormSubmit}>
          <input type='text' name='option' />
          <button>Add item</button>
        </form>
      </div>
    )
  
    const appDOM = document.getElementById('app')
  
    ReactDOM.render(template, appDOM)
  }
  
  renderIndecision()