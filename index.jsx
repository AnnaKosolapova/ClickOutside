import React,
{ PureComponent, PropTypes } from 'react';

export default class ClickOutside extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    callback: PropTypes.func.isRequired,
  };

  static defaultProps = {
    children: undefined,
  };

  constructor(props) {
    super(props);

    this.attachDocumentClick = this.attachDocumentClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.attachDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.attachDocumentClick);
  }

  attachDocumentClick() {
    document.addEventListener('click', (event) => {
      if (event.target !== this.refs.clickOutside) {
        this.props.callback();
      }
    });
  }

  render() {
    return (
      <div ref="clickOutside">
        {this.props.children}
      </div>
    );
  }
}
