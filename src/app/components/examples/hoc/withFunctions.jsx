import React, { useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
// import PropTypes from "prop-types";

const withFunctions = (SimpleComponent) => () => {
    const [isFlag, setFlag] = useState(false);
    const isAuth = localStorage.getItem("auth");

    useEffect(() => {
        if (typeof isAuth === "string") {
            setFlag(true);
        } else {
            setFlag(false);
        }
    }, [isAuth]);

    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <CardWrapper>
            <SimpleComponent
                isFlag={isFlag}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

// withFunctions.propTypes = {};

export default withFunctions;
