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
        <SideButtonView type="Teams" />
        {window.teams.map(function (team) {
          return (
            <li role="presentation" key={team.get('key')} className={team.get('id') == id ? 'active' : ''}>
              <a className="team-name" href={team.get('link')}>
                <div>{team.get('name')}</div>
              </a>
            </li>
          )
        })}
      </ul>
    );
  }
});
