import React from "react";
import "./App.css";

import AddCourse from "./Components/AddCourse";
import CourseList from "./Components/CourseList";
import AddStudent from "./components/AddStudent";
import StudentList from "./Components/StudentList";

function App() {

  return (
    <div className="container">

     <AddStudent />

     <StudentList />

      <AddCourse />

      <CourseList />

    </div>
  );
}

export default App;