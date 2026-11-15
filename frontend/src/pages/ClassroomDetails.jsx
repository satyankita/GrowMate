
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ClassroomDetails() {
  const { classroomId } = useParams();
  const navigate = useNavigate();

  const [classroom, setClassroom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClassroom = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `http://localhost:5000/api/classrooms/${classroomId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setClassroom(response.data);
      } catch (error) {
        console.error("Classroom Error:", error);
        alert(error.response?.data?.message || "Could not load classroom");
        navigate("/classrooms");
      } finally {
        setLoading(false);
      }
    };

    fetchClassroom();
  }, [classroomId, navigate]);

  if (loading) return <p>Loading classroom...</p>;

  if (!classroom) return <p>Classroom not found.</p>;

  return (
    <div>
      <button onClick={() => navigate("/classrooms")}>
        Back to Classrooms
      </button>

      <h1>{classroom.name}</h1>
      <p>{classroom.description}</p>
      <p>Total Members: {classroom._count.members}</p>

      <h2>All Participants</h2>

      {classroom.members.map((member) => (
        <div key={member.id}>
          <p>{member.user.name}</p>
          <p>{member.user.email}</p>
          <p>Role: {member.role}</p>
        </div>
      ))}
    </div>
  );
}

export default ClassroomDetails;
