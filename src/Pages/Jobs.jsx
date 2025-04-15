import React, { useState, useEffect } from 'react';
import jobData from '../data/jobs.json'; // Adjust the path based on your file structure

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const data = jobData; // Use the imported JSON file as data source
        setJobs(data.results || []);
      } catch (err) {
        console.error('Error loading jobs:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Job Listings</h1>
      {loading && <p className="text-center text-lg text-gray-500">Loading jobs...</p>}
      {jobs.length === 0 && !loading && <p className="text-center text-lg text-red-500">No jobs found.</p>}
      {jobs.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition duration-200"
            >
              <h3 className="text-2xl font-semibold text-blue-500">{job.name}</h3>
              <p className="text-lg text-gray-700 mt-2">Company: {job.company.name}</p>
              <p className="text-gray-600 mt-1">
                Location: {job.locations.map((loc) => loc.name).join(', ')}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}