import React from "react";
import "./Index.css"; // Create a CSS file for styles and import it here
import { Link } from "react-router-dom";

class FlashCardApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here using this.state.username and this.state.password
    // For example, you can send a request to a backend API for authentication
    console.log("Login clicked!");
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
            <Link to="/Index" style={{ textDecoration: "none" }}>
              <button>Login</button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default FlashCardApp;
