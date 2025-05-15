import React, { useState } from "react";
import CustomerForm from "./components/CustomerForm";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
    company: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace this with actual API call
      const response = await fetch("/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Customer added successfully!");
        navigate("/account/manage-customers");
      } else {
        throw new Error("Failed to add customer");
      }
    } catch (error) {
      console.error(error);
      alert("Error adding customer");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Add New Customer</h2>
      <CustomerForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isEditMode={false}
      />
    </div>
  );
};

export default AddCustomer;
