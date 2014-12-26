import PagesLoginView from 'confy/views/pages/login';
import NavbarView from 'confy/views/navbar';

export default function () {
  React.render(NavbarView({type: 'Login'}), $('.navbar-collapse')[0]);
  React.render(PagesLoginView(), $('#wrap')[0]);
};
