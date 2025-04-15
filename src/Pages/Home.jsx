import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaUserTie, FaMagic } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-gray-100 mt-1">
        <img src="https://res.cloudinary.com/dd2shhmgr/image/upload/v1744528100/job1_fx9so1.png" alt="Imara Job Board" class="w-full object-cover h-84 mt-12"/>
      {/* Hero Section */}
      <section className="py-12 text-center bg-white shadow-sm">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to Imara JobBoard
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Your one-stop platform for job seekers and employers across all industries.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/jobs"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Browse Jobs
          </Link>
          <Link
            to="/post-job"
            className="bg-gray-200 text-blue-600 px-6 py-3 rounded hover:bg-gray-300 transition"
          >
            Post a Job
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Why Use Imara JobBoard?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
            <FaBriefcase className="text-blue-600 text-3xl mb-2 mx-auto" />

              <h3 className="text-xl font-bold text-blue-600 mb-2">For Job Seekers</h3>
              <p className="text-gray-700">Access thousands of job listings and apply with ease.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
            <FaUserTie className="text-blue-600 text-3xl mb-2 mx-auto" />

              <h3 className="text-xl font-bold text-blue-600 mb-2">For Employers</h3>
              <p className="text-gray-700">Quickly post jobs and connect with top talent.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
            <FaMagic className="text-blue-600 text-3xl mb-2 mx-auto" />

              <h3 className="text-xl font-bold text-blue-600 mb-2">Smart Matching</h3>
              <p className="text-gray-700">Our intelligent system helps match the right people with the right roles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-10 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to take the next step?</h2>
        <p className="mb-6">Join Imara JobBoard today and make your career or hiring process easier.</p>
        <Link
          to="/register"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>
      <section className="py-12 bg-white">
  <div className="max-w-3xl mx-auto text-center">
    <blockquote className="italic text-gray-600 text-lg">
      "Imara JobBoard helped me land my dream job in less than a month! Highly recommend."
    </blockquote>
    <p className="mt-4 font-semibold text-gray-800">— Sarah M., Marketing Specialist</p>
  </div>
</section>
<section className="py-12 bg-gray-50 flex flex-col md:flex-row items-center justify-center gap-10 px-4">
  <img src="https://res.cloudinary.com/dd2shhmgr/image/upload/v1744527881/job_f3cjv4.png" alt="Job Search" className="w-80 object-cover h-auto" />
  <div className="text-center md:text-left max-w-md">
    <h2 className="text-2xl font-bold text-blue-600 mb-4">Find the Perfect Job</h2>
    <p className="text-gray-700 mb-4">Whether you're a graduate or a seasoned pro, we have the right opportunities for you.</p>
    <Link to="/jobs" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Explore Jobs</Link>
  </div>
</section>


    </div>
  );
}
