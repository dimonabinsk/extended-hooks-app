import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typography/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();

    const handleClickFocusInput = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };

    const handleClickResizeInput = () => {
        console.log(inputRef.current);
        inputRef.current.style.width = "250px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                className="form-control mt-2"
                ref={inputRef}
            />
            <div className="mt-3">
                <button className="btn btn-primary me-3" onClick={handleClickFocusInput}>
                    Focus input
                </button>
                <button className="btn btn-secondary" onClick={handleClickResizeInput}>
                    Resize input
                </button>
            </div>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
