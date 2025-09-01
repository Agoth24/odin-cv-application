export default function FormGroup({ id, labelText, type }) {
    const maxLength = type === 'text' ? 30 : null
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      <input type={type} id={id} required maxLength={maxLength} />
    </div>
  );
}
