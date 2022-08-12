import Button from "../Button/Button";
import "./StudentCard.css";

const StudentCard = ({ student, deleteHandler }) => {
  return (
    <div className="student-card-container">
      <div className="student-card-header">
        <h1 className="student-card-name">{student.name}</h1>
        <p className="student-card-nim">{student.nim}</p>
      </div>
      <div className="student-card-body">
        <p className="student-card-data">Himpunan Mahasiswa Sistem Informasi</p>
        <p className="student-card-data">Kabinet {student.cabinet}</p>
        <p className="student-card-data">
          {student.position} {student.department}
        </p>
      </div>
      <div className="student-card-btn-container">
        <Button
          title="Hapus"
          type="secondary"
          onClick={() => deleteHandler(student.id)}
        />
        <Button title="Edit" href={`/students/${student.id}`} />
      </div>
    </div>
  );
};

export default StudentCard;
