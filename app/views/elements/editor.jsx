/** @jsx React.DOM */

import ModalView from 'confy/views/elements/modal';

export default React.createClass({
  handleClick: function (e) {
    var self = this;
    e.preventDefault();


  },
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
        <div id="config-encrypted-overlay" data-toggle="modal" data-target="#decrypt-pass" className={window.env.encrypted ? 'encrypted' : 'decrypted'}>
          <h3>This document is encrypted</h3>
          <span>Please decrypt it before you can view it</span>
        </div>
        <ModalView id="decrypt-pass" title="Decrypt it?">
          <p>Please provide the password using which the document has been encrypted.</p>
          <input className="form-control" ref="pass" type="password" placeholder="Enter password" />
          <button type="button" className="btn btn-danger" onClick={this.handleClick}>Decrypt</button>
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </ModalView>
      </div>
    );
  }
});
