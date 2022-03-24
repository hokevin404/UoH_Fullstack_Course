import ReactDOM from 'react-dom'
import App from './App'

let counter = 1

{/*
  App component given value of counter, via
  counter prop. Component renders value to 
  page

  ReactDOM.render(
    <App counter={counter} />, 
    document.getElementById('root')
  )
*/}

{/*
  Problem with previous code is it will only 
  render the page once since 'ReactDOM.render()
  is only ran once. Fix this by wrapping 
  re-rendering command inside of 'refresh' 
  function. Now renders three times, however, 
  values 1 and 2 are only displayed for a very 
  short time that can't be noticed. 
*/}

const refresh = () => {
  ReactDOM.render(<App counter={counter} />, 
    document.getElementById('root'))
}

refresh()
counter += 1
refresh()
counter += 1
refresh()

{/*
  Following function allows for re-rendering and 
  incrementing the counter every second
*/}

setInterval(() => {
  refresh()
  counter += 1
}, 1000)