import React, { useState } from "react";
import API from "../services/api";

function CourseForm() {

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

    // Validation
    if (
      !course.courseName ||
      !course.fee ||
      !course.trainerName
    ) {
      alert("Please fill all fields");
      return;
    }

    try {

      await API.post("/courses", course);

      alert("Course Added Successfully");

      setCourse({
        courseName: "",
        fee: "",
        trainerName: ""
      });

    } catch (error) {

      console.log(error);

      alert("Failed to Add Course");
    }
  };

  return (

    <div className="form-container">

      <h2>Add Course</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="courseName"
          placeholder="Enter Course Name"
          value={course.courseName}
          onChange={handleChange}
        />

        <input
          type="number"
          name="fee"
          placeholder="Enter Fee"
          value={course.fee}
          onChange={handleChange}
        />

        <input
          type="text"
          name="trainerName"
          placeholder="Enter Trainer Name"
          value={course.trainerName}
          onChange={handleChange}
        />

        <button type="submit">
          Add Course
        </button>

      </form>

    </div>
  );
}

export default CourseForm;