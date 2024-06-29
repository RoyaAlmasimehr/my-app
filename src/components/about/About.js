import "./About.css";

import aboutImage from "../../assets/images/about.jpg";
function About() {
  return (
    <section id="about">
      <div className="about">
        <div className="about">
          <h2 className="title">About Me</h2>
          <img className="about-img" src={aboutImage} alt="roya" />
          <p className="info">
            I have a calm demeanor coupled with a penchant for teamwork.
            Consistency and dedication define my approach to tasks. I was born
            and raised in Tehran, and it is here that I developed and nurtured
            my character. In my university studies, I delved into the world of
            puppetry, collaborating with prominent figures in the field such as
            Marzieh Boroumand and Behrouz Ghareebpoor. My rapid growth is a
            noteworthy aspect that never fails to astonish those around me. I am
            aware that with heightened self-confidence, I could have achieved
            even greater successes by now. I always feel the need to possess
            comprehensive knowledge about a subject to feel confident in it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
