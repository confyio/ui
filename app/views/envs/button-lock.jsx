/** @jsx React.DOM */

import TooltipMixin from 'confy/helpers/tooltip';
import DummyView from 'confy/views/elements/dummy';

export default React.createClass({
  mixins: [TooltipMixin],
  getInitialState: function () {
    return {icon: 'unlock'};
  },
  clickedUnlock: function (e) {
    e.preventDefault();

    window.editor.setMode('code');
    this.setState({icon: 'lock'});
  },
  clickedLock: function (e) {
    e.preventDefault();

    window.editor.setMode('view');
    window.editor.expandAll();
    this.setState({icon: 'unlock'});
  },
  render: function () {
    if (this.props.type == 'Environment' && window.env && window.env.config) {
      if (this.state.icon == 'unlock') {
        return (
          <a className="btn btn-danger tooltipper" href="#" onClick={this.clickedUnlock} data-placement="top" data-original-title="Unlock credentials to edit them">
            <i className="fa fa-fw fa-unlock"></i>
          </a>
        );
      } else if (this.state.icon == 'lock') {
        return (
          <a className="btn tooltipper" href="#" onClick={this.clickedLock} data-placement="top" data-original-title="Lock credentials and save them">
            <i className="fa fa-fw fa-lock"></i>
          </a>
        );        
      }
    } else {
      return <DummyView />;
    }
  }
});
