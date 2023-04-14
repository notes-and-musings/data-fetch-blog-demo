import React from "react";
import { Loader, Tab } from "semantic-ui-react";
import SubscriptionListTable from "./SubscriptionListTable";
import { useFetchSubscriptionList } from "./useFetchSubscriptionList";

export default function SubscriptionListContent() {
  const activeSubsQuery = useFetchSubscriptionList("ACTIVE");
  const inactiveSubsQuery = useFetchSubscriptionList("INACTIVE");

  if (activeSubsQuery.isLoading || inactiveSubsQuery.isLoading) {
    return <div>Loading ... </div>;
  }

  if (activeSubsQuery.isError || inactiveSubsQuery.isError) {
    return <div>Unable to fetch data. Please refresh </div>;
  }

  const panes = [
    {
      menuItem: "Active",
      render: () => (
        <Tab.Pane>
          <SubscriptionListTable filter="ACTIVE" />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Inactive",
      render: () => (
        <Tab.Pane>
          <SubscriptionListTable filter="INACTIVE" />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <div>
      <Tab panes={panes} />
    </div>
  );
}
