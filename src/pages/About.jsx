import { NavLink } from 'react-router-dom';
import picture from '../assets/pic.jpg';

// Replace these variables with your information
const firstName = 'Hira Khan';
const jobTitle = 'Cardiac Technologist';
const company = 'Memorial Sloan Kettering Cancer Center';
const mainDuty = 'DIagnostic Cardilogy,Customer Services,Quality Assurance, Data Analyzing, Project Management';
const jobLocation = 'New York';
const briefJobDescription = 'Customer Services,Training and development,Regulatory compliance,Data analysis';
const careerObjective = 'Eager to leverage expertise in data analysis, project management, and technology integration gained from healthcare settings. Seeking to transition into an IT role where I can apply my technical acumen, problem-solving skills, and passion for innovation to contribute effectively to IT projects and initiatives. ';
const personalLife = 'Balancing the roles of a dedicated professional and nurturing mother of girl, and boy, I thrive in seamlessly integrating the demands of both worlds.i like to travel,i am food enthusiastic person,,';

const About = () => {
  return (
    <main className="about-container">
      <section className='about-content-container'>
        <section className='image-container'>
          {/* Replace this placeholder image and alt tag with a professional headshot */}
          <img className='headshot' src={picture} alt="image" />
        </section>
        <section className='description-container'>
          <h2 className='text-xl font-medium'>I&apos;m {firstName}, a {jobTitle} working for, {company} on {mainDuty} located in, {jobLocation}</h2>
          <p>{briefJobDescription}</p>
          <p>{careerObjective}</p>
          <p>{personalLife}</p>
          <p className='mb-4'>If you are interested in my work, reach out to me!</p>
          <NavLink to="/contact" className="contact-me-btn">Contact Me</NavLink>
        </section>
      </section>
    </main>
  )
}
 export default About;
 

 