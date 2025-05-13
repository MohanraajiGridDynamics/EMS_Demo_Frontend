// CreateEmployee.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/CreateEmployee.css"; // <-- Important: Add this line for CSS file

const CreateEmployee = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="content-container">
        <Topbar />
        <div className="main-content">
          <h1 className="page-title">Create New Employee</h1>

          {/* Tabs */}
          <div className="tab-buttons">
            <button
              onClick={() => handleTabChange("personal")}
              className={activeTab === "personal" ? "tab active" : "tab"}
            >
              Personal Details
            </button>
            <button
              onClick={() => handleTabChange("education")}
              className={activeTab === "education" ? "tab active" : "tab"}
            >
              Educational Details
            </button>
            <button
              onClick={() => handleTabChange("experience")}
              className={activeTab === "experience" ? "tab active" : "tab"}
            >
              Work Experience
            </button>
            <button
              onClick={() => handleTabChange("skills")}
              className={activeTab === "skills" ? "tab active" : "tab"}
            >
              Technical Skills
            </button>
            <button
              onClick={() => handleTabChange("employment")}
              className={activeTab === "employment" ? "tab active" : "tab"}
            >
              Employment Details
            </button>
            <button
              onClick={() => handleTabChange("documents")}
              className={activeTab === "documents" ? "tab active" : "tab"}
            >
              Documents Upload
            </button>

            <button
              onClick={() => handleTabChange("account")}
              className={activeTab === "account" ? "tab active" : "tab"}
            >
              Account
            </button>
          </div>

          {/* Section Content */}
          <div className="form-section">
            {activeTab === "personal" && (
              <div className="form-group">
                <h2 className="section-title">Personal Details</h2>

                <label className="input-label">First Name</label>
                <input type="text" placeholder="First Name" className="input-field" />

                <label className="input-label">Last Name</label>
                <input type="text" placeholder="Last Name" className="input-field" />

                <label className="input-label">Date of Birth</label>
                <input type="date" placeholder="Date of Birth" className="input-field" />

                <label className="input-label">Gender</label>
                <select className="input-field">
                  <option>Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <label className="input-label">Role</label>
                <select className="input-field">
                  <option>Role</option>
                  <option>Software Developer</option>
                  <option>Project Manager</option>
                  <option>HR Executive</option>
                  <option>Marketing Specialist</option>
                  <option>Financial Analyst</option>
                  <option> Sales Representative</option>
                  <option>Team Lead</option>
                  <option>UI/UX Designer</option>
                  <option>System Administrator</option>
                  <option>Customer Support Agent</option>
                  <option>QA Tester</option>
                  <option>Data Scientist</option>
                  <option>Business Analyst</option>
                  <option>Technical Writer</option>
                  <option> DevOps Engineer</option>
                </select>


                <label className="input-label">Grade</label>
                <select className="input-field">
                  <option>T1</option>
                  <option>T2</option>
                  <option>T3</option>
                  <option>T4</option>
                </select>

                <label className="input-label">Profile Summary</label>
                <textarea placeholder="Profile Summary" className="input-field textarea"></textarea>

                <label className="input-label">Joining Date</label>
                <input type="date" placeholder="Joining Date" className="input-field" />

                <label className="input-label">Phone number</label>
                <input type="text" placeholder="Phone Number" className="input-field" />

                <label className="input-label">Emergency Contact number</label>
                <input type="text" placeholder="Emergency Contact Number" className="input-field" />

                <label className="input-label">Email</label>
                <input type="email" placeholder="Email" className="input-field" />

                <label className="input-label">Address</label>
                <textarea placeholder="Address" className="input-field textarea"></textarea>

                <label className="input-label">Father Name</label>
                <input type="text" placeholder="Father Name" className="input-field" />

                <label className="input-label">Mother Name</label>
                <input type="text" placeholder="Mother Name" className="input-field" />

                <label className="input-label">Reporting</label>
                <input type="text" placeholder="Reporting to" className="input-field" />



                <div className="file-upload">
                  <label>Upload Profile Picture</label>
                  <input type="file" accept="image/*" />
                </div>
              </div>
            )}

            {activeTab === "education" && (
              <div className="form-group">
                <h2 className="section-title">Educational Details</h2>

                <label className="input-label">Highest Qualification</label>
                <select className="input-field">
                  <option>Highest Qualification</option>
                  <option>B.E</option>
                  <option>B.Tech</option>
                  <option>M.Tech</option>
                  <option>MBA</option>
                </select>

                <label className="input-label">Specialization</label>
                <input type="text" placeholder="Major/Branch" className="input-field" />

                <label className="input-label">University / College</label>
                <input type="text" placeholder="University/College" className="input-field" />

                <label className="input-label">Year of Passing</label>
                <input type="text" placeholder="Year of Passing" className="input-field" />

                <label className="input-label">GPA/Percentage</label>
                <input type="text" placeholder="GPA/Percentage" className="input-field" />
              </div>
            )}

            {activeTab === "experience" && (
              <div className="form-group">
                <h2 className="section-title">Previous Work Experience</h2>

                <label className="input-label">Previous Company Name</label>
                <input type="text" placeholder="Previous Company Name" className="input-field" />

                <label className="input-label">Role/Title</label>
                <input type="text" placeholder="Role/Job Title" className="input-field" />

                <label className="input-label">Years of Experience</label>
                <input type="text" placeholder="Years of Experience" className="input-field" />

                <label className="input-label">Roles and Responsibilites</label>
                <textarea placeholder="Responsibilities" className="input-field textarea"></textarea>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="form-group">
                <h2 className="section-title">Technical Skills</h2>

                <label className="input-label">Skill Set 1</label>
                <input type="text" placeholder="Skill 1" className="input-field" />
                <select className="input-field">
                  <option>Proficiency</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Expert</option>
                </select>

                <label className="input-label">Skill Set 2</label>
                <input type="text" placeholder="Skill 2" className="input-field" />
                <select className="input-field">
                  <option>Proficiency</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Expert</option>
                </select>

                <label className="input-label">Skill Set 3 (Optional)</label>
                <input type="text" placeholder="Skill 3 (Optional)" className="input-field" />
                <select className="input-field">
                  <option>Proficiency</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Expert</option>
                </select>
              </div>
            )}

            {activeTab === "employment" && (
              <div className="form-group">
                <h2 className="section-title">Employment Details</h2>

                <label className="input-label">Date of Joining</label>
                <input type="date" placeholder="Date of Joining" className="input-field" />

                <label className="input-label">Department</label>
                <select className="input-field">
                  <option>Department</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                  <option value="Customer Support">Customer Support</option>
                  <option value="Research and Development">Research and Development</option>
                  <option value="Operations">Operations</option>
                  <option value="Legal">Legal</option>
                  <option value="Administration">Administration</option>
                </select>

                <label className="input-label">Title/Designation</label>
                <select className="input-field">
                  <option>Role</option>
                  <option>Software Developer</option>
                  <option>Project Manager</option>
                  <option>HR Executive</option>
                  <option>Marketing Specialist</option>
                  <option>Financial Analyst</option>
                  <option> Sales Representative</option>
                  <option>Team Lead</option>
                  <option>UI/UX Designer</option>
                  <option>System Administrator</option>
                  <option>Customer Support Agent</option>
                  <option>QA Tester</option>
                  <option>Data Scientist</option>
                  <option>Business Analyst</option>
                  <option>Technical Writer</option>
                  <option> DevOps Engineer</option>
                </select>


                <label className="input-label">Employee ID</label>
                <input type="text" placeholder="Employee ID" className="input-field" />

              
                <label className="input-label">Grade</label>
                <select className="input-field">
                  <option>Grade</option>
                  <option>T1</option>
                  <option>T2</option>
                  <option>T3</option>
                  <option>T4</option>
                </select>
              </div>
            )}

            {activeTab === "documents" && (
              <div className="form-group">
                <h2 className="section-title">Documents Upload</h2>
                <div className="file-upload">
                  <label>Upload Resume (PDF/DOC)</label>
                  <input type="file" accept=".pdf,.doc,.docx" />
                </div>
                <div className="file-upload">
                  <label>Upload Educational Certificates</label>
                  <input type="file" multiple />
                </div>
                <div className="file-upload">
                  <label>Upload ID Proofs (Aadhar/PAN)</label>
                  <input type="file" multiple />
                </div>
              </div>
            )}


              {activeTab === "account" && (
              <div className="form-group">

                <label className="input-label">Account</label>
                <select className="input-field">
                  <option>Green Dot</option>
                  <option>Glacier</option>
                  <option>FLP</option>
                  <option>Other</option>
                </select>

                <label className="input-label">Project</label>
                <input type="text" placeholder="Project" className="input-field" />

                <label className="input-label">Start Date</label>
                <input type="date" placeholder="Start Date" className="input-field" />

                <label className="input-label">End Date</label>
                <input type="date" placeholder="End Date" className="input-field" />

              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="submit-button-container">
            <button className="submit-button">
              Submit Employee Data
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
