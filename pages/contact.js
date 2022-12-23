import React, { useState } from "react";
import styles from "/styles/Contact.module.css";

const contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone, email, name, desc);
    const data = { phone, name, email, desc };
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Thanks for conatacting us")
        setphone('')
        setname('')
        setdesc('')
        setemail('')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleChange = (e) => {
    if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    } else if (e.target.name == "name") {
      setname(e.target.value);
    }
  };
  

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <htmlForm onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.htmlFormlabel}>
            Enter your name
          </label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            className="htmlForm-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.htmlFormlabel}>
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            className="htmlForm-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="htmlForm-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.htmlFormlabel}>
            Phone
          </label>
          <input
            type="phone"
            value={phone}
            onChange={handleChange}
            className="htmlForm-control"
            name="phone"
            id="phone"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="desc">Elaborate your Concern</label>
          <textarea
            className="htmlForm-control"
            onChange={handleChange}
            placeholder="write your concern here"
            name="desc"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </htmlForm>
      
      <div></div>
    </div>
  );
};

export default contact;

<>

<div className="container">
  system.parse.json(22kytmntia)
</div>
</>

