import AlertView from 'confy/views/elements/alert';

export default function (message, role, wait) {
  role = role || 'success';
  wait = wait || false;
  window.flashes = window.flashes || '';

  var view = AlertView({message: message, role: role});

  if (wait) {
    window.flashes += React.renderToString(view);
  } else {
    React.render(view, $('#alerts')[0]);
  }
};
