import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typography/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [otherState, setOther] = useState(false);
    const toggleOther = () => {
        setOther(!otherState);
    };
    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендер</SmallTitle>
            <Divider/>
            <p>render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleOther}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
