import React, { useEffect, useState } from "react";

import API from "../services/api";

import "./Table.css";

function CourseTable() {

  const [courses, setCourses] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchCourses();

  }, []);

  const fetchCourses = async () => {

    try {

      const response =
        await API.get("/courses");

      setCourses(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  // DELETE COURSE
  const deleteCourse = async (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete?"
      );

    if (!confirmDelete) return;

    try {

      await API.delete(`/courses/${id}`);

      alert("Course Deleted");

      fetchCourses();

    } catch (error) {

      console.log(error);
    }
  };

  // EDIT COURSE
  const editCourse = async (course) => {

    const updatedCourse = {

      courseName: prompt(
        "Enter Course Name",
        course.courseName
      ),

      fee: prompt(
        "Enter Fee",
        course.fee
      ),

      trainerName: prompt(
        "Enter Trainer Name",
        course.trainerName
      )
    };

    try {

      await API.put(
        `/courses/${course.id}`,
        updatedCourse
      );

      alert("Course Updated");

      fetchCourses();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="table-container">

      <h2>Course List</h2>

      {/* SEARCH BOX */}

      <input
        type="text"
        placeholder="Search Course"
        className="search-box"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

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

          {courses

            .filter((course) =>

              course.courseName
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            )

            .map((course) => (

              <tr key={course.id}>

                <td>{course.id}</td>

                <td>{course.courseName}</td>

                <td>{course.fee}</td>

                <td>{course.trainerName}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      editCourse(course)
                    }
                  >
                    Edit
                  </button>

                </td>

                <td>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteCourse(course.id)
                    }
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

export default CourseTable;