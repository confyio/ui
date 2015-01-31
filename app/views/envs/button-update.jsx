/** @jsx React.DOM */

import TooltipMixin from 'confy/helpers/tooltip';
import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  mixins: [TooltipMixin],
  render: function () {
    var isOwner = (window.user.get('username') == window.org.get('owner'));

    if (this.props.type == 'Environment' && window.env && window.env.get('id') != 'production' && isOwner) {
      return (
        <a className="btn tooltipper" href={window.env.get('link') + '/_update'} data-placement="top" title="Edit Environment">
          <i className="fa fa-fw fa-gear"></i>
        </a>
      );
    } else {
      return <DummyView />;
    }
  }
});
