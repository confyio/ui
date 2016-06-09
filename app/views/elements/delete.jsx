/** @jsx React.DOM */

import ModalView from 'confy/views/elements/modal';
import Alert from 'confy/helpers/alert';

export default React.createClass({
  componentDidMount: function () {
    jQuery('#delete-wrap').show();
  },
  componentDidUpdate: function () {
    jQuery('#delete-wrap').show();

    this.refs.name.getDOMNode().value = '';
    this.refs.name.getDOMNode().className = 'form-control';
  },
  handleChange: function (e) {
    var name = this.refs.name.getDOMNode().value.trim();

    if (name.toLowerCase() == this.props.model.get('name').toLowerCase()) {
      this.refs.name.getDOMNode().className = 'form-control correct';
    } else {
      this.refs.name.getDOMNode().className = 'form-control';
    }
  },
  handleClick: function (e) {
    var self = this;
    e.preventDefault();

    if (this.props.model.get('name') == this.refs.name.getDOMNode().value.trim()) {
      this.props.model.destroy({
        wait: true,
        success: function (model, response) {
          var index = model.get('link').lastIndexOf('/')
            , link = model.get('link').slice(0, index);

          if (link == '#orgs') {
            delete window.org;
          } else {
            delete window[link.slice(link.lastIndexOf('/') + 1, -1)];
          }

          if (link.slice(-4) == 'envs') {
            link = link.slice(0, -5);
          }

          Alert('Successfully deleted the ' + self.props.type, null, true);

          window.App.navigate(link, {
            trigger: true
          });
        },
        error: function (model, response) {
          Alert('Unable to delete the ' + self.props.type + '. Please reload the page and try again.');
        }
      });
    } else {
      $('#delete-confirm').modal('toggle');
    }
  },
  render: function () {
    var pullRight = '';

    if (this.props.type == 'organization' || this.props.type == 'environment') {
      pullRight = ' pull-right';
    }

    return (
      <div>
        <div className="trash-bin"></div>
        <div className={'delete-panel' + pullRight}>
          <h3>Delete {this.props.type}</h3>
          <p>Once you delete a {this.props.type}, there is no going back.</p>
          <button className="btn btn-danger" data-toggle="modal" data-target="#delete-confirm">Delete</button>
        </div>
        <div className="cleared"></div>
        <ModalView id="delete-confirm" title="Are you sure?">
          <p>This action <strong>CANNOT</strong> be undone. This will permanently delete the <strong>{this.props.model.get('name')}</strong> {this.props.type}.</p>
          {this.props.children}
          <p className="modal-second-warn">Please type in the name of the {this.props.type} to confirm.</p>
          <input className="form-control" onChange={this.handleChange} ref="name" placeholder={'Enter ' + this.props.type + ' name'} />
          <button type="button" className="btn btn-danger" onClick={this.handleClick}>Delete</button>
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </ModalView>
      </div>
    );
  }
});
