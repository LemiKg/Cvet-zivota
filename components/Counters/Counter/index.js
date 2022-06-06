import React from "react";

const Counter = (props) => {
    const { number, label } = props;

    return (
        <div className="counter">
            <h2 className="label">{label}</h2>
            <p className="number">{number}</p>
        </div>
    );
};

export default React.memo(Counter);
