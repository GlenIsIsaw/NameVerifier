import React, { useState } from "react";
import { Table, Form, Col, Row } from "react-bootstrap";
import { data } from "../Data/data.js";

const Data_Table = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Form className="mt-5">
        <Form.Group className="mb-3">
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Your First Name Here..."
            className="text-capitalize text-secondary border border-2 border-success"
          />
        </Form.Group>
      </Form>
      <Table striped hover responsive="sm">
        <thead>
          <tr>
            <th className="text-start">First Name</th>
            <th className="text-start">Middle Name</th>
            <th className="text-start">Last Name</th>
            <th className="text-center">Date Schedule</th>
            <th className="text-center">Venue</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter(
              (item) =>
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <tr key={item.id}>
                <td className="text-start text-capitalize">
                  {item.first_name}
                </td>
                <td className="text-start text-capitalize">
                  {item.middle_name}
                </td>
                <td className="text-start text-capitalize fw-bold text-success">
                  {item.last_name}
                </td>
                <td className="text-center text-capitalize text-success fw-bold">
                  {item.date}
                </td>
                <td className="text-center text-capitalize text-success fw-bold">
                  {item.venue}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Data_Table;
