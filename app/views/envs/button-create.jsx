/** @jsx React.DOM */

import TooltipMixin from 'confy/helpers/tooltip';
import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  mixins: [TooltipMixin],
  render: function () {
    var isOwner = (window.user.get('username') == window.org.get('owner'));

    if (this.props.type == 'Project' && window.project && isOwner) {
      return (
        <a className="btn tooltipper" href={window.project.get('link') + '/envs/_create'} data-placement="top" title="Create Environment">
          <i className="fa fa-fw fa-plus"></i>
        </a>
      );
    } else {
      return <DummyView />;
    }
  }
});
