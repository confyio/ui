/** @jsx React.DOM */

import TooltipMixin from 'confy/helpers/tooltip';
import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  mixins: [TooltipMixin],
  render: function () {
    var isOwner = (window.user.get('username') == window.org.get('owner'));

    if (this.props.project && isOwner) {
      return (
        <a href={project.get('link') + '/envs/_create'}>
          <i className="fa fa-fw tooltipper" data-placement="bottom" title="New Environment"></i>
        </a>
      );
    } else {
      return <DummyView />;
    }
  }
});
