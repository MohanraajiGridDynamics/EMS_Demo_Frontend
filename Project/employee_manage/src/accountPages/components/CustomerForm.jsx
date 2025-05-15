import React from "react";

const CustomerForm = ({ formData, handleChange, handleSubmit, isEditMode = false }) => {
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.field}>
        <label style={styles.label}>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Status</label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          style={styles.select}
          required
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="VIP">VIP</option>
        </select>
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Company</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          style={styles.input}
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          style={styles.textarea}
        />
      </div>

      <button type="submit" style={styles.button}>
        {isEditMode ? "Update Customer" : "Add Customer"}
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "6px",
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "8px",
    fontSize: "16px",
    minHeight: "80px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  select: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 16px",
    backgroundColor: "#10b981",
    color: "white",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default CustomerForm;
