import PropTypes from 'prop-types';

const MyComponent = ({name, children, favoriteNumber}) => {
    return (
    <div>
        Hello {name}<br/>
        children value is {children}.<br/>
        favorite number is {favoriteNumber}.
    </div>
    );
}

MyComponent.defaultProps = {
    name: 'default name'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;