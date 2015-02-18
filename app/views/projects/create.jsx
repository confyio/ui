/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import ProjectsCreateFormView from 'confy/views/projects/create-form';

export default React.createClass({
  render: function () {
    return (
      <MainView header="Create Project">
        <ProjectsCreateFormView />
      </MainView>
    );
  }
});
