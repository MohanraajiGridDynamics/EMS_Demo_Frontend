import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CustomerForm from "./components/CustomerForm";

const EditCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy fetched data – replace with API call
  const dummyData = {
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "+91 98765 43210",
    status: "VIP",
    company: "Acme Corp",
    address: "123 Business Ave, Chennai, TN",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "",
    company: "",
    address: "",
  });

  useEffect(() => {
    // Replace with fetch logic: fetch(`/api/customers/${id}`)
    setFormData(dummyData);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with PUT/POST to update customer
    console.log("Updated Customer:", formData);
    alert("Customer updated successfully!");
    navigate("/account/manage-customers");
  };

  return (
    <>
      <Sidebar />
      <div style={styles.container}>
        <h2>Edit Customer</h2>
        <CustomerForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isEditMode={true}
        />
      </div>
    </>
  );
};

const styles = {
  container: {
    marginLeft: "60px",
    padding: "20px",
    fontFamily: "Arial",
    maxWidth: "700px",
  },
};

export default EditCustomer;
