import { FaDownload } from "react-icons/fa";
import resume from "../components/Hira-Resume.pdf"

const DownloadResume = () => {
  return (
    // Replace the href with the a link to your resume and replace the download attribute with your name
    <a href={resume} download="Hira-Resume.pdf" className="flex items-center">
      <p className="mr-2">Download Resume</p>
      <FaDownload />
    </a>
  )
}

export default DownloadResume
