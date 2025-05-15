import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import StaffAssignment from './components/StaffAssignment';

const Staffing = () => {
  const { demandId } = useParams();

  // Mock demand data (replace with backend fetch later)
  const demand = {
    id: demandId,
    project: 'Project Alpha',
    role: 'Frontend Developer',
    skills: 'React, HTML, CSS',
    openings: 2,
    status: 'Open',
    startDate: '2023-07-01',
    endDate: '2024-07-01'
  };

  // Mock assigned staff
  const [assignedStaff, setAssignedStaff] = useState([
    { id: 101, name: 'Alice Johnson', status: 'Confirmed' },
    { id: 102, name: 'Bob Smith', status: 'Pending' }
  ]);

  // Mock available employees
  const availableEmployees = [
    { id: 201, name: 'Charlie Kim' },
    { id: 202, name: 'Dana Lee' },
    { id: 203, name: 'Ethan Brown' }
  ];

  // Assign staff to demand
  const assignStaff = (employee) => {
    setAssignedStaff([...assignedStaff, { ...employee, status: 'Pending' }]);
  };

  // Remove staff
  const removeStaff = (id) => {
    setAssignedStaff(assignedStaff.filter((s) => s.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Staffing for Demand #{demand.id}</h2>

      {/* Demand Summary */}
      <div style={{
        margin: '20px 0',
        padding: '16px',
        border: '1px solid #ccc',
        borderRadius: '8px'
      }}>
        <h3>Demand Details</h3>
        <p><strong>Project:</strong> {demand.project}</p>
        <p><strong>Role:</strong> {demand.role}</p>
        <p><strong>Skills:</strong> {demand.skills}</p>
        <p><strong>Openings:</strong> {demand.openings}</p>
        <p><strong>Status:</strong> {demand.status}</p>
        <p><strong>Duration:</strong> {demand.startDate} to {demand.endDate}</p>
      </div>

      {/* Assigned Staff */}
      <div style={{ marginTop: '30px' }}>
        <h3>Assigned Staff</h3>
        {assignedStaff.length === 0 ? (
          <p>No staff assigned yet.</p>
        ) : (
          <ul>
            {assignedStaff.map((staff) => (
              <li key={staff.id} style={{ marginBottom: '10px' }}>
                {staff.name} — <strong>{staff.status}</strong>
                <button
                  onClick={() => removeStaff(staff.id)}
                  style={{ marginLeft: '10px', padding: '4px 8px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Assign New Staff */}
      <div style={{ marginTop: '40px' }}>
        <h3>Assign New Staff</h3>
        <StaffAssignment
          availableEmployees={availableEmployees}
          assignStaff={assignStaff}
        />
      </div>
    </div>
  );
};

export default Staffing;
