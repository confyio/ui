/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';

export default React.createClass({
  render: function () {
    return (
      <MainView type="Project" header="No projects">
        <p>Please create one.</p>
      </MainView>
    );
  }
});
