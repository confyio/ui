import ProjectsListRoute from 'confy/routes/projects/list';
import ProjectsCreateRoute from 'confy/routes/projects/create';
import ProjectsViewRoute from 'confy/routes/projects/view';
import ProjectsUpdateRoute from 'confy/routes/projects/update';
import ProjectsAccessRoute from 'confy/routes/projects/access';

export default {
  list: ProjectsListRoute,
  create: ProjectsCreateRoute,
  view: ProjectsViewRoute,
  update: ProjectsUpdateRoute,
  access: ProjectsAccessRoute
};
