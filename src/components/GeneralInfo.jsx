import "../styles/generalInfo.css";

export default function GeneralInfo() {
  return (
    <section>
      <h2>General Information</h2>

      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" id="nameInput" required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" id="emailInput" required />
        </div>
        <div className="form-group">
          <label for="">Phone Number:</label>
          <input type="tel" id="telInput" required />
        </div>
      </form>
    </section>
  );
}
