import React, { useState } from 'react';
import Topbar from './components/Topbar';

function CandidateRegister() {
    const [activeSection, setActiveSection] = useState('basic');

    const handleSectionChange = (section) => setActiveSection(section);

    const formStyle = {
        maxWidth: '900px',
        margin: '30px auto',
        background: '#fff',
        padding: '25px',
        borderRadius: '12px',
        boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
        marginTop: '100px',
    };

    const tabStyle = {
        padding: '10px 20px',
        border: 'none',
        background: '#f0f0f0',
        cursor: 'pointer',
        marginRight: '10px',
        borderRadius: '8px 8px 0 0',
        fontWeight: 600,
    };

    const activeTabStyle = {
        ...tabStyle,
        background: '#007bff',
        color: '#fff',
    };

    const inputStyle = {
        display: 'block',
        width: '100%',
        padding: '10px',
        marginTop: '5px',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '6px',
    };

    const sectionHeader = {
        marginTop: '10px',
        fontSize: '20px',
        color: '#333',
        marginBottom: '15px',
        borderBottom: '1px solid #ddd',
        paddingBottom: '5px'
    };

    const labelStyle = {
        fontWeight: '500',
        display: 'block',
        marginBottom: '6px',
        color: '#444',
    };

    return (
        <>
        <Topbar />
        <div style={formStyle}>
            <h2>Candidate Registration</h2>

            <div style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap' }}>
                {['basic', 'edu', 'exp', 'docs', 'review'].map((section) => (
                    <button
                        key={section}
                        onClick={() => handleSectionChange(section)}
                        style={activeSection === section ? activeTabStyle : tabStyle}
                    >
                        {section === 'basic' ? 'Basic Info' :
                         section === 'edu' ? 'Education' :
                         section === 'exp' ? 'Experience' :
                         section === 'docs' ? 'Documents' :
                         'Review'}
                    </button>
                ))}
            </div>

            {activeSection === 'basic' && (
                <div>
                    <h3 style={sectionHeader}>Basic Info</h3>
                    <label style={labelStyle}>Full Name</label>
                    <input type="text" style={inputStyle} placeholder="Enter full name" />

                    <label style={labelStyle}>Email</label>
                    <input type="email" style={inputStyle} placeholder="Enter email" />

                    <label style={labelStyle}>Phone</label>
                    <input type="tel" style={inputStyle} placeholder="Enter phone number" />
                </div>
            )}

            {activeSection === 'edu' && (
                <div>
                    <h3 style={sectionHeader}>Education</h3>
                    <label style={labelStyle}>Degree</label>
                    <input type="text" style={inputStyle} placeholder="e.g. B.Tech, MBA" />

                    <label style={labelStyle}>University</label>
                    <input type="text" style={inputStyle} placeholder="Enter university name" />
                </div>
            )}

            {activeSection === 'exp' && (
                <div>
                    <h3 style={sectionHeader}>Experience</h3>
                    <label style={labelStyle}>Years of Experience</label>
                    <input type="number" style={inputStyle} placeholder="e.g. 3" />

                    <label style={labelStyle}>Previous Company</label>
                    <input type="text" style={inputStyle} placeholder="Enter company name" />
                </div>
            )}

            {activeSection === 'docs' && (
                <div>
                    <h3 style={sectionHeader}>Documents</h3>
                    <label style={labelStyle}>Resume</label>
                    <input type="file" style={inputStyle} />

                    <label style={labelStyle}>Certificates</label>
                    <input type="file" multiple style={inputStyle} />
                </div>
            )}

            {activeSection === 'review' && (
                <div>
                    <h3 style={sectionHeader}>Review & Submit</h3>
                    <p style={{ fontStyle: 'italic' }}>Review your data before submitting.</p>
                    {/* Add dynamic summary display here if needed */}
                </div>
            )}

            <div style={{ textAlign: 'right', marginTop: '20px' }}>
                <button
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Submit
                </button>
            </div>
        </div>
        </>
    );
}

export default CandidateRegister;
