import { useEffect, useState } from "react";
import { API } from "./config/api";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";
import "./App.css";
import StudentCard from "./components/StudentCard/StudentCard";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = async () => {
    const { data } = await API.get("/students");
    setStudents(data);
  };

  const deleteStudent = async (id) => {
    await API.delete(`students/${id}`);
    getAllStudents();
  };

  return (
    <div className="homepage">
      <Header title="Anggota HMSI ITK" />
      <div className="btn-add">
        <Button title="Tambah Anggota" href="/students/add" />
      </div>

      <div className="content">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            deleteHandler={deleteStudent}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
