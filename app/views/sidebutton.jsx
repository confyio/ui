/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    var title, isOwner = (window.user.get('username') == window.org.get('owner'));

    if (this.props.type == 'Teams') {
      title = 'Team';
    } else if (this.props.type == 'Projects') {
      title = 'Project';
    }

    if (window.org && isOwner) {
      return (
        <a className="sidebutton btn" href={window.org.get('link') + '/' + this.props.type.toLowerCase() + '/_create'}>
          <i className="fa fa-fw"></i>
          <span>{title}</span>
        </a>
      );
    } else {
      return <DummyView />;
    }
  }
});
