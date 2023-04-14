import React from "react";
import { Link, useParams } from "react-router-dom";
import { Table, Image } from "semantic-ui-react";
import { useFetchSubscriptionDetails } from "./useFetchSubscriptionDetails";

export default function SubscriptionDetail() {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetchSubscriptionDetails(id);

  if (isLoading) {
    return <div>Loading ... </div>;
  }

  if (isError) {
    return <div>Unable to fetch data. Please refresh </div>;
  }

  return (
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Image</Table.Cell>
          <Table.Cell>
            <Image src={data.image} size="small" />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>
            {data.first_name} {data.last_name}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Email</Table.Cell>
          <Table.Cell>{data.email}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Gender</Table.Cell>
          <Table.Cell>{data.gender}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Address</Table.Cell>
          <Table.Cell>{data.address}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>IP Address</Table.Cell>
          <Table.Cell>{data.ip_address}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell />
          <Table.Cell>
            <Link to="/">Back</Link>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
