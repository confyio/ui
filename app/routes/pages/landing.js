import Landing from 'confy/views/pages/landing';

export default function () {
  $('body').attr('class', 'landing');
  React.renderComponent(Landing(), $('#wrap .row')[0]);
}
