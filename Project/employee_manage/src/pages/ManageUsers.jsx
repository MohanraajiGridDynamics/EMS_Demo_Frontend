import React, { useState } from 'react';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

// Random employee data
const initialEmployees = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Manager', department: 'HR', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Developer', department: 'IT', status: 'Inactive' },
  { id: 3, name: 'Sarah Lee', email: 'sarah.lee@example.com', role: 'Designer', department: 'Marketing', status: 'Active' },
  { id: 4, name: 'James Brown', email: 'james.brown@example.com', role: 'Tester', department: 'QA', status: 'Active' },
  { id: 5, name: 'Chris Green', email: 'chris.green@example.com', role: 'Support', department: 'Customer Service', status: 'Inactive' }
];

export default function EmployeePage() {
  const [employees, setEmployees] = useState(initialEmployees);
  
  const handleEdit = (employee) => {
    alert(`Edit employee: ${employee.name}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setEmployees(employees.filter(employee => employee.id !== id));
    }
  };

  const handleView = (employee) => {
    alert(`
      Name: ${employee.name}
      Email: ${employee.email}
      Role: ${employee.role}
      Department: ${employee.department}
      Status: ${employee.status}
    `);
  };

  return (
    <div style={styles.page}>
      {/* Sidebar Component */}
      <Sidebar />

      <div style={styles.content}>
        {/* Topbar Component */}
        <Topbar />

        {/* Employee Table */}
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Role</th>
                <th style={styles.th}>Department</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(employee => (
                <tr key={employee.id}>
                  <td style={styles.td}>{employee.name}</td>
                  <td style={styles.td}>{employee.email}</td>
                  <td style={styles.td}>{employee.role}</td>
                  <td style={styles.td}>{employee.department}</td>
                  <td style={styles.td}>
                    <button
                      style={{
                        ...styles.statusButton,
                        backgroundColor: employee.status === 'Active' ? '#28a745' : '#dc3545',
                      }}
                    >
                      {employee.status}
                    </button>
                  </td>
                  <td style={styles.td}>
                    <button onClick={() => handleView(employee)} style={styles.actionButton}><FaEye /></button>
                    <button onClick={() => handleEdit(employee)} style={styles.actionButton}><FaEdit /></button>
                    <button onClick={() => handleDelete(employee.id)} style={styles.actionButton}><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: 'flex',
    height: '100vh',
  },
  content: {
    marginLeft: '250px',  // Ensures content is not overlapped by sidebar
    width: '100%',
    padding: '20px',
  },
  tableContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    padding: '10px',
    backgroundColor: '#ddd',
    textAlign: 'left',
  },
  td: {
    padding: '10px',
    textAlign: 'left',
  },
  statusButton: {
    padding: '6px 10px',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    cursor: 'pointer',
  },
  actionButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    marginRight: '8px',
  },
};
