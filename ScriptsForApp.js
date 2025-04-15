import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  return (
    <Router>
      <div className="container text-center border p-4 mt-4">
        <h4>TV APPS</h4>
        <div className="d-flex justify-content-around mb-3">
          <Link to="/netflix">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" height="40" alt="Netflix" />
          </Link>
          <Link to="/hbomax">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" height="40" alt="HBO Max" />
          </Link>
          <Link to="/hulu">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" height="40" alt="Hulu" />
          </Link>
          <Link to="/prime">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" height="40" alt="Prime Video" />
          </Link>
        </div>

        <Switch>
          <Route path="/:id">
            <Child />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Child() {
  const { id } = useParams();
  const formattedId = id.charAt(0).toUpperCase() + id.slice(1);
  return (
    <div>
      <p>You Selected: <strong>{formattedId}</strong></p>
    </div>
  );
}
