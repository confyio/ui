/** @jsx React.DOM */

import TooltipMixin from 'confy/helpers/tooltip';
import DummyView from 'confy/views/elements/dummy';
import ModalView from 'confy/views/elements/modal';
import Alert from 'confy/helpers/alert';
import MD5Helper from 'confy/helpers/md5';
import Config from 'confy/models/config';

export default React.createClass({
  mixins: [TooltipMixin],
  getInitialState: function () {
    return {icon: 'unlock'};
  },
  unlock: function () {
    window.editor.setMode('code');
    this.setState({icon: 'lock'});
  },
  lock: function (config) {
    var self = this;

    if (typeof config == 'string') {
      config = { _encrypted: config };
    } else {
      window.env.config.unset('_encrypted');
    }

    window.env.config.save(config, {
      method: 'put',
      wait: true,
      success: function (model, response) {
        window.editor.setMode('view');
        window.editor.set(window.env.decrypted);
        window.editor.expandAll();

        self.setState({icon: 'unlock'});
        Alert('Successfully saved your credentials');
      },
      error: function (model, response) {
        Alert('Unable to save credentials. Please reload the page and try again', 'danger');
      }
    });
  },
  handleNoEncrypt: function (e) {
    e.preventDefault();
    $('#encrypt-pass').modal('hide');

    this.lock(window.env.decrypted);
  },
  handleEncrypt: function (e) {
    e.preventDefault();
    $('#encrypt-pass').modal('hide');

    var pass = this.refs.encryptpass.getDOMNode().value
      , iv = forge.random.getBytesSync(16)
      , key = MD5Helper(pass);

    var cipher = forge.cipher.createCipher('AES-CBC', key);

    cipher.start({iv: iv});
    cipher.update(forge.util.createBuffer(JSON.stringify(window.env.decrypted)));
    cipher.finish();

    window.env.encrypted = forge.util.encode64(iv) + forge.util.encode64(cipher.output.getBytes());

    this.lock(window.env.encrypted);
  },
  handleDecrypt: function (e) {
    var self = this;
    e.preventDefault();
    $('#decrypt-pass').modal('hide');

    var pass = this.refs.decryptpass.getDOMNode().value
      , iv = forge.util.decode64(window.env.encrypted.substr(0, 24))
      , key = MD5Helper(pass);

    var decipher = forge.cipher.createDecipher('AES-CBC', key);

    decipher.start({iv: iv});
    decipher.update(forge.util.createBuffer(forge.util.decode64(window.env.encrypted.substr(24))));
    decipher.finish();

    try {
      window.env.decrypted = JSON.parse(decipher.output.toString());

      window.editor.set(window.env.decrypted);
      window.editor.expandAll();

      $('#config-encrypted-overlay')[0].className = 'decrypted';

      if (self.props.unlockAfterDecrypt) {
        self.unlock();
      }
    } catch (e) {
      Alert('The given decryption password is wrong', 'danger');
    }
  },
  clickedUnlock: function (e) {
    e.preventDefault();

    if (window.env.encrypted && !window.env.decrypted) {
      $('#decrypt-pass').modal('show');
      this.props.unlockAfterDecrypt = true;
    } else {
      this.unlock();
    }
  },
  clickedLock: function (e) {
    e.preventDefault();

    try {
      window.env.decrypted = window.editor.get();
      $('#encrypt-pass').modal('show');
    } catch (e) {
      Alert('The credentials document is not a valid JSON', 'danger');
    }
  },
  render: function () {
    if (this.props.type == 'Stage' && window.env && window.env.config) {
      var button;

      if (this.state.icon == 'unlock') {
        button = (
          <a className="btn btn-default btn-round tooltipper" href="#" onClick={this.clickedUnlock} data-placement="top" data-original-title="Edit credentials">
            <i className="fa fa-fw fa-pencil"></i>
          </a>
        );
      } else if (this.state.icon == 'lock') {
        button = (
          <a className="btn btn-success btn-round tooltipper" href="#" onClick={this.clickedLock} data-placement="top" data-original-title="Save credentials">
            <i className="fa fa-fw fa-save"></i>
          </a>
        );
      }

      return (
        <div>
          {button}
          <ModalView id="decrypt-pass" title="Decrypt it?">
            <p>Please provide the password using which the document has been encrypted.</p>
            <input className="form-control" ref="decryptpass" type="password" placeholder="Enter password" />
            <button type="button" className="btn btn-danger" onClick={this.handleDecrypt}>Decrypt</button>
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </ModalView>
          <ModalView id="encrypt-pass" title="Encrypt it?">
            <p>Do you want to encrypt the document? If yes, please provide the password which is used for encrypting the document.</p>
            <p className="modal-second-warn">Do not lose the encryption password since it is needed for decryption</p>
            <input className="form-control" ref="encryptpass" type="password" placeholder="Enter password" />
            <button type="button" className="btn btn-danger" onClick={this.handleNoEncrypt}>No</button>
            <button type="button" className="btn btn-danger" onClick={this.handleEncrypt}>Yes</button>
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          </ModalView>
        </div>
      );
    } else {
      return <DummyView />;
    }
  }
});
