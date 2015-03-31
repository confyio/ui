import NavbarView from 'confy/views/elements/navbar';
import PagesPrivacyView from 'confy/views/pages/privacy';

export default function () {
  React.render(NavbarView({landing_suffix: 'privacy'}), $('#right-nav')[0]);
  React.render(PagesPrivacyView(), $('#wrap')[0]);
};
