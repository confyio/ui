/** @jsx React.DOM */

import MainView from 'confy/views/main';
import TeamsListView from 'confy/views/teams/list';

export default React.createClass({
  render: function () {
    return (
      <div>
        <TeamsListView />
        <MainView type="Team" header={window.team.get('name')}>
        </MainView>
      </div>
    );
  }
});
