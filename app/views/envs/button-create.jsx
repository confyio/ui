/** @jsx React.DOM */

import TooltipMixin from 'confy/helpers/tooltip';

export default React.createClass({
  mixins: [TooltipMixin],
  render: function () {
    var isOwner = (window.user.get('username') == window.org.get('owner'));

    if (this.props.project && isOwner) {
      return (
        <a className="create-env" href={this.props.project.get('link') + '/envs/_create'}>
          <i className="fa fa-fw tooltipper" data-placement="bottom" title="New Stage"></i>
        </a>
      );
    } else {
      return (
        <a className="create-env"></a>
      );
    }
  }
});
