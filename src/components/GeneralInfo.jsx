import "../index.css";
import FormGroup from "./FormGroup";

export default function GeneralInfo({values, onChange}) {
  return (
      <fieldset>
        <legend>General Information</legend>
        <FormGroup id="name" labelText="Name:" type="text" value={values.name || ""} onChange={onChange}/>
        <FormGroup id="email" labelText="Email:" type="email" value={values.email || ""} onChange={onChange}/>
        <FormGroup id="phone" labelText="Phone Number:" type="tel" value={values.phone || ""} onChange={onChange}/>
      </fieldset>
  );
}
