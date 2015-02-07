/** @jsx React.DOM */

import SideButtonView from 'confy/views/elements/sidebutton';

export default React.createClass({
  render: function () {
    var id = window.team && window.team.get('id');

    if (this.props.noActive) {
      id = '';
    }

    return (
      <ul className="nav nav-sidebar">
        {window.teams.map(function (team) {
          return (
            <li role="presentation" key={team.get('key')} className={team.get('id') == id ? 'active' : ''}>
              <a href={team.get('link')}>
                <span>{team.get('name')}</span>
              </a>
            </li>
          )
        })}
        <SideButtonView type="Teams" />
      </ul>
    );
  }
});
