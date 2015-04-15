import NavbarView from 'confy/views/elements/navbar';
import PagesTOSView from 'confy/views/pages/tos';

export default function () {
  React.render(NavbarView({landing_suffix: 'tos'}), $('#right-nav')[0]);
  React.render(PagesTOSView(), $('#wrap')[0]);
};
