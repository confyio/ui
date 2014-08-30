import PagesLandingView from 'confy/views/pages/landing';
import PagesNavbarView from 'confy/views/pages/navbar';

export default function () {
  $('body').attr('class', 'landing');

  React.renderComponent(PagesLandingView(), $('#wrap .row')[0]);
  React.renderComponent(PagesNavbarView(), $('.navbar-collapse')[0]);
};
