import NavbarView from 'confy/views/navbar';
import PagesLandingView from 'confy/views/pages/landing';

export default function () {
  $('body').attr('class', 'landing');

  React.render(PagesLandingView(), $('#wrap')[0]);
  React.render(NavbarView(), $('.navbar-collapse')[0]);
};
