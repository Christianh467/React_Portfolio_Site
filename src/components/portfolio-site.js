import React from 'react';
import ProjectCard from './project-card';
import '../styles/portfolio-site.css';

class Portfolio_Site extends React.Component {
  constructor(props){
    super(props);
  }
  render()
  {
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
            <i className='fa-solid fa-file'></i>
            <span>Christian Head's Resume</span>
          </a>
        </div>
        <div id='project-section'>
          <h2>These are some of my projects</h2>
          <div id='project-grid' className='row gy-4 gx-5'>
            <ProjectCard link='https://christianh467.github.io/React_Pomodoro_Clock/' title='React Pomodoro Clock' imageLocation='PortfolioSiteImgs/pomodoro_clock.png'/>
            <ProjectCard link='https://christianh467.github.io/React_Calculator/' title='React Calculator' imageLocation='PortfolioSiteImgs/calculator.png'/>
            <ProjectCard link='https://christianh467.github.io/React_Drumpad/' title='React Drumpad' imageLocation='PortfolioSiteImgs/drumpad.png'/>
            <ProjectCard link='https://christianh467.github.io/React_Markdown_Previewer/' title='React Markdown Previewer' imageLocation='PortfolioSiteImgs/markdown_reviewer.png'/>
            <ProjectCard link='https://christianh467.github.io/React_Quote_Generator/' title='React Quote Generator' imageLocation='PortfolioSiteImgs/quote_generator.png'/>
            <ProjectCard link='https://christianh467.github.io/AnimationFerrisWheel/' title='Ferris Wheel Animation' imageLocation='PortfolioSiteImgs/AnimationFerrisWheel.jpg'/>
            <ProjectCard link='https://christianh467.github.io/BalanceSheet/' title='Balance Sheet Template' imageLocation='PortfolioSiteImgs/BalanceSheetTemplate.jpg'/>
            <ProjectCard link='https://christianh467.github.io/CafeMenu/' title='Cafe Menu Template' imageLocation='PortfolioSiteImgs/CafeMenuTemplate.jpg'/>
            <ProjectCard link='https://christianh467.github.io/CitySkyline/' title='Responsive City Skyline' imageLocation='PortfolioSiteImgs/CitySkylinesScenery.jpg'/>
            <ProjectCard link='https://christianh467.github.io/NutritionLabel/' title='Nutrition Label' imageLocation='PortfolioSiteImgs/NutritionLabelTemplate.jpg'/>
            <ProjectCard link='https://christianh467.github.io/PenguinTransforms/' title='Penguin Animation Transforms' imageLocation='PortfolioSiteImgs/PenguinTransforms.jpg'/>
            <ProjectCard link='https://christianh467.github.io/ProductLandingPage/' title='Product Landing Page' imageLocation='PortfolioSiteImgs/ProductLandingPage.jpg'/>
            <ProjectCard link='https://christianh467.github.io/Survey_Form/' title='Survey Form Template' imageLocation='PortfolioSiteImgs/SurveyFormTemplate.jpg'/>
            <ProjectCard link='https://christianh467.github.io/TributePage/' title='Tribute Page Template' imageLocation='PortfolioSiteImgs/tribute-page-main-image.jpg'/>
            <ProjectCard link='https://github.com/Christianh467/JavaScript_Portfolio' title='JavaScript Algorithms' imageLocation='PortfolioSiteImgs/javascript-logo.png'/>
          </div>
        </div>
        <div id='contact-section'>
          <h1>Let's Work Together...</h1>
          <p>the future is waiting</p>
          <div className='contact-list'>
            <li className='profile-link'><div class='img-container'><a id='profile-link' href='https://www.facebook.com/Christianh467' target='_blank'><i className="fa-brands fa-square-facebook"></i><span>Facebook</span></a></div></li>
            <li className='profile-link'><div class='img-container'><a id='profile-link' href='https://github.com/Christianh467' target='_blank'><i className="fa-brands fa-github"></i><span>Github</span></a></div></li>
            <li className='profile-link'><div class='img-container'><i className="fa-solid fa-mobile"></i><span id='phone'>(817)-939-7721</span></div></li>
            <li className='profile-link'><div class='img-container'><a id='profile-link' href='mailto:christianhead467@gmail.com' target='_blank'><i className="fa-solid fa-paper-plane"></i><span id='email'>Christianhead467@gmail.com</span></a></div></li>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio_Site;
