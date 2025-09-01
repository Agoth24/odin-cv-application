import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import PracticalExp from "./PracticalExp";
import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({});

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted data:", formData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <GeneralInfo values={formData} onChange={handleChange}/>
      <Education values={formData} onChange={handleChange}/>
      <PracticalExp values={formData} onChange={handleChange}/>
      <button type="submit" id="submitBtn">Submit</button>
    </form>
  );
}
