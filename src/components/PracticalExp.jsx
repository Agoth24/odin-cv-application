import "../App.css";
import FormGroup from "./FormGroup";

export default function PracticalExp() {
  return (
    <section>
      <h2>Practical Work Experience</h2>
      <form>
        <FormGroup id="companyName" labelText="Company:" type="text" />
        <FormGroup id="positionTitle" labelText="Position Title:" type="text" />
        <FormGroup
          id="jobResp"
          labelText="Main Responsibilities:"
          type="textarea"
        />
        <FormGroup id="fromDate" labelText="From:" type="date" />
        <FormGroup id="toDate" labelText="To:" type="date" />
      </form>
    </section>
  );
}
