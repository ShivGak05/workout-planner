import React from "react";
import "./WorkoutItem.css";

const WorkoutItem = ({ workout, deleteWorkout }) => {
  return (
    <div className="workout-item">
      <h3>{workout.title}</h3>
      <p>Duration: {workout.duration} mins</p>
      <p>Date: {workout.date}</p>
      <button onClick={() => deleteWorkout(workout.id)}>Delete</button>
    </div>
  );
};

export default WorkoutItem;
