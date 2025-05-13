// ManageHolidaysWFH.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../styles/ManageHolidaysWFH.css";

const ManageHolidaysWFH = () => {
  const [holidayList, setHolidayList] = useState([
    { id: 1, date: "2025-01-01", occasion: "New Year's Day" },
    { id: 2, date: "2025-01-26", occasion: "Republic Day" },
  ]);

  const [wfhList, setWfhList] = useState([
    { id: 1, empId: "EMP101", name: "Aarav Kumar", date: "2025-05-10" },
    { id: 2, empId: "EMP102", name: "Meera Iyer", date: "2025-05-12" },
  ]);

  const [newHoliday, setNewHoliday] = useState({ date: "", occasion: "" });
  const [newWfh, setNewWfh] = useState({ empId: "", name: "", date: "" });

  const addHoliday = () => {
    if (newHoliday.date && newHoliday.occasion) {
      setHolidayList([...holidayList, { id: holidayList.length + 1, ...newHoliday }]);
      setNewHoliday({ date: "", occasion: "" });
    }
  };

  const addWFH = () => {
    if (newWfh.date && newWfh.empId && newWfh.name) {
      setWfhList([...wfhList, { id: wfhList.length + 1, ...newWfh }]);
      setNewWfh({ empId: "", name: "", date: "" });
    }
  };

  return (
    <div className="page-wrapper">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="content-area">
          <h1 className="page-title">Manage Holidays & Work From Home</h1>

          <div className="section">
            <h2>Official Holidays</h2>
            <div className="input-row">
              <input
                type="date"
                value={newHoliday.date}
                onChange={(e) => setNewHoliday({ ...newHoliday, date: e.target.value })}
                placeholder="Holiday Date"
              />
              <input
                type="text"
                value={newHoliday.occasion}
                onChange={(e) => setNewHoliday({ ...newHoliday, occasion: e.target.value })}
                placeholder="Occasion"
              />
              <button onClick={addHoliday}>Add Holiday</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Date</th>
                  <th>Occasion</th>
                </tr>
              </thead>
              <tbody>
                {holidayList.map((holiday, index) => (
                  <tr key={holiday.id}>
                    <td>{index + 1}</td>
                    <td>{holiday.date}</td>
                    <td>{holiday.occasion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="section">
            <h2>Work From Home Requests</h2>
            <div className="input-row">
              <input
                type="text"
                value={newWfh.empId}
                onChange={(e) => setNewWfh({ ...newWfh, empId: e.target.value })}
                placeholder="Employee ID"
              />
              <input
                type="text"
                value={newWfh.name}
                onChange={(e) => setNewWfh({ ...newWfh, name: e.target.value })}
                placeholder="Employee Name"
              />
              <input
                type="date"
                value={newWfh.date}
                onChange={(e) => setNewWfh({ ...newWfh, date: e.target.value })}
              />
              <button onClick={addWFH}>Add WFH</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Employee ID</th>
                  <th>Name</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {wfhList.map((wfh, index) => (
                  <tr key={wfh.id}>
                    <td>{index + 1}</td>
                    <td>{wfh.empId}</td>
                    <td>{wfh.name}</td>
                    <td>{wfh.date}</td>
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

export default ManageHolidaysWFH;
