/** @jsx React.DOM */

import Sidebar from 'confy/views/sidebar';

export default React.createClass({
  render: function () {
    var id = window.env && window.env.get('id');

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
