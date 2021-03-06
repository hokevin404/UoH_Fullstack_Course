const App = () => {
  const course = 'Half Stack Application Development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <p>
        <Header course={course} />
        <Content exercises={{part1:part1.name, exercises1:part1.exercises, 
                            part2:part2.name, exercises2:part2.exercises, 
                            part3:part3.name, exercises3:part3.exercises}} />
        <Total total={part1.exercises+part2.exercises+part3.exercises} />
      </p>
    </div>
  )
}

const Header = (props) => {
  return (
      <h1> 
        {props.course}
      </h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.exercises.part1} exercises={props.exercises.exercises1}/>
      <Part part={props.exercises.part2} exercises={props.exercises.exercises2}/>
      <Part part={props.exercises.part3} exercises={props.exercises.exercises3}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  return (
      <p>
        Total number of exercises: {props.total} 
      </p>
  )
}

export default App