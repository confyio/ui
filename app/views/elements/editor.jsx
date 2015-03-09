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
      <div id="config-container">
        <div className="table-head-like">Console</div>
        <div id="config-editor"></div>
        <div id="config-encrypted-overlay" data-toggle="modal" data-target="#decrypt-pass" className={window.env.encrypted && !window.env.decrypted ? 'encrypted' : 'decrypted'}>
          <h3>This document is encrypted</h3>
          <span>Please decrypt it before you can view it</span>
        </div>
      </div>
    );
  }
});
