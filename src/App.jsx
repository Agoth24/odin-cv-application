import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import FormattedCV from "./components/FormattedCV";

function App() {
  const [page, setPage] = useState("form");
  
  // Initialize formData from localStorage or empty object
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('cvFormData');
    return savedData ? JSON.parse(savedData) : {};
  });

  // Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem('cvFormData', JSON.stringify(formData));
  }, [formData]);

  return (
    <>
      {page === "form" && <Header />}
        {page === "form" && <Form data={formData} setData={setFormData} onSubmit={() => setPage("CV")} />}
        {page === "CV" && <FormattedCV data={formData} onEdit={() => setPage("form")} />}
    </>
  );
}

export default App;
