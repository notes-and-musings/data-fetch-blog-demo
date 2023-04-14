import React from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import { useFetchSubscriptionList } from "./useFetchSubscriptionList";

export default function SubscriptionListTable({ filter }) {
  const { data } = useFetchSubscriptionList(filter);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Detail</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {/* {JSON.stringify(data, null, 2)} */}
        {data.map(({ id, first_name, last_name, email }) => (
          <Table.Row key={id}>
            <Table.Cell>{id}</Table.Cell>
            <Table.Cell>{first_name}</Table.Cell>
            <Table.Cell>{last_name}</Table.Cell>
            <Table.Cell>{email}</Table.Cell>
            <Table.Cell>
              <Link to={`/${id}`}>View more</Link>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
