import React from "react";

import Navbar from "../components/Navbar";

import CourseForm from "../components/CourseForm";
import CourseTable from "../components/CourseTable";

function Courses() {

  return (

    <div>

      <Navbar />

      <CourseForm />

      <CourseTable />

    </div>
  );
}

export default Courses;