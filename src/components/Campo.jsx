export default function Campo({label, id, type = "text"}) {
    return (
        <div className="form-group">
            <label htmlFor={id} 
                className="form-label text-primary">
                {label}:
            </label>
            <input
                type={type}
                id={id}
                name={id}
                className="form-control border border-primary shadow-sm"
            />
        </div>
    );
}

