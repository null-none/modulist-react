import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  color: 'default',
  tag: 'div'
};

const Box = (props) => {
  let {
    className,
    cssModule,
    color,
    innerRef,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'box',
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={innerRef} />
  );
};

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;