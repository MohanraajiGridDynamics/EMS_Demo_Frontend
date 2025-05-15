import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const randomReviews = [
  { employeeName: "Alice", reviewerName: "Bob", rating: 4.5, reviewPeriod: "Q1", status: "Finalized" },
  { employeeName: "Charlie", reviewerName: "Dana", rating: 3.2, reviewPeriod: "Q1", status: "Pending" },
  { employeeName: "Eve", reviewerName: "Frank", rating: 4.8, reviewPeriod: "Q2", status: "Finalized" },
  { employeeName: "Alice", reviewerName: "George", rating: 2.9, reviewPeriod: "Q2", status: "Pending" },
  { employeeName: "Charlie", reviewerName: "Helen", rating: 3.5, reviewPeriod: "Q3", status: "Finalized" },
  { employeeName: "Eve", reviewerName: "Ian", rating: 4.1, reviewPeriod: "Q3", status: "Finalized" },
];

const getAverageRatingPerEmployee = () => {
  const map = {};
  randomReviews.forEach(({ employeeName, rating }) => {
    if (!map[employeeName]) map[employeeName] = [];
    map[employeeName].push(rating);
  });
  return Object.entries(map).map(([name, ratings]) => ({
    name,
    avgRating: (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2),
  }));
};

const getReviewCountByPeriod = () => {
  const map = {};
  randomReviews.forEach(({ reviewPeriod }) => {
    map[reviewPeriod] = (map[reviewPeriod] || 0) + 1;
  });
  return Object.entries(map).map(([period, count]) => ({ name: period, count }));
};

const getRatingDistribution = () => {
  const buckets = ["1-2", "2-3", "3-4", "4-5"];
  const distribution = [0, 0, 0, 0];
  randomReviews.forEach(({ rating }) => {
    if (rating < 2) distribution[0]++;
    else if (rating < 3) distribution[1]++;
    else if (rating < 4) distribution[2]++;
    else distribution[3]++;
  });
  return buckets.map((range, i) => ({ name: range, value: distribution[i] }));
};

const getStatusDistribution = () => {
  const map = { Finalized: 0, Pending: 0 };
  randomReviews.forEach(({ status }) => map[status]++);
  return Object.entries(map).map(([name, value]) => ({ name, value }));
};

const getRatingTrend = () => {
  const map = {};
  randomReviews.forEach(({ reviewPeriod, rating }) => {
    if (!map[reviewPeriod]) map[reviewPeriod] = [];
    map[reviewPeriod].push(rating);
  });
  return Object.entries(map).map(([period, ratings]) => ({
    name: period,
    avg: (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2),
  }));
};

function ReviewCharts() {
  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ textAlign: "center" }}>📊 Review Analytics Dashboard</h2>

      <div style={{ margin: "40px 0" }}>
        <h3>⭐ Average Rating Per Employee</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={getAverageRatingPerEmployee()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="avgRating" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ margin: "40px 0" }}>
        <h3>📅 Review Count By Period</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={getReviewCountByPeriod()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ margin: "40px 0" }}>
        <h3>📈 Rating Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={getRatingDistribution()}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {getRatingDistribution().map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={{ margin: "40px 0" }}>
        <h3>✅ Status Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={getStatusDistribution()}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {getStatusDistribution().map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={{ margin: "40px 0" }}>
        <h3>📊 Rating Trend Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={getRatingTrend()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 5]} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="avg" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ReviewCharts;
