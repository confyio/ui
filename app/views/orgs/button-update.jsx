/** @jsx React.DOM */

import TooltipMixin from 'confy/helpers/tooltip';

export default React.createClass({
  mixins: [TooltipMixin],
  render: function () {
    var isOwner = (window.user.get('username') == this.props.org.get('owner'))
      , userOrg = (window.user.get('username') == this.props.org.get('id'));

    if (this.props.org && isOwner && !userOrg) {
      return (
        <a className="edit-org" href={this.props.org.get('link') + '/_update'}>
          <i className="fa fa-fw fa-gear tooltipper" data-placement="bottom" title="Edit Organization"></i>
        </a>
      );
    } else {
      return (
        <a className="edit-org"></a>
      );
    }
  }
});
