import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import { API } from "../../config/api";
import "./AddStudent.css";

const AddStudent = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [cabinet, setCabinet] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");

  const addHandler = async () => {
    const body = {
      id: nim,
      name: name,
      nim: nim,
      cabinet: cabinet,
      department: department,
      position: position,
    };
    await API.post("/students", body);

    navigate("/");
  };

  return (
    <div className="add-student-page">
      <Header title="Tambah Anggota" />

      <div className="add-student-body">
        <div className="input-form">
          <div className="input-group">
            <label htmlFor="name">Nama:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="nim">NIM:</label>
            <input
              type="text"
              id="nim"
              name="nim"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="cabinet">Kabinet:</label>
            <input
              type="text"
              id="cabinet"
              name="cabinet"
              value={cabinet}
              onChange={(e) => setCabinet(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="department">Departemen:</label>
            <input
              type="text"
              id="department"
              name="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="position">Jabatan:</label>
            <input
              type="text"
              id="position"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>

          <div style={{display: "flex"}}>
            <Button title="Batal" type="secondary" href="/" />
            <Button title="Tambah" onClick={addHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
