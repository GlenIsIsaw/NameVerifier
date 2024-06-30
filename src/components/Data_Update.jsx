import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";
import { update } from "../Data/update.js";

const Data_Update = () => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Form className="mt-2">
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
          {update
            .filter(
              (item) =>
                item.First_Name.toLowerCase().includes(search.toLowerCase()) ||
                item.Last_Name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <tr key={item.id}>
                <td className="text-start text-capitalize">
                  {item.First_Name}
                </td>
                <td className="text-start text-capitalize">
                  {item.Middle_Name}
                </td>
                <td className="text-start text-capitalize fw-bold text-success">
                  {item.Last_Name}
                </td>
                <td className="text-center text-capitalize text-success fw-bold">
                 May 23, 2024
                </td>
                <td className="text-center text-capitalize text-success fw-bold">
                  Little Theater, Agro Sports Center 
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Data_Update;
