export default function FormGroup({ id, labelText, type, value, onChange }) {
    const maxLength = type === 'text' ? 30 : null
  return (
    <div className="form-group">
      <label htmlFor={id}>{labelText}</label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          required
          rows={4}
        />
      ) : (
        <input 
          type={type} 
          id={id} 
          name={id}
          value={value}
          onChange={onChange}
          required 
          maxLength={maxLength} 
        />
      )}
    </div>
  );
}
