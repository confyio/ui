/** @jsx React.DOM */

import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  render: function () {
    var id = window.env && window.env.get('id');

    if (!this.props.exist) {
      return (
        <DummyView />
      );
    }

    if (this.props.noActive) {
      id = '';
    }

    return (
      <ul className="nav">
        {window.envs.map(function (env) {
          return (
            <li role="presentation" key={env.get('key')} className={env.get('id') == id ? 'active' : ''}>
              <a href={env.get('link')}>
                <div>
                  <i className="fa fa-fw fa-chevron-right"></i>
                  {env.get('name')}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
});
