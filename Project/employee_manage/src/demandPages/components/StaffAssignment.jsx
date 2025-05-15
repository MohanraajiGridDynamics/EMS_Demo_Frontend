import React, { useState } from 'react';

const StaffAssignment = ({ availableEmployees, assignStaff }) => {
  const [selectedId, setSelectedId] = useState('');

  const handleAssign = () => {
    const employee = availableEmployees.find(e => e.id === parseInt(selectedId));
    if (employee) {
      assignStaff(employee);
      setSelectedId('');
    }
  };

  return (
    <div style={{
      padding: '16px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      width: '100%',
      maxWidth: '400px'
    }}>
      <label htmlFor="employee" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
        Select Employee:
      </label>
      <select
        id="employee"
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        style={{
          width: '100%',
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #aaa',
          marginBottom: '12px'
        }}
      >
        <option value="">-- Choose --</option>
        {availableEmployees.map(emp => (
          <option key={emp.id} value={emp.id}>
            {emp.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleAssign}
        disabled={!selectedId}
        style={{
          padding: '8px 16px',
          backgroundColor: selectedId ? '#007bff' : '#999',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: selectedId ? 'pointer' : 'not-allowed'
        }}
      >
        Assign Staff
      </button>
    </div>
  );
};

export default StaffAssignment;
