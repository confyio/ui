/** @jsx React.DOM */

import TooltipMixin from 'confy/helpers/tooltip';
import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  mixins: [TooltipMixin],
  handleClick: function () {
    window.App.navigate(window.project.get('link') + '/envs/_create', {
      trigger: true
    });
  },
  render: function () {
    var isOwner = (window.user.get('username') == window.org.get('owner'));

    if (window.project && isOwner) {
      return (
        <i className="fa fa-fw fa-plus tooltipper" onClick={this.handleClick} data-placement="bottom" title="New Environment"></i>
      );
    } else {
      return <DummyView />;
    }
  }
});
