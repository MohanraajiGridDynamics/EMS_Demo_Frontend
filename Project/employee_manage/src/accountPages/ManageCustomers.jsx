import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import StatusBadge from "./components/StatusBadge";
import FilterBar from "./components/FilterBar";

const STATUS_OPTIONS = ["All", "Active", "Inactive", "Pending"];

const ManageCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  // Pagination settings
  const itemsPerPage = 5;

  useEffect(() => {
    // Simulate API call with dummy data
    setTimeout(() => {
      setCustomers([
        {
          id: 1,
          name: "Acme Corp",
          contact: "John Doe",
          email: "john@acme.com",
          phone: "123-456-7890",
          status: "Active",
          registeredDate: "2024-01-10",
        },
        {
          id: 2,
          name: "Beta Inc",
          contact: "Jane Smith",
          email: "jane@beta.com",
          phone: "555-666-7777",
          status: "Inactive",
          registeredDate: "2023-11-20",
        },
        {
          id: 3,
          name: "Gamma LLC",
          contact: "Alice Johnson",
          email: "alice@gamma.com",
          phone: "987-654-3210",
          status: "Pending",
          registeredDate: "2024-02-15",
        },
        {
          id: 4,
          name: "Delta Co",
          contact: "Bob Lee",
          email: "bob@delta.com",
          phone: "444-555-6666",
          status: "Active",
          registeredDate: "2024-03-01",
        },
        {
          id: 5,
          name: "Epsilon Ltd",
          contact: "Carol White",
          email: "carol@epsilon.com",
          phone: "111-222-3333",
          status: "Active",
          registeredDate: "2024-04-25",
        },
        {
          id: 6,
          name: "Zeta Partners",
          contact: "Dan Brown",
          email: "dan@zeta.com",
          phone: "777-888-9999",
          status: "Inactive",
          registeredDate: "2023-12-10",
        },
      ]);
      setIsLoading(false);
    }, 700);
  }, []);

  // Filter and search logic
  const filteredCustomers = customers.filter((cust) => {
    const matchesSearch =
      cust.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cust.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cust.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "All" || cust.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      // For now, simulate delete by removing from local state
      setCustomers((prev) => prev.filter((c) => c.id !== id));
    }
  };

  return (
    <>
      <Sidebar />
      <div style={styles.container}>
        <h2>Manage Customers</h2>

        <div style={styles.filterBar}>
          <input
            type="text"
            placeholder="Search by name, contact, or email"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            style={styles.searchBox}
          />

          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            style={styles.selectBox}
          >
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>

          <button
            style={styles.addButton}
            onClick={() => navigate("/account/add-customer")}
          >
            + Add Customer
          </button>
        </div>

        {isLoading ? (
          <p>Loading customers...</p>
        ) : filteredCustomers.length === 0 ? (
          <p>No customers found.</p>
        ) : (
          <>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Status</th>
                  <th>Registered</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedCustomers.map((cust) => (
                  <tr key={cust.id}>
                    <td>{cust.name}</td>
                    <td>{cust.contact}</td>
                    <td>{cust.email}</td>
                    <td>{cust.phone}</td>
                    <td>
                      <StatusBadge status={cust.status} />
                    </td>
                    <td>{cust.registeredDate}</td>
                    <td>
                     <button onClick={() => navigate(`/account/view-customer/${cust.id}`)}>View</button>

                      <button
                        style={styles.actionButton}
                        onClick={() => navigate(`/account/edit-customer/${cust.id}`)}
                      >
                        Edit
                      </button>
                      <button
                        style={{ ...styles.actionButton, backgroundColor: "#dc2626" }}
                        onClick={() => handleDelete(cust.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div style={styles.pagination}>
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span style={{ margin: "0 10px" }}>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

const styles = {
  container: {
    marginLeft: "60px", // reserve space for sidebar
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    transition: "margin-left 0.3s ease",
  },
  filterBar: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "15px",
  },
  searchBox: {
    padding: "8px",
    width: "300px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  selectBox: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "8px 14px",
    backgroundColor: "#10b981",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  actionButton: {
    marginRight: "8px",
    padding: "6px 10px",
    backgroundColor: "#3b82f6",
    border: "none",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer",
  },
  pagination: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default ManageCustomers;
