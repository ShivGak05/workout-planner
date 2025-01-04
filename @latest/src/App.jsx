import React, { useState } from "react";
import "./App.css";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import ChatBot from "./components/ChatBot";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [goal, setGoal] = useState(5);
  const [completedWorkouts, setCompletedWorkouts] = useState(0);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, { id: Date.now(), ...workout }]);
    setCompletedWorkouts(completedWorkouts + 1);
  };

  const resetGoal = () => {
    setGoal(goal + 5);
    setCompletedWorkouts(0);
  };

  const deleteWorkout = (id) => {
    const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
    setWorkouts(updatedWorkouts);
    setCompletedWorkouts(completedWorkouts - 1);
  };

  return (
    <div className="App">
      <h1>🏋️ Workout Planner</h1>
      {completedWorkouts >= goal ? (
        <div className="congratulations">
          🎉 Congratulations! You’ve achieved your goal of {goal} workouts! 🎉
          <button onClick={resetGoal}>Set New Goal</button>
        </div>
      ) : (
        <p>Workouts Completed: {completedWorkouts}/{goal}</p>
      )}
      <WorkoutForm addWorkout={addWorkout} />
      <WorkoutList workouts={workouts} deleteWorkout={deleteWorkout} />
      <ChatBot />
    </div>
  );
}

export default App;
