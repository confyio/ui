/** @jsx React.DOM */

import TooltipMixin from 'confy/helpers/tooltip';
import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  mixins: [TooltipMixin],
  render: function () {
    if (this.props.type == 'Environment' && window.env) {
      return (
        <a className="btn btn-success btn-round tooltipper btn-version" href={window.env.get('link') + '/_versions'} data-placement="top" data-original-title="List all versions">
          <i className="fa fa-fw fa-database"></i>
        </a>
      );
    } else {
      return <DummyView />;
    }
  }
});
