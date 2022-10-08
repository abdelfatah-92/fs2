const Total = ({course}) => {
    return (
    <h4> total of {course.parts.reduce((sum,f) => {
         return f.exercises + sum
         }, 0
        )} exercises
    </h4>
    )
  }

  export default Total