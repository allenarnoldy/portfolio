import myImage from "../assets/images/allenarnoldy.jpg";

export default function AboutMe() {
  return (
    <main className="about-me-container">
      <h2 className="about-me-container">About Me</h2>
      <div className="about-me-content">
        <div className="photo-container">
          <img src={myImage} alt="Allen Arnoldy" className="profile-photo" />
        </div>
        <div className="about-me-container">
          <div className="about-me-card">
            <p className="about-me-text">
              Hi, I’m Allen Arnoldy, a passionate QA professional transitioning
              into software development. Currently, I'm expanding my coding
              skills through a bootcamp, leveraging my background in quality
              assurance to build efficient, reliable applications. When I’m not
              diving into code, you can find me on the golf course, hunting in
              the great outdoors, or cheering on my favorite team, the Minnesota
              Vikings. With a knack for problem-solving and an eye for detail,
              I’m excited to contribute to innovative SaaS projects.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
