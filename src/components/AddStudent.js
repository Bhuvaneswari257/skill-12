import axios from "axios";
import { useState } from "react";

function AddStudent() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [course,setCourse] = useState("");

  const submit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8088/students", {
      name,
      email,
      course
    });

    alert("Student Added!");

    setName("");
    setEmail("");
    setCourse("");
  };

  return (
    <div className="card p-4">

      <h3 className="mb-3">Add Student</h3>

      <form onSubmit={submit}>

        <input
          className="form-control mb-3"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Course"
          value={course}
          onChange={(e)=>setCourse(e.target.value)}
        />

        <button className="btn btn-success w-100">Add Student</button>

      </form>

    </div>
  );
}

export default AddStudent;