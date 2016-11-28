/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import EnvsVersionView from 'confy/views/envs/version';

export default React.createClass({
  render: function () {
    return (
      <MainView type="Stage" header={window.env.get('name')} isVersions="true">
        <table className="table" id="versions">
          <thead>
            <tr>
              <td>Editor</td>
              <td colSpan="2">Time</td>
            </tr>
          </thead>
          <tbody>
            <EnvsVersionView version={window.env.versions[0]} noUse={true} />
            {window.env.versions.slice(1).map(function (version) {
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
