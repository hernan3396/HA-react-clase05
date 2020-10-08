import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("https://ha-auth-react.now.sh/auth", {
        username,
        password,
      });

      localStorage.setItem("token", result.data);

      history.push("/private");
    } catch (error) {
      setError(`hay un error ${error}`);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="hack"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            placeholder="academy"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button type="submit">login</button>
        {error}
      </form>
    </div>
  );
}
