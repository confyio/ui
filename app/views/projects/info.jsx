/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import EnvsCreateFormView from 'confy/views/envs/create-form';

export default React.createClass({
  render: function () {
    if (window.envs.length == 0) {
      return (
        <MainView id="empty-projects" header="No stages" noAdmin="true" noActions="true">
          <h5 className="subheader">Lets get started by creating a new stage</h5>
          <EnvsCreateFormView />
        </MainView>
      );
    }

    return (
      <MainView type="Project" header={window.project.get('name')}>
        <h5 className="subheader">Select one of the following stages to get started</h5>
        <table className="table">
          <tbody>
            {window.envs.map(function (env) {
              return (
                <tr>
                  <td>
                    <a href={env.get('link')}>{env.get('name')}</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </MainView>
    );
  }
});
