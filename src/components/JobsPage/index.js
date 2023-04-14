import JobVacancyCard from "../JobVacancyCard";
import "./index.css";

import React, { useState, useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("myData"));
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const newData = {
      jobTitle,
      companyName,
      salary,
      date,
      time,
      description,
    };
    const updatedData = [...data, newData];
    setData(updatedData);
    localStorage.setItem("myData", JSON.stringify(updatedData));
    setJobTitle("");
    setCompanyName("");
    setSalary("");
    setDate("");
    setTime("");
    setDescription("");
    setShowModal(false);
  };

  return (
    <div className="App">
      <div className="add-button-con">
        <button onClick={() => setShowModal(true)}>Add Card</button>
      </div>
      {showModal && (
        <div id="modal" className="modal">
          <div className="modal-content">
            <form onSubmit={handleSave}>
              <label htmlFor="jobTitle">Job Title:</label>
              <input
                type="text"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                required
              />
              <label htmlFor="companyName">Company Name:</label>
              <input
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                required
              />
              <label htmlFor="salary">Salary:</label>
              <input
                type="text"
                id="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                required
              />
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
              <button type="submit">Submit</button>
              <button
                onClick={() => {
                  document.getElementById("modal").style.display = "none";
                }}
                type="button"
                className="cancel-btn"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="card-container">
        {data.map((item, index) => (
          <JobVacancyCard jobCardDetails={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;