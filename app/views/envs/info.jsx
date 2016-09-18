/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import EditorView from 'confy/views/elements/editor';

export default React.createClass({
  render: function () {
    return (
      <MainView type="Stage" header={window.env.get('name')}>
        <EditorView json={window.env.config.getJSON()} />
      </MainView>
    );
  }
});
