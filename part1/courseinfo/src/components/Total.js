const Total = (props) => {
  const { parts } = props

  const totalNumber = parts.reduce((acc, part) => {
    return acc + part.exercises
  }, 0)

  return (
    <p>Number of exercises  { totalNumber }</p>
  )
}

export default Total
