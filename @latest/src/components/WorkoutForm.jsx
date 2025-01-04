import React, { useState } from "react";
import "./WorkoutForm.css";

const WorkoutForm = ({ addWorkout }) => {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !duration || !date) {
      alert("Please fill in all fields!");
      return;
    }
    addWorkout({ title, duration, date });
    setTitle("");
    setDuration("");
    setDate("");
  };

  return (
    <form className="workout-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Workout Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration (mins)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Workout</button>
    </form>
  );
};

export default WorkoutForm;
