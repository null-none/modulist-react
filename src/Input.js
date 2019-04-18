/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, warnOnce, tagPropType } from './utils';

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ]),
  plaintext: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

const defaultProps = {
  type: 'text'
};

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.getRef = this.getRef.bind(this);
    this.focus = this.focus.bind(this);
  }

  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }
    this.ref = ref;
  }

  focus() {
    if (this.ref) {
      this.ref.focus();
    }
  }

  render() {
    let {
      className,
      cssModule,
      type,
      bsSize,
      valid,
      invalid,
      tag,
      innerRef,
      ...attributes
    } = this.props;

    const isNotaNumber = new RegExp('\\D', 'g');

    const fileInput = type === 'file';
    let Tag = tag || (selectInput || textareaInput ? type : 'input');

    let formControlClass = 'textbox__input';

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      warnOnce(
        'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
      );
      bsSize = attributes.size;
      delete attributes.size;
    }

    const classes = mapToCssModules(
      classNames(
        className,
        formControlClass
      ),
      cssModule
    );

    if (Tag === 'input' || (tag && typeof tag === 'function')) {
      attributes.type = type;
    }

    return <Tag {...attributes} ref={innerRef} className={classes} />;
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;