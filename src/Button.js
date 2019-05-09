import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  active: PropTypes.bool,
  'aria-label': PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

const defaultProps = {
  color: 'secondary',
  tag: 'button',
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }

  render() {
    let {
      active,
      'aria-label': ariaLabel,
      className,
      cssModule,
      color,
      size,
      tag: Tag,
      innerRef,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(classNames(
      className,
      'button',
      size ? `button--size-${size}` : false,
      color ? `button--${color}` : false,
      { active, disabled: this.props.disabled }
    ), cssModule);

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    return (
      <Tag
        type={(Tag === 'button' && attributes.onClick) ? 'button' : undefined}
        {...attributes}
        className={classes}
        ref={innerRef}
        onClick={this.onClick}
        aria-label={ariaLabel}
      />
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
