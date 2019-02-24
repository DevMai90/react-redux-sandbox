import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import { GET_CONTACTS } from '../../actions/types';
// When we have an action its called as a prop. Bring anything from redux state is put in as props
import PropTypes from 'prop-types';

class Contacts extends Component {
  // Runs when the component is mounted to the DOM
  componentDidMount() {
    // This will put 'contacts' into the props
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

// Our state has a property called contact (from reducers index.js) which has our contactReducer that has contacts
// This allows us to access state as a PROP called contacts.
const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

// Fire off an action. In this case we want it to call GET_CONTACTS
const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch({ type: GET_CONTACTS })
});

//
Contact.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
};

// Wrap the component in connect
// Inside connect, put anything we want to map from redux state to props in the component and anything to dispatch
// Pass these constands to connect()
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contacts);
