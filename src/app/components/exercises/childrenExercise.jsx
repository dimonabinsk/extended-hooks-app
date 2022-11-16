import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";

const ComponentsContainer = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        const config = {
            ...child.props,
            number: i + 1
        };
        return React.cloneElement(child, config);
    });
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <ComponentsContainer>
                <Component />
                <Component />
                <Component />
            </ComponentsContainer>
        </CollapseWrapper>
    );
};

const Component = ({ number }) => {
    return <div>{number} Компонент списка</div>;
};

Component.propTypes = {
    number: PropTypes.number
};

ComponentsContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default ChildrenExercise;
