import PagesLandingRoute from 'confy/routes/pages/landing';
import PagesLoginRoute from 'confy/routes/pages/login';
import PagesLogoutRoute from 'confy/routes/pages/logout';
import PagesRegisterRoute from 'confy/routes/pages/register';
import PagesVerifyRoute from 'confy/routes/pages/verify';
import PagesHowRoute from 'confy/routes/pages/how';
import PagesPricingRoute from 'confy/routes/pages/pricing';
import PagesPrivacyRoute from 'confy/routes/pages/privacy';
import PagesTOSRoute from 'confy/routes/pages/tos';

export default {
  landing: PagesLandingRoute,
  login: PagesLoginRoute,
  logout: PagesLogoutRoute,
  register: PagesRegisterRoute,
  verify: PagesVerifyRoute,
  how: PagesHowRoute,
  pricing: PagesPricingRoute,
  privacy: PagesPrivacyRoute,
  tos: PagesTOSRoute
};
