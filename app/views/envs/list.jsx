/** @jsx React.DOM */

import DummyView from 'confy/views/dummy';

export default React.createClass({
  render: function () {
    var id = window.env && window.env.get('id');

    if (!this.props.exist) {
      return (
        <DummyView />
      );
    }

    return (
      <ul>
        {window.envs.map(function (env) {
          return (
            <li role="presentation" key={env.get('key')} className={env.get('id') == id ? 'active' : ''}>
              <a href={env.get('link')}>
                {env.get('name')}
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
});
