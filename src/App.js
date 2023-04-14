import { Routes, Route, Link } from "react-router-dom";
import SubscriptionList from "./SubscriptionList";
import SubscriptionDetail from "./SubscriptionDetail";
import { Container } from "semantic-ui-react";

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SubscriptionList />} />
        <Route path="/:id" element={<SubscriptionDetail />} />
      </Routes>
    </Container>
  );
}
