export default function CVSection({
  title,
  name,
  role,
  fromDate,
  toDate,
  jobResponsibilities,
}) {
  function formatDate(dateStr) {
    const date = new Date(dateStr);

    return date.toLocaleString("en-US", { month: "short", year: "numeric" });
  }
  return (
    <section className="info-section">
      <h2>{title}</h2>
      <ul>
        <li>
            <div className="info-group">
              <div className="info-text">
                <h3>{name}</h3>
                <h4>{role}</h4>
              </div>
              <div className="info-dates">
                <span>{formatDate(fromDate)}</span>
                <span> - </span>
                <span>{formatDate(toDate)}</span>
              </div>
            </div>
            {jobResponsibilities && <p className="jobResponsibilities">{jobResponsibilities}</p>}
        </li>
      </ul>
    </section>
  );
}
