import Landing from 'confy/react/pages/landing';

export default function () {
  $('body').attr('class', 'landing');
  React.renderComponent(Landing(), $('#wrap-row')[0]);
}
