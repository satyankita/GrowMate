
import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Classrooms from "./pages/Classrooms";
import JoinClassroom from "./pages/JoinClassroom";
import Classroom from "./pages/Classroom";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/classrooms" element={<Classrooms />} />
      <Route path="/classrooms/:classroomId" element={<Classroom />} />
      <Route path="/join" element={<JoinClassroom />} />
    </Routes>
  );
}

export default App;
