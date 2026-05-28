import React, { useState } from "react";
import axios from "axios";

function AddCourse() {

  const [course, setCourse] = useState({
    courseName: "",
    fee: "",
    trainerName: ""
  });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    await axios.post("http://localhost:9093/courses", course);

    alert("Course Added");

    setCourse({
      courseName: "",
      fee: "",
      trainerName: ""
    });
  };

  return (
    <div>

      <h2>Add Course</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="courseName"
          placeholder="Course Name"
          value={course.courseName}
          onChange={handleChange}
        />

        <input
          type="number"
          name="fee"
          placeholder="Fee"
          value={course.fee}
          onChange={handleChange}
        />

        <input
          type="text"
          name="trainerName"
          placeholder="Trainer Name"
          value={course.trainerName}
          onChange={handleChange}
        />

        <button type="submit">Add Course</button>

      </form>

    </div>
  );
}

export default AddCourse;