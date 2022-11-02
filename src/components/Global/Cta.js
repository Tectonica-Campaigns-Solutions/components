import React from "react";

export default function Cta({ url, label, isButton = false }) {
  return (
    <div>
      <a className={`btn ${isButton ? "btn-primary" : ""}`} href={url}>
        {label && label}
      </a>
    </div>
  );
}
