/** @jsx React.DOM */

import PagesLoginView from 'confy/views/pages/login';
import PagesRegisterView from 'confy/views/pages/register';

export default React.createClass({
  render: function () {
    return (
      <div className="content">
        <h2>Save your credentials in the cloud, securely.</h2>
        <button href="#register-modal" className="btn btn-default" data-dismiss="modal" data-toggle="modal">Get Started</button>
        <PagesLoginView message={this.props.loginError} />
        <PagesRegisterView />
      </div>
    );
  }
});
