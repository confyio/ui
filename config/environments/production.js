// Put your production configuration here.
//
// This is useful when using a separate API
// endpoint in development than in production.
//
// window.ENV.public_key = '123456'

window.ENV.BASE_URL = "https://api.confy.io";
window.ENV.COOKIE_SECURE = true;

if (!window.ENV.ON_PREMISE) {
  window.ENV.SEGMENT_WRITE_KEY = "e02VLQZbOMyVAs97sFNcJnqYJpEXEcUu";
  window.ENV.STRIPE_KEY = "pk_live_nMnx8pAls6obRBrTmyuy6YTd";
}
