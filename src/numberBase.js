import React from 'react';

class BaseConverter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    let i = parseInt(value.split('').slice(-1), this.props.base);
    if (i === null) return;
    this.props.onChange(parseInt(value, this.props.base));
  }

  render() {
    const value = this.props.value ? this.props.value : '';
    return (
      <div>
        <label>
          Base {this.props.base} :
          <input
            value={value.toString(this.props.base)}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

class NumberBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    const array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    const children = array.map((base) => (
      <BaseConverter
        base={base}
        value={this.state.value}
        onChange={this.handleChange}
        key={base}
      />
    ));
    return <div>{children}</div>;
  }
}

export default NumberBase;
