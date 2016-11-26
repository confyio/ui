/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import EnvsCreateFormView from 'confy/views/envs/create-form';

export default React.createClass({
  render: function () {
    return (
      <MainView header="Create Stage">
        <EnvsCreateFormView />
      </MainView>
    );
  }
});
