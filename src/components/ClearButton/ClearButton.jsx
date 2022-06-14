import React from "react";
import { connect } from "react-redux";

const ClearButton = ({ children, isEnabled, onClick }) => (
  <div className="su-action-filter">
    <button
      disabled={!isEnabled}
      onClick={() => onClick()}
      className="su-button su-btn-filter"
    >
      {children}
    </button>
  </div>
);

export default ClearButton;
