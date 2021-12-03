const Total = (props) => {
  const { exercises1, exercises2, exercises3 } = props
  return (
    <p>Number of exercise  { exercises1 + exercises2 + exercises3 }</p>
  )
}

export default Total
