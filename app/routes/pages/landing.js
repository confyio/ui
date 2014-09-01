import NavbarView from 'confy/views/navbar';
import PagesLandingView from 'confy/views/pages/landing';

export default function () {
  $('body').attr('class', 'landing');

  React.renderComponent(PagesLandingView(), $('#wrap .row')[0]);
  React.renderComponent(NavbarView(), $('.navbar-collapse')[0]);
};
