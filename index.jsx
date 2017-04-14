import React, { PureComponent, PropTypes } from 'react';

const fn = (event) => {
  event.stopPropagation();
  return false;
};


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
    const foo = document.getElementById('foo');
    foo.onclick = event => fn(event);
  }

  render() {
    return (
      <div id="foo" onClick={fn} style={{ border: '1px solid black' }}>
        here {this.props.children}
      </div>
    );
  }
}
