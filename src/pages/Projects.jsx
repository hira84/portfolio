import { FaGithub } from "react-icons/fa6";

// Replace the projects inside the myProjects array with your own projects. Right now the array has sample data. You can add as many projects as you want. Each project should be an object with the following
// properties:
// - title: The title of the project
// - description: A description of the project
// - repositoryLink: A link to the GitHub repository of the project
// You can also add more properties if you want to display more information about your projects.
const myProjects = [
  {
    title: 'Weather-app',
    description: 'i made the weather app-using javascript,React',
    repositoryLink: 'https://github.com/hira84/weather-application.git',
  },
  {
    title: 'Food Website, Culinary Creathers',
    description: 'As a group project we, cfeated a website for food lovers,with the balance of healthy eating',
    repositoryLink: 'https://github.com/bmaxinejohnson/Path2Tech-Capstone-Project.git',
  },
  
  {
    title: 'Html project',
    description: 'As a beginner level HTML project',
    repositoryLink: 'https://github.com/hira84/html-project.git',
  },
];
const Projects = () => {
  return (
    <main className="projects-container">
      {myProjects.map((project) => (
        <section key={project.title} className="project-item border border-2 rounded-lg">
          <section className="project-image-container">
            <FaGithub />
          </section>
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-lg">{project.description}</p>
          <p>Check out the link to the project repository <a href={project.repositoryLink} target="_blank">Here</a> </p>

        </section>
      ))}
    </main>
  )
}

export default Projects