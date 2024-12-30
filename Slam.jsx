import React, { useState, useEffect } from "react";

function SlamBook() {
  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    gender: "",
    favoriteActress: "",
    favoriteMovie: "",
    bestMemory: "",
    message: "",
  });

  useEffect(() => {
    Object.assign(document.body.style, styles.body); // Apply styles to the <body> element
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Slam Book Data:", formData);
    alert("Thank you for filling out the Slam Book!");
    setFormData({
      name: "",
      nickname: "",
      gender: "",
      favoriteActress: "",
      favoriteMovie: "",
      bestMemory: "",
      message: "",
    });
  };

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.heading}>My Slam Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" style={styles.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label htmlFor="nickname" style={styles.label}>
          Nickname:
        </label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          placeholder="Enter your nickname"
          value={formData.nickname}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label htmlFor="gender" style={styles.label}>
          Gender:
        </label>
        <label>
    <input
      type="radio"
      name="gender"
      value="male"
      textAlign="left"
      checked={formData.gender === "male"}
      onChange={handleChange}
      required
    />
    Male
  </label>
  <label>
    <input
      type="radio"
      name="gender"
      value="female"
      textAlign="left"
      checked={formData.gender === "female"}
      onChange={handleChange}
      required
    />
    Female
  </label>
  <label>
    <input
      type="radio"
      name="gender"
      value="other"
      textAlign="left"
      checked={formData.gender === "other"}
      onChange={handleChange}
      required
    />
    Other
  </label>

        <label htmlFor="favoriteActress" style={styles.label}>
          Favorite Actress:
        </label>
        <input
          type="text"
          id="favoriteActress"
          name="favoriteActress"
          placeholder="Enter favorite actress"
          value={formData.favoriteActress}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label htmlFor="favoriteMovie" style={styles.label}>
          Favorite Movie:
        </label>
        <input
          type="text"
          id="favoriteMovie"
          name="favoriteMovie"
          placeholder="Enter favorite movie"
          value={formData.favoriteMovie}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label htmlFor="bestMemory" style={styles.label}>
          Best Memory:
        </label>
        <textarea
          id="bestMemory"
          name="bestMemory"
          placeholder="Describe your best memory"
          value={formData.bestMemory}
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>

        <label htmlFor="message" style={styles.label}>
          Message for Friends:
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Write a special message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
  body: {
    backgroundImage: "url('https://www.fabmood.com/wp-content/uploads/2022/01/brown-aesthetic-wallpaper-4.jpg')", // Replace with your image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  },
  formContainer: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Slight transparency to show background
    border: "2px solid #f4a261",
    borderRadius: "10px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    color: "black",
    marginBottom: "20px",
    fontFamily: "'Georgia', serif",
  },
  label: {
    fontWeight: "bold",
    color: "#264653",
    marginTop: "10px",
    display: "block",
    textAlign: "left",
  },
  input: {
    width: "95%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  textarea: {
    width: "95%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    resize: "vertical",
    height: "100px",
  },
  button: {
    display: "block",
    backgroundColor: "#e76f51",
    color: "white",
    padding: "12px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    margin: "20px auto",
    transition: "background-color 0.3s ease",
  },
};

export default SlamBook;
