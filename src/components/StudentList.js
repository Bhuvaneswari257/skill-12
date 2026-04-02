import axios from "axios";
import { useEffect, useState } from "react";

function StudentList() {

  const [students,setStudents] = useState([]);

  useEffect(()=>{
    loadStudents();
  },[]);

  const loadStudents = () => {
    axios.get("http://localhost:8088/students")
      .then(res => {
        setStudents(res.data);
      });
  };

  const deleteStudent = (id) => {
    axios.delete("http://localhost:8088/students/"+id)
      .then(() => {
        loadStudents();
      });
  };

  return (
    <div className="card p-4">

      <h3 className="mb-3">Student List</h3>

      <table className="table table-bordered table-striped">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s)=>(
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.course}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2">
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={()=>deleteStudent(s.id)}
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