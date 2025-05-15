import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import StatusBadge from "./components/StatusBadge";

const ViewCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy data - replace with API call
  const customer = {
    id,
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "+91 98765 43210",
    status: "VIP",
    company: "Acme Corp",
    address: "123 Business Ave, Chennai, TN",
    joinedDate: "2024-01-20",
    notes: "Follow up for Q4 partnership proposal.",
  };

  return (
    <>
      <Sidebar />
      <div style={styles.container}>
        <h2>Customer Profile</h2>

        <div style={styles.card}>
          <div style={styles.row}>
            <strong>Name:</strong> <span>{customer.name}</span>
          </div>
          <div style={styles.row}>
            <strong>Email:</strong> <span>{customer.email}</span>
          </div>
          <div style={styles.row}>
            <strong>Phone:</strong> <span>{customer.phone}</span>
          </div>
          <div style={styles.row}>
            <strong>Company:</strong> <span>{customer.company}</span>
          </div>
          <div style={styles.row}>
            <strong>Status:</strong> <StatusBadge status={customer.status} />
          </div>
          <div style={styles.row}>
            <strong>Address:</strong> <span>{customer.address}</span>
          </div>
          <div style={styles.row}>
            <strong>Joined:</strong> <span>{customer.joinedDate}</span>
          </div>
          <div style={styles.row}>
            <strong>Notes:</strong> <span>{customer.notes}</span>
          </div>

          <div style={styles.actions}>
            <button
              style={styles.edit}
              onClick={() => navigate(`/account/edit-customer/${customer.id}`)}
            >
              ✏️ Edit
            </button>
            <button style={styles.delete} onClick={() => alert("Delete logic here")}>
              🗑️ Delete
            </button>
            <button style={styles.back} onClick={() => navigate("/account/manage-customers")}>
              ⬅️ Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    marginLeft: "60px",
    padding: "20px",
    fontFamily: "Arial",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "600px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  row: {
    marginBottom: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  actions: {
    marginTop: "20px",
    display: "flex",
    gap: "12px",
    justifyContent: "flex-start",
  },
  edit: {
    padding: "8px 16px",
    backgroundColor: "#4caf50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  delete: {
    padding: "8px 16px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  back: {
    padding: "8px 16px",
    backgroundColor: "#6b7280",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default ViewCustomer;
