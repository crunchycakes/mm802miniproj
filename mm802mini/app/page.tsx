"use client";

import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function Home() {
  const [data, setData] = useState([]);
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(150000);

  useEffect(() => {
    fetch("/api/salaries")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  // Filter salaries within the range
  const filteredData = data.filter(job =>
    job.minimum_annual_salary >= minFilter && job.maximum_annual_salary <= maxFilter
  );

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">City of Edmonton Salaries</h1>

      {/* Salary Range Filter */}
      <div className="flex gap-4 mb-4">
        <label>
          Min Salary:
          <input
            type="number"
            value={minFilter}
            onChange={(e) => setMinFilter(Number(e.target.value))}
            className="border rounded p-2"
          />
        </label>
        <label>
          Max Salary:
          <input
            type="number"
            value={maxFilter}
            onChange={(e) => setMaxFilter(Number(e.target.value))}
            className="border rounded p-2"
          />
        </label>
      </div>

      {/* Salary Bar Chart */}
      <div className="w-full max-w-4xl bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Filtered Job Salaries</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={filteredData}>
            <XAxis dataKey="job_title" tick={{ fontSize: 12 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="minimum_annual_salary" fill="#82ca9d" name="Min Salary" />
            <Bar dataKey="maximum_annual_salary" fill="#8884d8" name="Max Salary" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}
