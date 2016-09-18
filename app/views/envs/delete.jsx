/** @jsx React.DOM */

import DeleteConfirmationView from 'confy/views/elements/delete';

export default React.createClass({
  render: function () {
    return (
      <DeleteConfirmationView type="stage" model={window.env}>
      </DeleteConfirmationView>
    );
  }
});
