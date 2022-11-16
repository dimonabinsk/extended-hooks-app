import React from "react";
import CardWrapper from "../../common/Card";

import TextField from "../../common/form/textField";

import SmallTitle from "../../common/typography/smallTitle";
const CloneElementExample = () => {
    const field = (
        <TextField
            label={"Email"}
            name="email"
            onChange={(target) => console.log("change email: ", target)}
        />
    );

    const handleChange = (target) => {
        console.log("change clone email: ", target);
    };
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {field}
            {React.cloneElement(field, {
                onChange: handleChange,
                label: "Clone email"
            })}
        </CardWrapper>
    );
};

export default CloneElementExample;
