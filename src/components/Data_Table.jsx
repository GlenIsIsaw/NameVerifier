import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { data } from "../Data/data.js";

const Data_Table = () => {
  const [search, setSearch] = useState("");
  
  return (

    <div>
      <Form className="mt-5">
        <Form.Group className="mb-3 mx-5">
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
            <th className="text-center">No.</th>
            <th className="text-start">First Name</th>
            <th className="text-start">Last Name</th>
            <th className="text-start">Date Schedule</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.student_first_name.toLowerCase().includes(search);
            })
            .map((item) => (
              <tr key={item.id}>
                <td className="text-center text-capitalize">{item.id}</td>
                <td className="text-start text-capitalize">
                  {item.student_first_name}
                </td>
                <td className="text-start text-capitalize">
                  {item.student_last_name}
                </td>
                <td className="text-start fw-bold text-uppercase text-success">
                  March 1, 2024
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Data_Table;
