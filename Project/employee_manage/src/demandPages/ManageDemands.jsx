import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function ManageDemands() {
    // Mock data for demands
    const mockDemands = [
        { id: 1, project: 'Project Alpha', role: 'Developer', skills: 'React, Node.js', openings: 2, status: 'Open', startDate: '2023-07-01', endDate: '2024-07-01' },
        { id: 2, project: 'Project Beta', role: 'Designer', skills: 'Figma, Sketch', openings: 1, status: 'Filled', startDate: '2023-05-15', endDate: '2023-12-31' },
        { id: 3, project: 'Project Gamma', role: 'QA Engineer', skills: 'Selenium, Cypress', openings: 3, status: 'Closed', startDate: '2023-09-01', endDate: '2024-06-01' },
        { id: 4, project: 'Project Delta', role: 'Backend Developer', skills: 'Java, Spring', openings: 1, status: 'Open', startDate: '2023-08-10', endDate: '2024-02-28' },
        { id: 5, project: 'Project Epsilon', role: 'Full Stack Developer', skills: 'React, Node.js, AWS', openings: 2, status: 'Filled', startDate: '2023-06-01', endDate: '2024-01-15' },
    ];

    // State for filters
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('');

    // Update search term state
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    // Update status filter state
    const handleStatusChange = (e) => {
        setStatusFilter(e.target.value);
    };

    const navigate = useNavigate();
    const staffing = () => {
            navigate("/demand/staffing");
    }
    // Filter demands based on search and status
    const filteredDemands = mockDemands.filter((demand) => {
        const matchesStatus = statusFilter === '' || demand.status === statusFilter;
        const matchesSearch =
            demand.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
            demand.role.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    // Inline styles for table and badges
    const tableStyle = { width: '100%', borderCollapse: 'collapse' };
    const thStyle = { textAlign: 'left', borderBottom: '1px solid #ddd', padding: '8px' };
    const tdStyle = { padding: '8px', borderBottom: '1px solid #ddd' };
    const badgeStyle = { padding: '4px 8px', borderRadius: '4px', color: 'white' };
    const statusColors = {
        Open: '#28a745',
        Filled: '#fd7e14',
        Closed: '#dc3545'
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Manage Demands</h2>
            {/* Filters: Search and Status */}
            <div style={{
                marginBottom: '20px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
            }}>
                {/* Search by project or role */}
                <div style={{ marginBottom: '10px' }}>
                    <input
                        type="text"
                        placeholder="Search by project or role"
                        value={searchTerm}
                        onChange={handleSearch}
                        style={{ padding: '8px', width: '200px' }}
                    />
                </div>
                {/* Status dropdown filter */}
                <div style={{ marginBottom: '10px' }}>
                    <select
                        value={statusFilter}
                        onChange={handleStatusChange}
                        style={{ padding: '8px', width: '150px' }}
                    >
                        <option value="">All</option>
                        <option value="Open">Open</option>
                        <option value="Filled">Filled</option>
                        <option value="Closed">Closed</option>
                    </select>
                </div>
            </div>

            {/* Demands Table */}
            <div style={{ overflowX: 'auto' }}>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Project</th>
                            <th style={thStyle}>Role</th>
                            <th style={thStyle}>Skills Required</th>
                            <th style={thStyle}>Openings</th>
                            <th style={thStyle}>Status</th>
                            <th style={thStyle}>Start Date</th>
                            <th style={thStyle}>End Date</th>
                            <th style={thStyle}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDemands.map((demand) => (
                            <tr key={demand.id}>
                                <td style={tdStyle}>{demand.project}</td>
                                <td style={tdStyle}>{demand.role}</td>
                                <td style={tdStyle}>{demand.skills}</td>
                                <td style={tdStyle}>{demand.openings}</td>
                                <td style={tdStyle}>
                                    <span
                                        style={{
                                            ...badgeStyle,
                                            backgroundColor: statusColors[demand.status]
                                        }}
                                    >
                                        {demand.status}
                                    </span>
                                </td>
                                <td style={tdStyle}>{demand.startDate}</td>
                                <td style={tdStyle}>{demand.endDate}</td>
                                <td style={tdStyle}>
                                    {/* <Link to={`/demand/staffing/${demand.id}`}>
                                        <button style={{ padding: '6px 12px' }}>View</button>
                                    </Link> */}
                                    <Link to={`/demand/view/${demand.id}`}>
                                        <button style={{ padding: '6px 12px' }}>View</button>
                                    </Link>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button onClick={staffing}>Staffing</button>
        </div>
    );
}

export default ManageDemands;
