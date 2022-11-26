import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isFlag }) => {
    // console.log(isFlag);
    return (
        <>
            {!isFlag ? (
                <button onClick={onLogin} className={"btn btn-primary"}>
                    Войти
                </button>
            ) : (
                <button onClick={onLogOut} className={"btn btn-secondary"}>
                    Выйти из системы
                </button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogOut: PropTypes.func.isRequired,
    isFlag: PropTypes.bool.isRequired
};

export default SimpleComponent;
