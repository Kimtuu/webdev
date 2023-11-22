import { useEffect, useState } from "react";

// components

import WorkoutDetails from "../components/WorkoutDetails";

function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fethWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };
    fethWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
}
export default Home;
