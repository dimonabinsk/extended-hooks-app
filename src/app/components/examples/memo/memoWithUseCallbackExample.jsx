import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            Log Out
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function shallowEqual(prev, next) {
    if (prev.onLogOut !== next.onLogOut) {
        return false;
    }
    return true;
}

const MemoizedLogOut = React.memo(LogOutButton, shallowEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button
                className=" btn btn-primary mx-2"
                onClick={() => setState(!state)}
            >
                {" "}
                Initiate rerender
            </button>
            <MemoizedLogOut onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
