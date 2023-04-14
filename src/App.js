import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import SubscriptionList from "./SubscriptionList";
import SubscriptionDetail from "./SubscriptionDetail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SubscriptionList />} />
      <Route path="/:id" element={<SubscriptionDetail />} />
    </Routes>
  );
}

function About() {
  return (
    <div>
      <Link to="/">Home</Link>
      <h2>About</h2>
    </div>
  );
}
