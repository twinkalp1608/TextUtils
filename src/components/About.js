import React from 'react';

export default function About({ mode, themeColor }) {

  const myStyle = {
    color: mode === "dark" ? "white" : "black",
    backgroundColor: mode === "dark" ? themeColor : "white",
    padding: "20px",
    borderRadius: "10px"
  };

  return (
    <div className="container my-4" style={myStyle}>
      <h1 className="text-center mb-4">About TextUtils</h1>

      {/* Image */}
      <div className="text-center mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
          alt="TextUtils"
          style={{ width: '150px' }}
        />
      </div>

      {/* Description */}
      <p className="lead text-center">
        <strong>TextUtils</strong> is a powerful and simple text utility website
        that helps users analyze and manipulate text efficiently.
      </p>

      {/* Accordion */}
      <div className="accordion" id="accordionExample">

        {/* Feature */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              ✨ Features
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show">
            <div className="accordion-body" style={myStyle}>
              TextUtils allows you to convert text to uppercase,
              lowercase, remove extra spaces, extract emails,
              copy text, and analyze word count instantly.
            </div>
          </div>
        </div>

        {/* Why */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              🚀 Why TextUtils?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse">
            <div className="accordion-body" style={myStyle}>
              It is fast, user-friendly, responsive,
              and supports dark mode for better readability.
            </div>
          </div>
        </div>

        {/* Built With */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              🛠 Built With
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse">
            <div className="accordion-body" style={myStyle}>
              TextUtils is built using <strong>React JS</strong> and
              <strong> Bootstrap</strong> to provide a smooth and modern UI experience.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
