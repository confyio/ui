/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import EnvsVersionView from 'confy/views/envs/version';

export default React.createClass({
  render: function () {
    return (
      <MainView type="Environment" header={window.env.get('name')} isVersions="true">
        <table className="table">
          <thead>
            <tr>
              <td colSpan="2">Version Dated</td>
            </tr>
          </thead>
          <tbody>
            {window.env.versions.map(function (version) {
              return (
                <EnvsVersionView version={version} />
              );
            })}
          </tbody>
        </table>
      </MainView>
    );
  }
});
