import React from 'react';

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props.location.state.data);
    // const { location, history } = this.props;

    // if (location.state === undefined) {
    //   history.push('/');
    // }
  }

  render() {
    // const { location } = this.props;
    // if (location.state) {
    return <span>{this.props}</span>;
    // } else {
    //   return null;
    // }
  }
}

export default Detail;
