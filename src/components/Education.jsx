import "../index.css";
import FormGroup from "./FormGroup";

export default function Education() {
  return (
    <section>
      <h2>Educational Experience</h2>
      <form method="#">
        <FormGroup id="schoolName" labelText="School Name:" type="text" />
        <FormGroup id="progOfStudy" labelText="Program of Study:" type="text" />
        <FormGroup id="fromDate" labelText="From:" type="date" />
        <FormGroup id="toDate" labelText="To:" type="date" />
      </form>
    </section>
  );
}
