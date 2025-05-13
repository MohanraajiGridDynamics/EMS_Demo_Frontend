import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/ManageDocuments.css";

const ManageDocuments = () => {
  const [documents, setDocuments] = useState([
    { id: 1, name: "HolidayPolicy.pdf", url: "/docs/HolidayPolicy.pdf" },
    { id: 2, name: "WFH_Guidelines.pdf", url: "/docs/WFH_Guidelines.pdf" },
  ]);

  const [newFile, setNewFile] = useState(null);

  const handleFileChange = (e) => {
    setNewFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (newFile) {
      const newDoc = {
        id: documents.length + 1,
        name: newFile.name,
        url: URL.createObjectURL(newFile), // For demo; use server upload in real app
      };
      setDocuments([...documents, newDoc]);
      setNewFile(null);
    }
  };

  return (
    <div className="page-wrapper">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="content-area">
          <h1 className="page-title">Manage Documents</h1>

          <div className="section">
            <h2>Upload Document</h2>
            <div className="input-row">
              <input type="file" onChange={handleFileChange} />
              <button onClick={handleUpload}>Upload</button>
            </div>
          </div>

          <div className="section">
            <h2>Document List</h2>
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Document Name</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, index) => (
                  <tr key={doc.id}>
                    <td>{index + 1}</td>
                    <td>{doc.name}</td>
                    <td>
                      <a href={doc.url} download={doc.name} className="download-link">
                        Download
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ManageDocuments;
