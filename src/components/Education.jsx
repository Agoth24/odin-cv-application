import "../index.css";
import FormGroup from "./FormGroup";

export default function Education() {
  return (
      <fieldset>
        <legend>Educational Experience</legend>
        <FormGroup id="schoolName" labelText="School Name:" type="text" />
        <FormGroup id="progOfStudy" labelText="Program of Study:" type="text" />
        <FormGroup id="fromDate" labelText="From:" type="date" />
        <FormGroup id="toDate" labelText="To:" type="date" />
      </fieldset>
  );
}
