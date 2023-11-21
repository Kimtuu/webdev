import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const signUpInformation = {
      email,
      password,
      nationality,
      submittedOn: new Date(),
    };
    console.log(signUpInformation);

    setEmail("");
    setPassword("");
    setNationality("");
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <label htmlFor="email">Email</label>
        <input
          className="input"
          id="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label htmlFor="password">Password</label>
        <input
          className="input"
          id="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <select
          name="nationality"
          onChange={(e) => setNationality(e.target.value)}
          value={nationality}
          className="input"
        >
          <option value="" disabled>
            Select nationality
          </option>
          <option value="en">en</option>
          <option value="de">de</option>
          <option value="fr">fr</option>
        </select>

        <p>
          {nationality === "en" && "Hello"}
          {nationality === "de" && "Hallo"}
          {nationality === "fr" && "Bonjour"}
        </p>

        <p>Your email is {email}</p>

        <button onClick={onSubmit}>Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
