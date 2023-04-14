import { Routes, Route, Link, Outlet } from "react-router-dom";
import SubscriptionList from "./SubscriptionList";
import SubscriptionDetail from "./SubscriptionDetail";
import { Container, Loader } from "semantic-ui-react";
import { useIsFetching } from "react-query";

export default function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SubscriptionList />} />
          <Route path=":id" element={<SubscriptionDetail />} />
        </Route>
      </Routes>
    </Container>
  );
}

function Layout() {
  const isFetching = useIsFetching();

  return (
    <div>
      {isFetching > 0 && <Loader active />}
      <Outlet />
    </div>
  );
}
