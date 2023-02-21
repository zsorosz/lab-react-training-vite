import React from "react";

function Greetings({ lang, children }) {
  return (
    <div>
      {lang === "de"
        ? "Hallo "
        : lang === "es"
        ? "Hola "
        : lang === "fr"
        ? "Bonjour "
        : "Hi "}
      {children}
    </div>
  );
}
export default Greetings;
