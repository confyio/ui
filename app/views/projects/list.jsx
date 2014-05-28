/** @jsx React.DOM */

import Sidebar from 'confy/views/sidebar';

export default React.createClass({
  render: function () {
    return (
      <Sidebar type="Projects">
        {window.projects.map(function (project) {
          return (
            <li key={project.get('id')}>
              <a href={project.get('link')}>
                {project.get('name')}
              </a>
            </li>
          );
        })}
        <li>
          <a href="#">MainApp</a>
          <ul className="">
            <li><a href="">Staging</a></li>
            <li className="active"><a href="">Production</a></li>
          </ul>
        </li>
      </Sidebar>
    );
  }
});
