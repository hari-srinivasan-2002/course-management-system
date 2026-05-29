import React, { useEffect, useState } from "react";

import API from "../services/api";

import "./Table.css";

function StudentTable() {

  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchStudents();

  }, []);

  const fetchStudents = async () => {

    try {

      const response =
        await API.get("/students");

      setStudents(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  // DELETE STUDENT
  const deleteStudent = async (id) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete?"
      );

    if (!confirmDelete) return;

    try {

      await API.delete(`/students/${id}`);

      alert("Student Deleted");

      fetchStudents();

    } catch (error) {

      console.log(error);
    }
  };

  // EDIT STUDENT
  const editStudent = async (student) => {

    const updatedStudent = {

      name: prompt(
        "Enter Name",
        student.name
      ),

      email: prompt(
        "Enter Email",
        student.email
      ),

      phone: prompt(
        "Enter Phone",
        student.phone
      ),

      course: prompt(
        "Enter Course",
        student.course
      )
    };

    try {

      await API.put(
        `/students/${student.id}`,
        updatedStudent
      );

      alert("Student Updated");

      fetchStudents();

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="table-container">

      <h2>Student List</h2>

      {/* SEARCH BOX */}

      <input
        type="text"
        placeholder="Search Student"
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
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Edit</th>
            <th>Delete</th>

          </tr>

        </thead>

        <tbody>

          {students

            .filter((student) =>

              student.name
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            )

            .map((student) => (

              <tr key={student.id}>

                <td>{student.id}</td>

                <td>{student.name}</td>

                <td>{student.email}</td>

                <td>{student.phone}</td>

                <td>{student.course}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      editStudent(student)
                    }
                  >
                    Edit
                  </button>

                </td>

                <td>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteStudent(student.id)
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

export default StudentTable;