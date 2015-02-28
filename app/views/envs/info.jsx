/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import EditorView from 'confy/views/elements/editor';

export default React.createClass({
  render: function () {
    return (
      <MainView type="Environment" header={window.env.get('name')}>
        <EditorView encrypted={window.env.encrypted} json={window.env.config.getJSON()} />
      </MainView>
    );
  }
});
