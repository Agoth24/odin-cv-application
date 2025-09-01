import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import FormattedCV from "./components/FormattedCV";

function App() {
  const [page, setPage] = useState("CV");
  const [formData, setFormData] = useState({});
  
  return (
    <>
      {page === "form" && <Header />}
        {page === "form" && <Form data={formData} setData={setFormData} onSubmit={() => setPage("CV")} />}
        {page === "CV" && <FormattedCV data={formData} onEdit={() => setPage("form")} />}
    </>
  );
}

export default App;
