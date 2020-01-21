import React from "react"
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from "prop-types"

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';

function getThings() {
  console.log('getThings() Action!!')
  return {
    type: GET_THINGS_REQUEST
  };
}

class HelloWorld extends React.Component {
  render () {
    const { things } = this.props;
    const thingsList = things.map((thing) => {
      return <li>{ thing.name } { thing.guid }</li>
    })
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getThingsBtn" onClick={() => this.props.getThings()}>getThings</button>
        <br />
        <ul>{ thingsList }</ul>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

// const structuredSelector = createStructuredSelector({
//   things: state => state.things,
// });

// const mapDispatchToProps = { getThings };

export default connect(({ things }) => ({ things }), { getThings })(HelloWorld);
