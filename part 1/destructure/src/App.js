{/*
  // Simple component example
  const Hello = (props) => {
    return (
      <div>
        <p>Hello {props.name}, you are {props.age} years old</p>
      </div>
    )
  }
*/}

{/*
  // COMPONENT HELPER FUNCTIONS
  // Function within function, common in JavaScript
  // Person's age doesn't have to be passed as parameter
  //  to function since it can directly access all props
  //  passed to component

  const Hello = (props) => {
    
    const bornYear = () => {
      const yearNow = new Date().getFullYear()
      return yearNow - props.age
    }
    
    return (
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
        <p>So you were probably born in {bornYear()}</p>
      </div>
    )
  }
*/}

{/*
  //  DESTRUCTURING
  //  Destructuring allows for values to be unpacked from
  //    arrays, or properties from objects, into distinct
  //    variables
*/}
const Hello = (props) => {

  //  ********************Destructure method I****************
  const name = props.name
  const age = props.age

  //  ********************Destructure method II***************
  //  Unpack or extract values of 'props' object's properties
  //    into separate variables if it has following values:
  //      props = {
  //          name: 'Arto',
  //          age: 35,
  //      }
  //  *******************************************************
  //  const { name, age } = props

  //  *******************Destructue method III***************
  //  Props passed to component now directly destructured
  //    into the variables
  //  *******************************************************
  //  const Hello = ({ name, age }) => {

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name='Peter'
  const age = 21

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" age={10 + 10}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

export default App