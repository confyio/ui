export default function () {
  $.removeCookie('access_token');
  delete window.user;

  this.navigate('#', {
    trigger: true
  });
};
