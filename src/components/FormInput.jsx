const FormInput = ({ label, placeholder, type, defaultValue }) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input 
        type={type} 
        placeholder={placeholder} 
        defaultValue={defaultValue} 
        className="input input-bordered w-full max-w-xs" 
      />
    </div>
  )
}

export default FormInput;
