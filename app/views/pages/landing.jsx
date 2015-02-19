/** @jsx React.DOM */

import PagesLoginView from 'confy/views/pages/login';
import PagesRegisterView from 'confy/views/pages/register';

export default React.createClass({
  render: function () {
    return (
      <div className="content">
        <PagesLoginView message={this.props.loginError} />
        <PagesRegisterView />
        <div id="tagline">
          <h2>Be smart and be safe</h2>
          <span>All credentials held in one place</span>
        </div>
        <div id="screens">
        </div>
      </div>
    );
  }
});
