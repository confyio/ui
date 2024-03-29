import EnvsCreateRoute from 'confy/routes/envs/create';
import EnvsViewRoute from 'confy/routes/envs/view';
import EnvsUpdateRoute from 'confy/routes/envs/update';
import EnvsVersionsRoute from 'confy/routes/envs/versions';

export default {
  create: EnvsCreateRoute,
  view: EnvsViewRoute,
  update: EnvsUpdateRoute,
  versions: EnvsVersionsRoute
};
