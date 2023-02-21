import React, { useState } from "react";
import profiles from "../data/berlin.json";

function FaceBook() {
  const [selectedCountry, setSelectedCountry] = useState("");
  let allCountries = [];
  profiles.map((profile) => {
    allCountries.push(profile.country);
  });
  let countries = [...new Set(allCountries)];
  const filterProfiles = (event) => {
    setSelectedCountry(event.target.id);
  };
  const blueBg = {
    backgroundColor: "blue",
  };
  const whiteBg = {
    backgroundColor: "white",
  };
  console.log(selectedCountry);
  return (
    <div>
      <div>
        {countries.map((country) => (
          <button id={country} onClick={filterProfiles}>
            {country}
          </button>
        ))}
      </div>
      {profiles.map((profile) => (
        <div style={profile.country === selectedCountry ? blueBg : whiteBg}>
          <img width="100" src={profile.img} alt={profile.lastName} />
          <div>
            <p>First name: {profile.firstName}</p>
            <p>Last name: {profile.lastName}</p>
            <p>Country: {profile.country}</p>
            <p>Type: {profile.isStudent ? "Student" : "Teacher"}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaceBook;
