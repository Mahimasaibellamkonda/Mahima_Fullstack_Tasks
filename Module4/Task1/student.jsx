function Student({ name, rollNo, course, college }) {
  return (
    <div>
      <h2>Student Profile</h2>
      <p>Name: {name}</p>
      <p>Roll No: {rollNo}</p>
      <p>Course: {course}</p>
      <p>College: {college}</p>
    </div>
  );
}

export default Student;