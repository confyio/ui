/** @jsx React.DOM */

import DeleteConfirmationView from 'confy/views/elements/delete';

export default React.createClass({
  render: function () {
    return (
      <DeleteConfirmationView type="organization" model={window.org}>
        <p>All the projects and teams under this organization will be deleted.</p>
      </DeleteConfirmationView>
    );
  }
});
