/** @jsx React.DOM */

import TooltipMixin from 'confy/helpers/tooltip';
import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  mixins: [TooltipMixin],
  render: function () {
    var isOwner = (window.user.get('username') == window.org.get('owner'));

    if (this.props.type == 'Team' && window.team && window.team.get('id') != 'owners' && isOwner) {
      return (
        <a className="btn tooltipper" href={window.team.get('link') + '/_update'} data-placement="top" title="Edit Team">
          <i className="fa fa-fw fa-gear"></i>
        </a>
      );
    } else {
      return <DummyView />;
    }
  }
});
