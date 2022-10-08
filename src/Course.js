
const Course = ({course}) => {
    console.log(course);
   return (
   <div>
    {course.parts.map((x) => {
       return <p key={x.id}> {x.name}  {x.exercises} </p>
       })
     }
   </div>
   )
  }

  export default Course