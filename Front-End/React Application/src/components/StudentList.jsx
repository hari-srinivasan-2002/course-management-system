import axios from "axios";
import React, { useEffect, useState } from "react";
import "./StudentList.css";

function StudentList() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {

    try {

      const response = await axios.get(
        "http://localhost:9093/students"
      );

      setStudents(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  // DELETE
  const deleteStudent = async (id) => {

    try {

      await axios.delete(
        `http://localhost:9093/students/${id}`
      );

      alert("Student Deleted");

      fetchStudents();

    } catch (error) {
      console.log(error);
    }
  };

  // EDIT
  const editStudent = async (student) => {

    const updatedStudent = {

      name: prompt("Enter Name", student.name),

      email: prompt("Enter Email", student.email),

      phone: prompt("Enter Phone", student.phone),

      course: prompt("Enter Course", student.course)

    };

    try {

      await axios.put(
        `http://localhost:9093/students/${student.id}`,
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

          {students.map((student) => (

            <tr key={student.id}>

              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.course}</td>

              <td>

                <button
                  className="edit-btn"
                  onClick={() => editStudent(student)}
                >
                  Edit
                </button>

              </td>

              <td>

                <button
                  className="delete-btn"
                  onClick={() => deleteStudent(student.id)}
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

export default StudentList;