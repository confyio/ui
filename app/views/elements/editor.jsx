/** @jsx React.DOM */

export default React.createClass({
  componentDidMount: function () {
    window.editor = new JSONEditor(jQuery('#config-editor')[0], {
      mode: 'view',
      search: false
    });

    window.editor.set(this.props.json);
    window.editor.expandAll();
  },
  render: function () {
    return (
      <div>
        <div className="table-head-like">Console</div>
        <div id="config-editor"></div>
      </div>
    );
  }
});
