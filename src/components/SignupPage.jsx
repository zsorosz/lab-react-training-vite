import React, { useState } from "react";

function SignupPage() {
  const [emailValue, setEmailValue] = useState("");
  const [nationality, setNationality] = useState("");
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };
  const handleNatChange = (event) => {
    setNationality(event.target.value);
  };
  return (
    <div>
      <form>
        <label>
          Email
          <input type="email" value={emailValue} onChange={handleEmailChange} />
        </label>
        <label>
          Password
          <input type="password" />
        </label>
        <label>
          Nationality
          <select value={nationality} onChange={handleNatChange}>
            <option value="en">en</option>
            <option value="de">de</option>
            <option value="fr">fr</option>
          </select>
        </label>
        <input type="submit" value="Sign up" />
      </form>
      <p>
        {nationality === "en"
          ? "Hello"
          : nationality === "de"
          ? "Hallo"
          : "Bonjour"}
      </p>
      <p>Your email address is: {emailValue}</p>
    </div>
  );
}

export default SignupPage;
