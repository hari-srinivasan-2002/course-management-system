import React, { useState } from "react";
import API from "../services/api";

function StudentForm() {

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

  const handleSubmit = async (e) => {

    e.preventDefault();

    // Validation
    if (
      !student.name ||
      !student.email ||
      !student.phone ||
      !student.course
    ) {
      alert("Please fill all fields");
      return;
    }

    try {

      await API.post("/students", student);

      alert("Student Added Successfully");

      setStudent({
        name: "",
        email: "",
        phone: "",
        course: ""
      });

    } catch (error) {

      console.log(error);

      alert("Failed to Add Student");
    }
  };

  return (

    <div className="form-container">

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

export default StudentForm;