/** @jsx React.DOM */

export default React.createClass({
  componentDidMount: function () {
    if (!window.editor) {
      window.editor = new JSONEditor(jQuery('#config-editor')[0], {
        mode: 'view',
        search: false
      });
    }

    window.editor.set(this.props.json);
    window.editor.expandAll();
  },
  render: function () {
    return (
      <div id="config-editor"></div>
    );
  }
});
