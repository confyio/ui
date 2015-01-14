/** @jsx React.DOM */

export default React.createClass({
  handleClick: function (e) {
    e.preventDefault();

    if (this.props.model.get('name') == this.refs.name.getDOMNode().value.trim()) {
      this.props.model.destroy({
        wait: true,
        success: function (model, response) {
          var index = model.get('link').lastIndexOf('/')
            , link = model.get('link').slice(0, index);

          delete window[link.slice(link.lastIndexOf('/') + 1, -1)];

          if (link.slice(-4) == 'envs') {
            link = link.slice(0, -5);
          }

          notif({
            msg: 'Successfully deleted the ' + this.props.type
          });

          window.App.navigate(link, {
            trigger: true
          });
        },
        error: function (model, response) {
          notif({
            type: 'error',
            msg: 'Unable to delete the ' + this.props.type + '. Please reload the page and try again.'
          });
        }
      });
    } else {
      $('#delete-confirm').modal('toggle');
    }
  },
  render: function () {
    return (
      <div>
        <div className="panel panel-danger">
          <div className="panel-body">
            <p>
              <h4>Delete this {this.props.type}</h4>
              <button className="btn btn-danger pull-right" data-toggle="modal" data-target="#delete-confirm">Delete</button>
            </p>
            <p>Once you delete a {this.props.type}, there is no going back. Please be certain.</p>
          </div>
        </div>
        <div id="delete-confirm" className="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Are you ABSOLUTELY sure?</h4>
              </div>
              <div className="modal-body">
                <p>This action <strong>CANNOT</strong> be undone. This will permanently delete the <strong>{this.props.model.get('name')}</strong> {this.props.type}.</p>
                {this.props.children}
                <p>Please type in the name of the {this.props.type} to confirm.</p>
                <input ref="name" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" onClick={this.handleClick}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
