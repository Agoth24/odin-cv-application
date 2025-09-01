import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import PracticalExp from "./PracticalExp";

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
    <form onSubmit={handleSubmit}>
      <GeneralInfo values={data} onChange={handleChange}/>
      <Education values={data} onChange={handleChange}/>
      <PracticalExp values={data} onChange={handleChange}/>
      <button type="submit" id="submitBtn">Submit</button>
    </form>
  );
}
