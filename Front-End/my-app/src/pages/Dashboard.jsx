import React, { useEffect, useState } from "react";

import API from "../services/api";

import Navbar from "../components/Navbar";

import "./Dashboard.css";

function Dashboard() {

  const [courseCount, setCourseCount] =
    useState(0);

  const [studentCount, setStudentCount] =
    useState(0);

  useEffect(() => {

    fetchData();

  }, []);

  const fetchData = async () => {

    try {

      const courseResponse =
        await API.get("/courses");

      const studentResponse =
        await API.get("/students");

      setCourseCount(
        courseResponse.data.length
      );

      setStudentCount(
        studentResponse.data.length
      );

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div>

      <Navbar />

      <div className="dashboard-container">

        <h1>Dashboard</h1>

        <div className="dashboard-cards">

          <div className="card">

            <h2>Total Courses</h2>

            <p>{courseCount}</p>

          </div>

          <div className="card">

            <h2>Total Students</h2>

            <p>{studentCount}</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;