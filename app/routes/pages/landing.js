import NavbarView from 'confy/views/navbar';
import PagesLandingView from 'confy/views/pages/landing';

export default function () {
  React.render(NavbarView(), $('.navbar-collapse')[0]);
  React.render(PagesLandingView(), $('#wrap')[0]);
};
