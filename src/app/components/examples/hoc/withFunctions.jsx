import React from "react";
import CardWrapper from "../../common/Card";
// import PropTypes from "prop-types";

const withFunctions = (SimpleComponent) => () => {
    const isAuth = localStorage.getItem("auth");
    console.log(isAuth);
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    return (
        <CardWrapper>
            <SimpleComponent
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

// withFunctions.propTypes = {};

export default withFunctions;
