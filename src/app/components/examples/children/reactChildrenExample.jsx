import React, { useState } from "react";
import PropTypes from "prop-types";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typography/smallTitle";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});
    // useEffect(() => {
    //     console.log(data);
    // }, [data]);
    const handleChange = (target) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };

    return React.Children.map(children, (child) => {
        // console.log(child);
        const config = {
            ...child.props,
            onChange: handleChange,
            value: data[child.props.name] || ""
        };

        return React.cloneElement(child, config);
    });
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider />
            <FormComponent>
                <TextField name="email" label="Почта" />
                <TextField name="password" label="Пароль" type="password" />
            </FormComponent>
        </CardWrapper>
    );
};

export default ReactChildrenExample;
