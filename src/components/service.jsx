
function Service(params) {
    return (
        <div className="service">
            <span>{params.icon}</span>
            <h3>{params.title}</h3>
        </div>
    );
}

export default Service;