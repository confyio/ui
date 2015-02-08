/** @jsx React.DOM */

import TooltipMixin from 'confy/helpers/tooltip';
import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  mixins: [TooltipMixin],
  render: function () {
    var isOwner = (window.user.get('username') == window.org.get('owner'));

    if (this.props.type == 'Project' && window.project && isOwner) {
      return (
        <div className="settings">
          <a href={window.project.get('link') + '/_update'}>
            <i className="fa fa-fw fa-gear"></i>
            Settings
          </a>
        </div>
      );
    } else {
      return <DummyView />;
    }
  }
});
