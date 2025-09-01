import "../index.css";

export default function FormattedCV({ onEdit, data }) {
//   function handleClick(e) {
//     e.preventDefault();
//     onEdit();
//   }

  /* 
formData properties
-> (data.{property}) <-

  name
  email
  phone

  schoolName
  progOfStudy
  eduFromDate
  eduToDate

  companyName
  positionTitle
  jobResponsibilities
  workFromDate
  workToDate
  */

  return (
    <section>
      <header className="header">
        <h1>{"John Smith"}</h1>
      <div className="contact">
        <span>{"john123@email.ca"}</span>
      </div>
      </header>
    </section>
  );
}
