import Tilt from "react-tilt";
import profilePic from "../public/profile pic.jpeg";

const About = () => {
  return (
    <div className="about">
      <Tilt className="profile_sidebar" options={{ max: 55, scale: 1 }}>
        <img className="profile_image" src={profilePic} alt="Profile" />
      </Tilt>

      <div className="profile_detail">
        <h2 className="profile_title">Adib Hussain</h2>
        <p className="profile_position">Programmer</p>
        <p className="profile_body">
          Hi! I am Adib Hussain. I am a self-taught programmer. I am skilled in
          the modern tools used to create responsive and user friendly websites.
          Every institution, company and business needs a website. It plays a
          key role in publicity by presenting your ideas and a good website is
          guranteed to get your customers attention. With your ideas and my
          skills we will create an unique and eye catching site to represent you
          and your business. Looking forward to working with you.
        </p>
        <div className="button">
          <a href="https://www.fiverr.com/adibhussain">
            <button className="hire_button">Hire</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
