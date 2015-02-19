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

        <div id="features">
          <div id="feature-1" className="odd">
            <div className="description">
              <h3>Security</h3>
              <p>We make your software credentials much more secure.</p>
            </div>
            <div className="illustration"></div>
          </div>
          <div className="cleared"></div>
          <div id="feature-2" className="even">
            <div className="description">
              <h3>Versioning</h3>
              <p>We make your software credentials much more secure</p>
            </div>
            <div className="illustration"></div>
          </div>
          <div className="cleared"></div>
          <div id="feature-3" className="odd">
            <div className="description">
              <h3>Access Control</h3>
              <p>Fine-grained access control. We let you have unlimited teams with unlimited users.</p>
            </div>
            <div className="illustration"></div>
          </div>
          <div className="cleared"></div>
          <div id="feature-4" className="even">
            <div className="description">
              <h3>Happiness</h3>
              <p>Easier credential management. No more grunt work. No more sadness.</p>
            </div>
            <div className="illustration"></div>
          </div>
          <div className="cleared"></div>
        </div>

        <div id="trial">
          <div>
            <div>So what are you waiting for</div>
            <button href="#register-modal" className="btn btn-default" data-dismiss="modal" data-toggle="modal">Start 7 day trial</button>
          </div>
        </div>
      </div>
    );
  }
});
