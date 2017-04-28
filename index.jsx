import React, { PureComponent, PropTypes } from 'react';


export default class ClickOutside extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    callback: PropTypes.func.isRequired,
  };

  static defaultProps = {
    children: undefined,
  };

  componentDidMount() {
    document.onclick = this.props.callback;
  }

  render() {
    return (
      <div onClick={event => event.nativeEvent.stopImmediatePropagation()}>
        {this.props.children}
      </div>
    );
  }
}
