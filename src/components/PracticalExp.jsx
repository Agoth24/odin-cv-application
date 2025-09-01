import "../index.css";
import FormGroup from "./FormGroup";

export default function PracticalExp({values, onChange}) {
  return (
      <fieldset>
        <legend>Practical Work Experience</legend>
        <FormGroup id="companyName" labelText="Company:" type="text" value={values.companyName || ""} onChange={onChange}/>
        <FormGroup id="positionTitle" labelText="Position Title:" type="text" value={values.positionTitle || ""} onChange={onChange}/>
        <FormGroup
          id="jobResponsibilities"
          labelText="Main Responsibilities:"
          type="textarea"
        value={values.jobResponsibilities || ""} onChange={onChange}/>
        <FormGroup id="workFromDate" labelText="From:" type="date" value={values.workFromDate || ""} onChange={onChange}/>
        <FormGroup id="workToDate" labelText="To:" type="date" value={values.workToDate || ""} onChange={onChange}/>
      </fieldset>
  );
}
