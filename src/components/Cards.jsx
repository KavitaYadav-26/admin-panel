import React from "react";

function Cards({ title, value, icon, color }) {
    return (
        <div className="card border-0 shadow-sm h-100">
            <div className="card-body d-flex justify-content-between align-items-center">

                <div>
                    <p className="text-muted mb-1">{title}</p>
                    <h3 className="fw-bold">{value}</h3>
                </div>

                <div
                    className="d-flex justify-content-center align-items-center rounded-circle"
                    style={{
                        width: "60px",
                        height: "60px",
                        background: color,
                        color: "#fff",
                        fontSize: "24px",
                    }}
                >
                    {icon}
                </div>

            </div>
        </div>
    );
}

export default Cards;