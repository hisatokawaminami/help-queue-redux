import React from 'react';
import PropTypes from 'prop-types';
// import Moment from 'moment';
import { connect } from 'react-redux';
import c from './../constants';

function Ticket(props) {

  function handleSavingSelectedTicket(ticketId){
    const { dispatch } = props;
    const action = {
      type: c.SELECT_TICKET,
      ticketId: ticketId
    };
    dispatch(action);
  }

  const ticketInformation =
    <div>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {handleSavingSelectedTicket(props.ticketId);}}>
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        <style  jsx>{`

            .color-toggle {
              background-color: green;
            }
            .color-toggle:hover {
              background-color: pink;
            }

            `}</style>
        <div className="color-toggle">
          {ticketInformation}

        </div>
      </div>

    );
  }
}
//  the lowercase version (Ticket.propTypes) is declaring a propTypes property on our Ticket component. The upper-case version (PropTypes.string) is referring to the PropTypes class we import at the top of the file in the line import PropTypes from "prop-types";.
// function displayTimeOpen(timeOpen){
//   return timeOpen.from(new Moment(), true);
// }

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  // onTicketSelection: PropTypes.func,
  ticketId: PropTypes.string.isRequired
};
export default connect()(Ticket);
