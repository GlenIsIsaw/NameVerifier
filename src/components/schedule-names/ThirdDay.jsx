import React, { useState, useEffect } from "react";
import { Table, Form, Pagination, Container } from "react-bootstrap";
import FloatingButton from "../FloatingButton";
import PopCard from "../PopCard";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputGroup from "react-bootstrap/InputGroup";
import { thirdDay } from "../../Data/thirdDay.js"; // Import the actual data
import '../../App.css';

const ThirdDay = () => {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isUnderMaintenance, setIsUnderMaintenance] = useState(true); //change to true for maintenance, switch to false if showing schedule
  const clientsPerPage = 15;

  // Load data on mount
  useEffect(() => {
    setClients(thirdDay);
  }, []);

  if (isUnderMaintenance) {
        return (
          <Container className="text-center mt-5">
            <p className="text-danger sub-title">NOT FOUND</p>
            <p className="fs-4 custom-text">No data is currently available for display.</p>
            <p className="fs-5 custom-text">Please check back later.</p>
          </Container>
        );
      }
  

  // Filter clients based on search input
  const filteredClients = clients.filter((client) =>
    Object.values(client).some((value) =>
      value.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  // Pagination Logic
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = filteredClients.slice(
    indexOfFirstClient,
    indexOfLastClient
  );
  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);

  const renderPaginationItems = () => {
    const paginationItems = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
          <Pagination.Item
            key={i}
            active={i === currentPage}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </Pagination.Item>
        );
      }
    } else {
      paginationItems.push(
        <Pagination.Item
          key={1}
          active={1 === currentPage}
          onClick={() => setCurrentPage(1)}
        >
          1
        </Pagination.Item>
      );

      if (currentPage > 3) {
        paginationItems.push(
          <Pagination.Ellipsis key="start-ellipsis" disabled />
        );
      }

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        paginationItems.push(
          <Pagination.Item
            key={i}
            active={i === currentPage}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </Pagination.Item>
        );
      }

      if (currentPage < totalPages - 2) {
        paginationItems.push(
          <Pagination.Ellipsis key="end-ellipsis" disabled />
        );
      }

      paginationItems.push(
        <Pagination.Item
          key={totalPages}
          active={totalPages === currentPage}
          onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </Pagination.Item>
      );
    }

    return paginationItems;
  };

  return (
    <Container className="mt-4">
      <p className="text-center mb-3 text-uppercase fw-bold schedule-text fs-3">
        March 13, 2025
        <br />
        <span className="fs-6 fw-semibold text-success">Date</span>
      </p>

      <p className="text-center mb-3 text-uppercase fw-bold schedule-sub-text fs-3">
        BARANGAY II Covered Court ( Daet )
        <br />
        <span className="fs-6 fw-semibold text-success">Venue</span>
      </p>
     

      {/* Search Input */}
      <InputGroup className="mb-3 border border-success border-3 rounded-2">
        <InputGroup.Text id="basic-addon1">
          <FontAwesomeIcon icon={faSearch} />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search Your Name Here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>

      {/* Client Table */}
      <Table striped bordered hover responsive>
        <thead className="table-success">
          <tr>
            <th>No.</th>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Extension Name</th>
          </tr>
        </thead>
        <tbody>
          {currentClients.length > 0 ? (
            currentClients.map((client, index) => (
              <tr key={client.id}>
                <td>{indexOfFirstClient + index + 1}</td>
                <td className="text-uppercase">{client.last_Name}</td>
                <td className="text-uppercase">{client.first_Name}</td>
                <td className="text-uppercase">{client.middle_Name}</td>
                <td className="text-uppercase">{client.extension_Name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-danger">
                No matching records found
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Pagination Controls */}
      <Pagination className="justify-content-center my-4">
        <Pagination.Prev
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {renderPaginationItems()}
        <Pagination.Next
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>

      <FloatingButton />
      <PopCard />
    </Container>
  );
};

export default ThirdDay;
