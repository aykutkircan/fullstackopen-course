import Part from "./Part"
const Content = (props) => {
  const {parts} = props
  return(
    <div>
      {
        parts && parts.map((part, index) => {
          return <Part key={ index } part={ part } />
        })
      }
    </div>
  )
}

export default Content
