const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <p>
        <Header course={course} />
        <Content part1={part1} part2={part2} part3={part3} 
                exercises1={exercises1} exercises2={exercises2}
                exercises3={exercises3}/>
        <Total total={exercises1+exercises2+exercises3} />
      </p>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1> 
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p> 
        {props.part1} has {props.exercises1} exercises
      </p>
      <p>
        {props.part2} has {props.exercises2} exercises
      </p>
      <p>
        {props.part3} has {props.exercises3} exercises
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Total number of exercises: {props.total} 
      </p>
    </div>
  )
}

export default App