import { useState } from "react";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {

  const [view, setView] = useState("list");

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">Student Management System</h2>

      {/* Tabs */}
      <div className="d-flex justify-content-center mb-4">
        <button
          className={`btn ${view === "list" ? "btn-primary" : "btn-outline-primary"} me-2`}
          onClick={() => setView("list")}
        >
          Student List
        </button>

        <button
          className={`btn ${view === "add" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setView("add")}
        >
          Add Student
        </button>
      </div>

      {/* Content */}
      {view === "list" ? <StudentList /> : <AddStudent />}

    </div>
  );
}

export default App;