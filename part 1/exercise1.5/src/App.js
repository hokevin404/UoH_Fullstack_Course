const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
        <Header course = {course} />
        <Content course = {course} />
        <Total course = {course} />
    </div>
  )
}

const Header = (props) => {
  return (
      <h1> 
        {props.course.name}
      </h1>
  )
}

const Content = (props) => {
  const list = props.course.parts.map(function(value) {
    return (
      <div>
        {value.name}: {value.exercises} 
      </div>
    )
  })
  
  return (
    list
  )
}

const Total = (props) => {
  let score = 0
  props.course.parts.map(function(value) {
    return (
      score += value.exercises
    )
  })

  return (
      <p>
        Total number of exercises: {score}
      </p>
  )
}

export default App