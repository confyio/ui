import LandingView from 'confy/views/pages/landing';

export default function () {
  $('body').attr('class', 'landing');
  React.renderComponent(LandingView(), $('#wrap .row')[0]);
}
