import React, { useCallback } from "react";
import Counter from "./Counter";
import { counters } from "./countersMock";

const Counters = () => {
    const renderMethod = useCallback(() => {
        return counters?.map((el, i) => (
            <Counter key={i} number={el?.number} label={el?.label} />
        ));
    }, [counters]);

    return <div className="counters"> {renderMethod()} </div>
};

export default React.memo(Counters);
