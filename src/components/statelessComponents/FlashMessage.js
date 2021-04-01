import React from "react";
import "./FlashMessage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";

const FlashMessage = ({ message }) => {
  if (message.message) {
    return (
      <main>
        <section id="snackbar-container">
          <div className="icon-container">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <div className="message-container">
            <p>Yay!!</p>
            <p className="server-message">{message.message}</p>
          </div>
        </section>
      </main>
    );
  }

  if (message.error) {
    return (
      <main>
        <section id="snackbar-container">
          <div className="icon-container-error">
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>
          <div className="message-container">
            <p>Error!!</p>
            <p className="server-message">{message.error}</p>
          </div>
        </section>
      </main>
    );
  }
};

export default FlashMessage;
