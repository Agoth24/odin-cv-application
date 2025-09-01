import "../styles/education.css";
import "../index.css";

export default function Education() {
  return (
    <section>
      <h2>Educational Experience</h2>
      <form method="#">
        <div className="form-group">
          <label htmlFor="schoolName">School Name:</label>
          <input type="text" required/>
        </div>
        <div className="form-group">
          <label htmlFor="progOfStudy">Program of Study:</label>
          <input type="text" required/>
        </div>
        <div className="form-group">
          <label htmlFor="fromDate">From:</label>
          <input type="date" required />
        </div>
        <div className="form-group">
          <label htmlFor="toDate">To:</label>
          <input type="date" required />
        </div>
      </form>
    </section>
  );
}
