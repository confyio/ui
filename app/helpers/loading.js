import LoadingView from 'confy/views/loading';

export default function () {
  React.renderComponent(LoadingView(), $('#wrap .row')[0]);
};
