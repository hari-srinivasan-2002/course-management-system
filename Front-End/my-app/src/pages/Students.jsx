import React from "react";

import Navbar from "../components/Navbar";

import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

function Students() {

  return (

    <div>

      <Navbar />

      <StudentForm />

      <StudentTable />

    </div>
  );
}

export default Students;