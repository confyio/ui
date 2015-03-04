/** @jsx React.DOM */

import TooltipMixin from 'confy/helpers/tooltip';
import DummyView from 'confy/views/elements/dummy';
import ModalView from 'confy/views/elements/modal';
import Alert from 'confy/helpers/alert';

export default React.createClass({
  mixins: [TooltipMixin],
  getInitialState: function () {
    return {icon: 'unlock'};
  },
  clickedUnlock: function (e) {
    e.preventDefault();

    window.editor.setMode('code');
    this.setState({icon: 'lock'});
  },
  clickedLock: function (e) {
    var config = null, self = this;
    e.preventDefault();

    try {
      config = window.editor.get();
    } catch (e) {
      Alert('The credentials document is not a valid JSON', 'danger');
    } finally {
      if (config) {
        window.env.config.save(config, {
          method: 'put',
          wait: true,
          success: function (model, response) {
            window.editor.setMode('view');
            window.editor.set(window.env.config.getJSON());
            window.editor.expandAll();

            self.setState({icon: 'unlock'});
            Alert('Successfully saved your credentials');
          },
          error: function (model, response) {
            Alert('Unable to save credentials. Please reload the page and try again', 'danger');
          }
        })
      }
    }
  },
  render: function () {
    if (this.props.type == 'Environment' && window.env && window.env.config) {
      var button;

      if (this.state.icon == 'unlock') {
        button = (
          <a className="btn btn-danger btn-round tooltipper" href="#" onClick={this.clickedUnlock} data-placement="left" data-original-title="Unlock credentials">
            <i className="fa fa-fw unlock"></i>
          </a>
        );
      } else if (this.state.icon == 'lock') {
        button = (
          <a className="btn btn-success btn-round tooltipper" href="#" onClick={this.clickedLock} data-placement="left" data-original-title="Lock credentials">
            <i className="fa fa-fw lock"></i>
          </a>
        );
      }

      return (
        <div>
          {button}
          <ModalView id="decrypt-pass" title="Decrypt it?">
            <p>Please provide the password using which the document has been encrypted.</p>
            <input className="form-control" ref="pass" type="password" placeholder="Enter password" />
            <button type="button" className="btn btn-danger">Decrypt</button>
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </ModalView>
          <ModalView id="encrypt-pass" title="Encrypt it?">
            <p>Please provide the password using which the document will be encrypted.</p>
            <p className="modal-second-warn">Do not lose the password since it is needed for decryption</p>
            <input className="form-control" ref="pass" type="password" placeholder="Enter password" />
            <button type="button" className="btn btn-danger">Encrypt</button>
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </ModalView>
        </div>
      );
    } else {
      return <DummyView />;
    }
  }
});
