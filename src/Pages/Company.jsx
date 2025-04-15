import React, { useState, useEffect } from 'react';
import companyData from '../data/companies.json'; // Adjust the path based on your file structure
import { FaBuilding, FaMapMarkerAlt, FaIndustry } from 'react-icons/fa'; // React Icons for styling

export default function Companies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const data = companyData; // Use the imported JSON file as data source
        setCompanies(data.results || []);
      } catch (err) {
        console.error('Error loading companies:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-8">Company Listings</h1>
      {loading && <p className="text-center text-lg text-gray-500">Loading companies...</p>}
      {companies.length === 0 && !loading && <p className="text-center text-lg text-red-500">No companies found.</p>}
      {companies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-500 flex items-center gap-2">
                <FaBuilding className="text-blue-400" />
                {company.name}
              </h3>
              <p className="mt-2 text-lg text-gray-700 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-400" />
                {company.location}
              </p>
              <p className="mt-1 text-gray-600 flex items-center gap-2">
                <FaIndustry className="text-green-400" />
                {company.industry}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}