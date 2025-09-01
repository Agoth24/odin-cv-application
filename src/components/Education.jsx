import "../index.css";
import FormGroup from "./FormGroup";

export default function Education({values, onChange}) {
  return (
      <fieldset>
        <legend>Educational Experience</legend>
        <FormGroup id="schoolName" labelText="School Name:" type="text" value={values.schoolName || ""} onChange={onChange}/>
        <FormGroup id="progOfStudy" labelText="Program of Study:" type="text" value={values.progOfStudy || ""} onChange={onChange}/>
        <FormGroup id="eduFromDate" labelText="From:" type="date" value={values.eduFromDate || ""} onChange={onChange}/>
        <FormGroup id="eduToDate" labelText="To:" type="date" value={values.eduToDate || ""} onChange={onChange}/>
      </fieldset>
  );
}
