import axios from "axios";
import { useState } from "react";

function AddStudent() {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    course: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  // PUT HERE
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(student);

    try {
      await axios.post(
        "http://localhost:9093/students",
        student
      );

      alert("Student Added");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={student.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={student.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={student.course}
          onChange={handleChange}
        />

        <button type="submit">
          Add Student
        </button>

      </form>
    </div>
  );
}

export default AddStudent;