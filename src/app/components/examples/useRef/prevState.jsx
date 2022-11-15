import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typography/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOther] = useState("false");
    const toggleOther = () => {
        setOther((prev) => (prev === "false" ? "true" : "false"));
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider/>
            <p>Prev State: {prevState.current}</p>
            <p>Current State: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOther}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
