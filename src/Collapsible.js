import React, { useState } from "react";
import "./App.css";

function Collapsible() {
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <div className="Collapsible">
      <button className="button" onClick={() => setIsOpen(!IsOpen)}>
        Why park a domain name in Parkname?
      </button>
      {IsOpen && (
        <div className="paragraph">
          Parkname is the leading indrustry for domain name parking and
          monetization services. We offer a wide variety of services to help you
          achieve success.
        </div>
      )}
    </div>
  );
}

export default Collapsible;
