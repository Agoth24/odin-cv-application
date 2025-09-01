import "../index.css";
import FormGroup from "./FormGroup";

export default function GeneralInfo() {
  return (
      <fieldset>
        <legend>General Information</legend>
        <FormGroup id="nameInput" labelText="Name:" type="text" />
        <FormGroup id="emailInput" labelText="Email:" type="email" />
        <FormGroup id="telInput" labelText="Phone Number:" type="" />
      </fieldset>
  );
}
