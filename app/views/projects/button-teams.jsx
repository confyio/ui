/** @jsx React.DOM */

import TooltipMixin from 'confy/helpers/tooltip';
import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  mixins: [TooltipMixin],
  render: function () {
    if (this.props.type == 'Project' && window.project) {
      return (
        <div>
          <a href={window.project.get('link') + '/access'}>
            <i className="fa fa-fw fa-users"></i>
            Access
          </a>
        </div>
      );
    } else {
      return <DummyView />;
    }
  }
});
