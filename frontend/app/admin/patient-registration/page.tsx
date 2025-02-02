"use client";

import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    date_of_birth: "",
    complaint: "general_illness",
    priority: "Regular",
    street_address: "",
    barangay: "",
    municipal_city: "",
    agree_terms: false,
  });
  const [successMessage, setSuccessMessage] = useState("");  // Success message state
  const [errorMessage, setErrorMessage] = useState("");  // Error message state

  // Handle input change
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = event.target;
  
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    console.log("Form Data being sent:", formData);
  
    try {
      const response = await fetch('http://127.0.0.1:8000/patient/patient-register/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      // Log the response status and response body for debugging
      const responseBody = await response.json();
      console.log("Response Body:", responseBody);
      
      if (response.ok) {
        setSuccessMessage("Successfully registered!");  // Set success message
        setErrorMessage("");  // Clear any previous error message
        setFormData({
          first_name: "",
          middle_name: "",
          last_name: "",
          phone_number: "",
          email: "",
          date_of_birth: "",
          complaint: "general_illness",
          priority: "Regular",
          street_address: "",
          barangay: "",
          municipal_city: "",
          agree_terms: false,
        });
        
      }
  
      console.log("Patient registered:", responseBody);
    } catch (error) {
      console.error("Error registering patient:", error);
    }
  };
  
  

  return (
    <div className="flex-1 px-4 pt-32 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg">
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="first_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              First name
            </label>
            <input
              type="text"
              id="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="John"
              required
            />
          </div>
          <div>
            <label htmlFor="middle_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Middle name
            </label>
            <input
              type="text"
              id="middle_name"
              value={formData.middle_name}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Michael"
            />
          </div>
          <div>
            <label htmlFor="last_name" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Phone number
            </label>
            <input
              type="tel"
              id="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter your number"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="john.doe@company.com"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="date_of_birth" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Date of Birth
          </label>
          <input
            type="date"
            id="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        
        {/* Address Fields */}
        <div className="mb-6">
          <label htmlFor="street_address" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Street Address
          </label>
          <input
            type="text"
            id="street_address"
            value={formData.street_address}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="123 Main St"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="barangay" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Barangay
          </label>
          <input
            type="text"
            id="barangay"
            value={formData.barangay}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Barangay Name"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="municipal_city" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Municipal/City
          </label>
          <input
            type="text"
            id="municipal_city"
            value={formData.municipal_city}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="City Name"
            required
          />
        </div>
          {/* Complaint Choice */}
          <div className="mb-6">
          <label htmlFor="complaint" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Type of Complaint
          </label>
          <select
            id="complaint"
            value={formData.complaint}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="general_illness">General Illness</option>
            <option value="injury">Injury</option>
            <option value="checkup">Check-up</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Priority Choice */}
        <div className="mb-6">
          <label htmlFor="priority" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Priority
          </label>
          <select
            id="priority"
            value={formData.priority}
            onChange={handleChange}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="Regular">Regular</option>
            <option value="Priority">Priority Lane (PWD/Pregnant)</option>
          </select>
        </div>

        {/* Terms and Conditions */}
        <div className="mb-6 flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="agree_terms"
              type="checkbox"
              checked={formData.agree_terms}
              onChange={handleChange}
              className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-blue-300"
              required
            />
          </div>
          <label htmlFor="agree_terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            I agree with the{" "}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
              terms and conditions
            </a>
            .
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-sky-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300"
        >
          Submit
        </button>
      </form>
      {/* Success Message */}
      {successMessage && (
        <div style={{ color: "green", marginTop: "10px" }}>
          {successMessage}
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div style={{ color: "red", marginTop: "10px" }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}
