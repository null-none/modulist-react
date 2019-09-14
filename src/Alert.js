import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    tag: tagPropType,
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
};

const defaultProps = {
    color: 'default',
    tag: 'span'
};

const Alert = (props) => {
    let {
        className,
        cssModule,
        color,
        title,
        text,
        innerRef,
        tag: Tag,
        ...attributes
    } = props;

    const classes = mapToCssModules(classNames(
        className,
        'alert',
        'alert--' + color,
    ), cssModule);

    return (
        <Tag {...attributes} className={classes} ref={innerRef} >
            <div class="alert__body">
                <div class="alert__title">{title}</div>
                <div class="alert__text">{text}</div>
            </div>
        </Tag>
    );
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;