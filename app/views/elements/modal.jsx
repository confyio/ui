/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    var footer;

    if (this.props.footer) {
      footer = (
        <div className="modal-footer">
          {this.props.footer}
        </div>
      );
    }

    return (
      <div id={this.props.id} className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{this.props.title}</h4>
            </div>
            <div className="modal-body">
              {this.props.children}
              <div className="cleared"></div>
            </div>
            {footer}
          </div>
        </div>
      </div>
    );
  }
});
