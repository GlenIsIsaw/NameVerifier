import React, { useState, useEffect } from "react";
import { Table, Form, Pagination, Container } from "react-bootstrap";
import FloatingButton from "../FloatingButton";
import PopCard from "../PopCard";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputGroup from "react-bootstrap/InputGroup";

const FirstDay = () => {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 15;

  // Dummy Data (500 clients)
  useEffect(() => {
    const dummyClients = Array.from({ length: 500 }, (_, index) => ({
      id: index + 1,
      lastName: `Last${index + 1}`,
      firstName: `First${index + 1}`,
      middleName: `M${index + 1}`,
    }));
    setClients(dummyClients);
  }, []);

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

  // Function to handle pagination logic (responsive pagination)
  const renderPaginationItems = () => {
    const paginationItems = [];

    if (totalPages <= 5) {
      // Show all pages if there are 5 or fewer
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
      // Always show first page
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

      // Show current page, previous and next
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

      // Always show last page
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
      <h2 className="text-center mb-3 text-uppercase fw-bold">
        March 11, 2025
      </h2>

      {/* Search Input */}

      <InputGroup className="mb-3 border border-success border-3 rounded-2">
        <InputGroup.Text id="basic-addon1">
          <FontAwesomeIcon icon={faSearch} />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Search Clients..."
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
          </tr>
        </thead>
        <tbody>
          {currentClients.length > 0 ? (
            currentClients.map((client, index) => (
              <tr key={client.id}>
                <td>{indexOfFirstClient + index + 1}</td>
                <td>{client.lastName}</td>
                <td>{client.firstName}</td>
                <td>{client.middleName}</td>
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

export default FirstDay;
