const FormInput = ({ label, placeholder, type, defaultValue, size }) => {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>

      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  )
}

export default FormInput;
