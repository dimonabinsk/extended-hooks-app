import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { validator } from "../../../utils/validator";

const FormComponent = ({ children, validatorConfig, onSubmit }) => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        onSubmit(data);
    };

    useEffect(() => {
        if (Object.keys(data).length > 0) {
            validate();
        }
    }, [data]);

    const isValid = Object.keys(errors).length === 0;

    const clonedElement = React.Children.map(children, (child) => {
        const childType = typeof child.type;
        let config = {};
        if (childType === "function") {
            // console.log(child);
            if (!child.props.name) {
                throw new Error("Имя обязательно для добавления в поле", child);
            }
            config = {
                ...child.props,
                onChange: handleChange,
                value: data[child.props.name] || "",
                error: errors[child.props.name]
            };
        }

        if (childType === "string") {
            if (child.type === "button") {
                if (
                    child.props.type === "submit" ||
                    child.props.type === undefined
                ) {
                    config = {
                        ...child.props,
                        disabled: !isValid
                    };
                }
            }
        }
        // console.log(child.type);
        return React.cloneElement(child, config);
    });

    return (
        <>
            <form onSubmit={handleSubmit}>{clonedElement}</form>
        </>
    );
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    validatorConfig: PropTypes.object,
    onSubmit: PropTypes.func
};

export default FormComponent;
