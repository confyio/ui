/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import ProjectsListView from 'confy/views/projects/list';
import EditorView from 'confy/views/elements/editor';

export default React.createClass({
  render: function () {
    return (
      <div>
        <ProjectsListView />
        <MainView type="Environment" header={window.env.get('name')}>
          <EditorView json={window.env.config.getJSON()} />
        </MainView>
      </div>
    );
  }
});
