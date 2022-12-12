import '../styles/portfolio-site.css';

function Portfolio_Site() {
  return (
    <div className="website">
      <div id='header' className='header'>
        <ul className="nav">
          <a className="nav-link" href="#">
            <li className="nav-item">Intro</li>
          </a>
          <a className="nav-link" href="#">
            <li className="nav-item">Resume</li>
          </a>
          <a className="nav-link" href="#">
            <li className="nav-item">Portfolio</li>
          </a>
          <a className="nav-link" href="#">
            <li className="nav-item">Contact</li>
          </a>
        </ul>
      </div>
      <div id='welcome-section'>
        <h1>Hey, I am Christian Head</h1>
        <h3>front-end engineer, future full-stack</h3>
      </div>
      <div id='resume-section'>
        <a href="ChristianHeadResume.pdf" target="_blank" type="doc/pdf">
          <i class='fa-solid fa-file'></i>
          <span>Christian Head's Resume</span>
        </a>
      </div>
      <div id='project-section'>
        <h2>These are some of my projects</h2>
      </div>
      <div id='contact-section'>
        <h1>Lets Work Together...</h1>
        <p>the future is waiting</p>
        <div id='contact-nav'>

        </div>
      </div>
      <div id='footer'>
        <span>This webpage acts as my portfolio and resume. If you still have any further questions or concerns, please feel free to contact me.</span>
      </div>
    </div>
  );
}

export default Portfolio_Site;
