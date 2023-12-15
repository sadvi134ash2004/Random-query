import React from "react";
import "./Index.css"; // Create a CSS file for styles and import it here
import { Link } from "react-router-dom";

class FlashCardApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
    };

    // Temporary database to store user credentials
    this.userDatabase = [
      { username: "2211cs010064", password: "vishnu" },
      { username: "2211cs010067", password: "sadvi" },
      { username: "2211cs010258", password: "saikrishna" },
    ];
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value, errorMessage: "" });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    const user = this.userDatabase.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      console.log("Login successful!");
    } else {
      this.setState({ errorMessage: "Invalid username or password" });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="login-container">
          <h3>Login to Random Query</h3>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChange}
              required
            />
            <button type="submit">
              <Link to="/Index" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </button>
            {this.state.errorMessage && (
              <p style={{ color: "red" }}>{this.state.errorMessage}</p>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default FlashCardApp;
