import NavbarView from 'confy/views/elements/navbar';
import PagesLandingView from 'confy/views/pages/landing';

export default function () {
  React.render(NavbarView({landing_suffix: 'pricing'}), $('#right-nav')[0]);
  React.render(PagesLandingView(), $('#wrap')[0]);
};
