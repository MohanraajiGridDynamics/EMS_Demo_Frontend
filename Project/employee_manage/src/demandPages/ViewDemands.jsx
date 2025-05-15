// /demandPages/ViewDemand.jsx

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Mock demands – In real implementation, fetch this using useEffect from API or context
const mockDemands = [
  { id: 1, project: 'Project Alpha', role: 'Developer', skills: 'React, Node.js', openings: 2, status: 'Open', startDate: '2023-07-01', endDate: '2024-07-01' },
  { id: 2, project: 'Project Beta', role: 'Designer', skills: 'Figma, Sketch', openings: 1, status: 'Filled', startDate: '2023-05-15', endDate: '2023-12-31' },
  { id: 3, project: 'Project Gamma', role: 'QA Engineer', skills: 'Selenium, Cypress', openings: 3, status: 'Closed', startDate: '2023-09-01', endDate: '2024-06-01' },
  { id: 4, project: 'Project Delta', role: 'Backend Developer', skills: 'Java, Spring', openings: 1, status: 'Open', startDate: '2023-08-10', endDate: '2024-02-28' },
  { id: 5, project: 'Project Epsilon', role: 'Full Stack Developer', skills: 'React, Node.js, AWS', openings: 2, status: 'Filled', startDate: '2023-06-01', endDate: '2024-01-15' },
];

const statusColors = {
  Open: '#28a745',
  Filled: '#fd7e14',
  Closed: '#dc3545'
};

const ViewDemand = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const demand = mockDemands.find(d => d.id === parseInt(id));

  if (!demand) {
    return <div style={{ padding: '20px', color: 'red' }}>Demand not found</div>;
  }

  const skillTags = demand.skills.split(',').map(skill => skill.trim());

  return (
    <div style={{ padding: '30px', maxWidth: '700px', margin: 'auto' }}>
      <button
        onClick={() => navigate(-1)}
        style={{
          marginBottom: '20px',
          backgroundColor: '#007bff',
          color: 'white',
          padding: '8px 16px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← Back
      </button>

      <div style={{
        background: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginBottom: '12px' }}>{demand.project}</h2>
        <h4 style={{
          color: '#555',
          marginBottom: '20px',
          fontStyle: 'italic'
        }}>{demand.role}</h4>

        <div style={{ marginBottom: '16px' }}>
          <strong>Openings:</strong> {demand.openings}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <strong>Status:</strong>{' '}
          <span style={{
            backgroundColor: statusColors[demand.status],
            color: '#fff',
            padding: '4px 8px',
            borderRadius: '4px'
          }}>
            {demand.status}
          </span>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <strong>Start Date:</strong> {demand.startDate}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <strong>End Date:</strong> {demand.endDate}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <strong>Required Skills:</strong>
          <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {skillTags.map((skill, index) => (
              <span key={index} style={{
                backgroundColor: '#007bff',
                color: 'white',
                padding: '4px 10px',
                borderRadius: '16px',
                fontSize: '14px'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDemand;
