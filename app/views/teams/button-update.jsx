/** @jsx React.DOM */

import TooltipMixin from 'confy/helpers/tooltip';
import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  mixins: [TooltipMixin],
  render: function () {
    var isOwner = (window.user.get('username') == window.org.get('owner'));

    if (this.props.type == 'Team' && window.team && window.team.get('id') != 'owners' && isOwner) {
      return (
        <div className="settings">
          <i className="fa fa-fw fa-gear"></i>
          <a href={window.team.get('link') + '/_update'}>Settings</a>
        </div>
      );
    } else {
      return <DummyView />;
    }
  }
});
