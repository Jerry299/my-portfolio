import React from "react";
import "./FlashMessage.css";

const FlashMessage = ({ message }) => {
  return (
    <main>
      <section id="snackbar-container">
        <p className="snackbar">{message.message}</p>
      </section>
    </main>
  );
};

export default FlashMessage;
