/** @jsx React.DOM */

import PagesLoginView from 'confy/views/pages/login';
import PagesRegisterView from 'confy/views/pages/register';

export default React.createClass({
  render: function () {
    return (
      <div className="content">
        <PagesLoginView message={this.props.loginError} />
        <PagesRegisterView />
      </div>
    );
  }
});
