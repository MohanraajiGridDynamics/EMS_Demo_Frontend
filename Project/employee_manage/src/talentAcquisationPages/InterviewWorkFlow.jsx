import React, { useState } from "react";
import Topbar from './components/Topbar';


const interviewStages = [
  "Resume Screening",
  "Technical Round 1",
  "Technical Round 2",
  "HR Round",
  "Final Offer",
];

const initialCandidates = [
  {
    id: "CAND001",
    name: "Amit Singh",
    role: "Frontend Developer",
    stages: interviewStages.map((stage, i) => ({
      stage,
      status: i === 0 ? "Cleared" : "Pending",
      feedback: ""
    }))
  },
  {
    id: "CAND002",
    name: "Neha Rao",
    role: "Backend Developer",
    stages: interviewStages.map((stage, i) => ({
      stage,
      status: i === 0 ? "Cleared" : "Pending",
      feedback: ""
    }))
  }
];

const statuses = ["Pending", "Cleared", "Rejected", "On Hold"];

const InterviewWorkflow = () => {
  const [candidates, setCandidates] = useState(initialCandidates);

  const handleStatusChange = (candIndex, stageIndex, value) => {
    const updated = [...candidates];
    updated[candIndex].stages[stageIndex].status = value;
    setCandidates(updated);
  };

  const handleFeedbackChange = (candIndex, stageIndex, value) => {
    const updated = [...candidates];
    updated[candIndex].stages[stageIndex].feedback = value;
    setCandidates(updated);
  };

  return (
    <>
    <Topbar />
    <div className="p-8 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen" style={{ marginTop: '100px' }}>
      <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-12 tracking-wide drop-shadow-md">
        Interview Workflow
      </h2>

      <div className="max-w-6xl mx-auto space-y-12">
        {candidates.map((cand, candIndex) => (
          <div
            key={cand.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-8 border-b border-gray-200 pb-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                {cand.name}{" "}
                <span className="text-indigo-600 font-medium text-lg">
                  ({cand.role})
                </span>
              </h3>
              <p className="text-sm text-gray-400 mt-1">Candidate ID: {cand.id}</p>
            </div>

            <div className="space-y-8">
              {cand.stages.map((stageObj, stageIndex) => (
                <div
                  key={stageIndex}
                  className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 bg-indigo-50 rounded-xl border border-indigo-100 shadow-inner"
                >
                  <div className="md:w-1/3">
                    <h4 className="font-semibold text-lg text-indigo-700 mb-3">
                      {stageObj.stage}
                    </h4>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none text-indigo-900 font-medium bg-white shadow-sm transition"
                      value={stageObj.status}
                      onChange={(e) =>
                        handleStatusChange(candIndex, stageIndex, e.target.value)
                      }
                    >
                      <option disabled value="">
                        Select status
                      </option>
                      {statuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>

                  <textarea
                    className="md:w-2/3 px-4 py-3 rounded-lg border border-indigo-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none resize-none text-gray-700 shadow-sm transition"
                    rows={4}
                    placeholder="Add feedback or notes..."
                    value={stageObj.feedback}
                    onChange={(e) =>
                      handleFeedbackChange(candIndex, stageIndex, e.target.value)
                    }
                  />
                </div>
              ))}
            </div>

            <div className="text-right mt-8">
              <button
                disabled
                className="inline-block px-6 py-3 text-indigo-600 font-semibold border border-indigo-600 rounded-lg cursor-not-allowed bg-indigo-50 shadow-inner"
                title="Auto-saved"
              >
                Save (Auto-saved)
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default InterviewWorkflow;
