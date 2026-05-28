import axios from "axios";
import React, { useEffect, useState } from "react";
import "./CourseList.css";

function CourseList() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:9093/courses");
      setCourses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // DELETE
  const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:9093/courses/${id}`);
      alert("Deleted Successfully");
      fetchCourses();
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT
  const editCourse = async (course) => {

    const updatedCourse = {
      course_name: prompt("Enter Course Name", course.course_name),
      fee: prompt("Enter Fee", course.fee),
      trainer_name: prompt("Enter Trainer Name", course.trainer_name)
    };

    try {

      await axios.put(
        `http://localhost:9093/courses/${course.id}`,
        updatedCourse
      );

      alert("Updated Successfully");

      fetchCourses();

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="table-container">

      <h2>Course List</h2>

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Fee</th>
            <th>Trainer Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>

        </thead>

        <tbody>

          {courses.map((course) => (

            <tr key={course.id}>

              <td>{course.id}</td>
              <td>{course.course_name}</td>
              <td>{course.fee}</td>
              <td>{course.trainer_name}</td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() => editCourse(course)}
                >
                  Edit
                </button>
              </td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteCourse(course.id)}
                >
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default CourseList;