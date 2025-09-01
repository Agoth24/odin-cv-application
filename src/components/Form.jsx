import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import PracticalExp from "./PracticalExp";
import "../styles/form.css"

export default function Form({onSubmit, data, setData}) {

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted data:", data)
    onSubmit()
  }
  
  return (
    <main>
    <form onSubmit={handleSubmit}>
      <GeneralInfo values={data} onChange={handleChange}/>
      <Education values={data} onChange={handleChange}/>
      <PracticalExp values={data} onChange={handleChange}/>
      <button type="submit" id="submit-btn">Submit</button>
    </form>
    </main>
  );
}
