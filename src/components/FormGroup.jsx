function getValidationMessage(id) {
  switch (id) {
    case 'name':
      return "Please enter a valid name (letters, spaces, hyphens, apostrophes only)";
    case 'email':
      return "Please enter a valid email address (example@domain.com)";
    case 'phone':
      return "Please enter a valid phone number (10-15 digits, may include +, spaces, hyphens, parentheses)";
    case 'schoolName':
    case 'companyName':
      return "Please enter a valid name (letters, numbers, spaces, and common punctuation)";
    case 'progOfStudy':
    case 'positionTitle':
      return "Please enter a valid title (letters, numbers, spaces, and common punctuation)";
    default:
      return "Please enter valid text";
  }
}

export default function FormGroup({ id, labelText, type, value, onChange }) {
    const maxLength = type === 'text' ? 40 : null
    
    // Define regex patterns for validation
    const getPattern = (id, type) => {
      switch (id) {
        case 'name':
          return "^(?=.*[a-zA-Z])[a-zA-Z\\s\\-',.]+$"; // Must contain at least one letter, allows letters, spaces, hyphens, apostrophes, commas, periods
        case 'email':
          return "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"; // Valid email format
        case 'phone':
          return "^[\\+]?[0-9\\s\\-\\(\\)]{10,15}$"; // Phone numbers with optional +, spaces, hyphens, parentheses
        case 'schoolName':
        case 'companyName':
          return "^[a-zA-Z0-9\\s\\-',.&]+$"; // Text with common business characters
        case 'progOfStudy':
        case 'positionTitle':
          return "^[a-zA-Z0-9\\s\\-',.&/]+$"; // Text with slashes for titles like "Software Engineer/Developer"
        default:
          return type === 'text' ? "^[a-zA-Z0-9\\s\\-',.&/]+$" : null;
      }
    };

    const pattern = getPattern(id, type);
    
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
          pattern="^[a-zA-Z0-9\\s\\-',.&/\\n\\r]+$"
          title="Please enter valid text (letters, numbers, spaces, and appropriate punctuation)"
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
          pattern={pattern}
          title={getValidationMessage(id)}
        />
      )}
    </div>
  );
}
