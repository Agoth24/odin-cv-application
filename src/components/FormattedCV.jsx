import "../styles/formattedCV.css";

export default function FormattedCV({ onEdit, data }) {
  function formatDate(dateStr) {
    const date = new Date(dateStr);

    return date.toLocaleString("en-US", { month: "short", year: "numeric" });
  }
  console.log(formatDate("2018-08-25"));

  function handleClick(e) {
    e.preventDefault();
    onEdit();
  }

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
    <>
      <header className="formatted-header">
        <h1>{"Michael Williams"}</h1>
        <div className="contact">
          <span>{"mike123@email.ca"}</span>
          <span>{"(416)-222-4109"}</span>
        </div>
      </header>
      <article>
        <section className="infoSection">
          <h2>Educational Experience</h2>
          <ul>
            <li className="info-group">
              <div className="info-text">
                <h3>{"University of Waterloo"}</h3>
                <p>{"Bachelor of Science"}</p>
              </div>
              <div className="info-dates">{"Sep 2018 - April 2022"}</div>
            </li>
          </ul>
        </section>
        <section className="infoSection">
          <h2>Practical Work Experience</h2>
          <ul>
            <li>
              <div className="info-group">
                <div className="info-text">
                  <h3>{"Meta"}</h3>
                  <p>{"Frontend Software Engineer"}</p>
                </div>
                <div className="info-dates">{"June 2022 - July 2025"}</div>
              </div>
              <p className="jobResp">
                {
                  "Worked in agile teams, delivering B2B services and solutions at scale. Leveraged intangible assets further streamlined planning and process execution by over 60% per quarter."
                }
              </p>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
