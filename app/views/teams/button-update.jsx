/** @jsx React.DOM */

import DummyView from 'confy/views/dummy';

export default React.createClass({
  render: function () {
    if (this.props.type == 'Team' && window.team) {
      return (
        <a className="btn btn-edit" href={window.team.get('link') + '/_update'}>
          <i className="fa fa-edit"></i>
          &nbsp;Edit Team
        </a>
      );
    } else {
      return <DummyView />;
    }
  }
});
