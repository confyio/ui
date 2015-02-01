var TooltipMixin = {
  componentDidMount: function () {
    jQuery('.tooltipper').tooltip();
  },
  componentDidUpdate: function () {
    jQuery('.tooltipper').tooltip();
  }
};

export default TooltipMixin;
