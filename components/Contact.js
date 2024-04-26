import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faInstagram,
 faTwitter,
 faFacebook,
 faLinkedin,
 faGithub,
} from "@fortawesome/free-brands-svg-icons";

const accounts = [
 {
  name: "Instagram",
  icon: faInstagram,
  url: "https://www.instagram.com/jpassetti",
 },
 {
  name: "Twitter",
  icon: faTwitter,
  url: "https://twitter.com/jpassetti",
 },
 {
  name: "Facebook",
  icon: faFacebook,
  url: "https://www.facebook.com/jpassetti",
 },
 {
  name: "LinkedIn",
  icon: faLinkedin,
  url: "https://www.linkedin.com/in/jpassetti",
 },
 {
  name: "GitHub",
  icon: faGithub,
  url: "https://www.github.com/jpassetti",
 },
];

const Contact = () => {
 return (
  <div>
   <h1>Contact</h1>
   {accounts.map((account, index) => {
    return (
     <a href={account.url} target="_blank">
      <FontAwesomeIcon icon={account.icon} />
     </a>
    );
   })}

   <p>This is the content of the Contact page</p>
   <p>
    All sorts of other juicy regular old fashioned HTML content from your IST263
    project.
   </p>
  </div>
 );
};
export default Contact;
