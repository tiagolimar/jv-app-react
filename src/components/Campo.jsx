export default function Campo({variant, label, id, type = "text", value, onChange}) {
    return (
        <div className="form-group">
            <label htmlFor={id} 
                className={`form-label text-${variant}`}>
                {label}:
            </label>
            <input
                type={type}
                id={id}
                name={id}
                value={value}
                className={`form-control border border-${variant} shadow-sm`}
                onChange={onChange}
            />
        </div>
    );
}

