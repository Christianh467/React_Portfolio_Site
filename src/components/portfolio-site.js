import '../styles/portfolio-site.css';

function Portfolio_Site() {
  return (
    <div className="website">
      <div id='header' className='header'>
        <ul className="nav">
          <a className="nav-link" href="#welcome-section">
            <li className="nav-item">Intro</li>
          </a>
          <a className="nav-link" href="#resume-reference">
            <li className="nav-item">Resume</li>
          </a>
          <a className="nav-link" href="#project-section">
            <li className="nav-item">Portfolio</li>
          </a>
          <a className="nav-link" href="#contact-section">
            <li className="nav-item">Contact</li>
          </a>
        </ul>
      </div>
      <div id='welcome-section'>
        <h1>Hey, I am Christian Head</h1>
        <div id='resume-reference'></div>
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
        <div class='contact-list'>
          <li class='profile-link'><div class='img-container'><a id='profile-link' href='https://www.facebook.com/Christianh467' target='_blank'><i class="fa-brands fa-square-facebook"></i><span>Facebook</span></a></div></li>
          <li class='profile-link'><div class='img-container'><a id='profile-link' href='https://github.com/Christianh467' target='_blank'><i class="fa-brands fa-github"></i><span>Github</span></a></div></li>
          <li class='profile-link'><div class='img-container'><a id='profile-link' href=' ' target='_blank'><i class="fa-solid fa-mobile"></i><span id='phone'>(817)-939-7721</span></a></div></li>
          <li class='profile-link'><div class='img-container'><a id='profile-link' href=' ' target='_blank'><i class="fa-solid fa-paper-plane"></i><span id='email'>Christianhead467@gmail.com</span></a></div></li>
        </div>
      </div>
      <div id='footer'>
        <span>This webpage acts as my portfolio and resume. If you still have any further questions or concerns, please feel free to contact me.</span>
      </div>
    </div>
  );
}

export default Portfolio_Site;
