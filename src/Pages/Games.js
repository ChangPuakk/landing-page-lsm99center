import React, { useState } from "react";
import "../Style/Games.css";

export default function Games() {
  const [linkLogin, setLinkLogin] = useState(
    "https://lemon-field-0d7324f00.2.azurestaticapps.net/login"
  );
  return (
    <>
      <div>
        <div className="games">
        </div>
      </div>
    </>
  );
}
