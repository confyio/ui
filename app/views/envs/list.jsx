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

    if (this.props.noActive === 'true') {
      id = '';
    }

    return (
      <ul className="nav">
        {window.envs.map(function (env) {
          return (
            <li role="presentation" key={env.get('key')} className={env.get('id') == id ? 'active' : ''}>
              <a href={env.get('link')}>
                <span>{env.get('name')}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
});
