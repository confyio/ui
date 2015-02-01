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
    var config = null, self = this;
    e.preventDefault();

    try {
      config = window.editor.get();
    } catch (e) {
      notif({
        type: 'error',
        msg: 'The credentials document is not a valid JSON'
      });
    } finally {
      if (config) {
        window.env.config.save(config, {
          patch: true,
          wait: true,
          success: function (model, response) {
            window.editor.setMode('view');
            window.editor.set(window.env.config.getJSON());
            window.editor.expandAll();

            self.setState({icon: 'unlock'});

            notif({
              msg: 'Successfully saved your credentials'
            });
          },
          error: function (model, response) {
            notif({
              type: 'error',
              msg: 'Unable to save credentials. Please reload the page and try again'
            });
          }
        })
      }
    }
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
