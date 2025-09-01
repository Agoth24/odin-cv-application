import GeneralInfo from "./GeneralInfo";
import Education from "./Education";
import PracticalExp from "./PracticalExp";

export default function Form() {
  return (
    <form>
      <GeneralInfo />
      <Education />
      <PracticalExp />
    </form>
  );
}
