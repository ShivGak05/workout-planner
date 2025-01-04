import React from "react";
import WorkoutItem from "./WorkoutItem";
import "./WorkoutList.css";

const WorkoutList = ({ workouts, deleteWorkout }) => {
  return (
    <div className="workout-list">
      {workouts.length === 0 ? (
        <p>No workouts added yet!</p>
      ) : (
        workouts.map((workout) => (
          <WorkoutItem
            key={workout.id}
            workout={workout}
            deleteWorkout={deleteWorkout}
          />
        ))
      )}
    </div>
  );
};

export default WorkoutList;
