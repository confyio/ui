/** @jsx React.DOM */

export default React.createClass({
  render: function () {
    return (
      <div className={'alert alert-' + this.props.role} role="alert">
        <span dangerouslySetInnerHTML={{ __html: this.props.message }}></span>
        <button type="button" className="close" data-dismiss="alert">
          <i className="fa fa-fw"></i>
        </button>
      </div>
    );
  }
});
