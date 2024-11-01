export default function Campo() {
    return (
        <div className="form-group">
            <label htmlFor="nome" className="form-label">
                Nome:
            </label>
            <input
                type="text"
                id="nome"
                name="nome"
                className="form-control border border-dark shadow-sm"
            />
        </div>
    );
}

