import React, { useState, useEffect, useRef, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typography/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };
    const validateWithOutCallback = (data) => {
        console.log("withOutCallback: ", data);
    };

    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);

    const validateWithCallback = useCallback((data) => {
        console.log("withCallback: ", data);
    }, []);

    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithCallback(data);
        validateWithOutCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOutCallback: {withOutCallback.current}</p>
            <p>Render withCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                name="email"
                id="email"
                value={data.email || ""}
                className="form-control mt-2"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
