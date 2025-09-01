import "../styles/formattedCV.css";
import CVSection from "./CVSection";

export default function FormattedCV({ onEdit, data }) {

//   const data = {
//     name: "John Smith",
//     email: "john.smith@email.com",
//     phone: "(555) 123-4567",
//     schoolName: "University of California, Berkeley",
//     progOfStudy: "Bachelor of Science in Computer Science",
//     eduFromDate: "2018-08-25",
//     eduToDate: "2022-05-15",
//     companyName: "Tech Solutions Inc.",
//     positionTitle: "Software Developer",
//     jobResponsibilities:
//       "Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented responsive designs and optimized application performance.",
//     workFromDate: "2022-06-01",
//     workToDate: "2024-12-31",
//   };

  function handleClick(e) {
    e.preventDefault();
    onEdit();
  }

  return (
    <article>
      <header className="formatted-header">
        <h1>{data.name}</h1>
        <div className="contact">
          <div className="contact-group">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
              <polyline
                points="22,6 12,13 2,6"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <span>{data.email}</span>
          </div>
          <div className="contact-group">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                stroke="white"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <span>{data.phone}</span>
          </div>
        </div>
      </header>
      <main className="formattedMain">
        <CVSection
          title="Educational Experience"
          name={data.schoolName}
          role={data.progOfStudy}
          fromDate={data.eduFromDate}
          toDate={data.eduToDate}
        />
        <CVSection
          title="Practical Work Experience"
          name={data.companyName}
          role={data.positionTitle}
          fromDate={data.workFromDate}
          toDate={data.workToDate}
          jobResponsibilities={data.jobResponsibilities}
        />
        <button className="edit-btn no-print" onClick={handleClick}>
          Edit Info
        </button>
      </main>
    </article>
  );
}
