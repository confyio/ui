/** @jsx React.DOM */

import DeleteConfirmationView from 'confy/views/elements/delete';

export default React.createClass({
  render: function () {
    return (
      <DeleteConfirmationView type="team" model={window.team}>
      </DeleteConfirmationView>
    );
  }
});
