/** @jsx React.DOM */

import DeleteConfirmationView from 'confy/views/elements/delete';

export default React.createClass({
  render: function () {
    return (
      <DeleteConfirmationView type="project" model={window.project}>
        <p>All the environments under this project will be deleted.</p>
      </DeleteConfirmationView>
    );
  }
});
