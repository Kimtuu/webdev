
import "./App.css";
import Profile from "./profile.js";

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        awards={["Nobel Prize in Physics", "Nobel Prize in Chemistry,Davy Medal, Matteucci Medal"]}
        discovery="Polonium and Radium"
      />
      <Profile
      imageId="YfeOqp2"
      name="Katsuko Saruhashi"
      profession="geochemist"
      awards={["The Miyake Prize for geochemistry", "The Tanaka Prize for oceanography"]}
      discovery="Saruhashi developed a method for measuring the concentration of carbonic acid in water by measuring the pH level of water samples."
      />
    </div>
  );
}
