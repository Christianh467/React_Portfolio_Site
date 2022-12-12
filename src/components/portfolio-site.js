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
        <div>
          <div id='project-grid' className='row gy-4 gx-5'>
            <div className='col-sm-6 col-lg-4'>
              <a className='card p-3' href='https://christianh467.github.io/React_Pomodoro_Clock/' target='_blank'>
                <div className='card-body'>
                  <h4 className='card-title'>Pomodoro Clock</h4>
                </div>
                <img className='card-img-bottom' src='PortfolioSiteImgs/pomodoro_clock.png' alt='Pomodoro_Clock_Project'></img>
              </a>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <a className='card p-3' href='https://christianh467.github.io/React_Calculator/' target='_blank'>
                <div className='card-body'>
                  <h4 className='card-title'>Calculator</h4>
                </div>
                <img className='card-img-bottom' src='PortfolioSiteImgs/calculator.png' alt='Calculator_Project'></img>
              </a>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <a className='card p-3' href='https://christianh467.github.io/React_Drumpad/' target='_blank'>
                <div className='card-body'>
                  <h4 className='card-title'>Drumpad</h4>
                </div>
                <img className='card-img-bottom' src='PortfolioSiteImgs/drumpad.png' alt='Drumpad_Project'></img>
              </a>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <a className='card p-3' href='https://christianh467.github.io/React_Markdown_Previewer/' target='_blank'>
                <div className='card-body'>
                  <h4 className='card-title'>Markdown Previewer</h4>
                </div>
                <img className='card-img-bottom' src='PortfolioSiteImgs/markdown_reviewer.png' alt='Markdown_Previewer_Project'></img>
              </a>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <a className='card p-3' href='https://christianh467.github.io/React_Quote_Generator/' target='_blank'>
                <div className='card-body'>
                  <h4 className='card-title'>Quote Generator</h4>
                </div>
                <img className='card-img-bottom' src='PortfolioSiteImgs/quote_generator.png' alt='Quote_Generator_Project'></img>
              </a>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <a className='card p-3' href='https://christianh467.github.io/AnimationFerrisWheel/' target='_blank'>
                <div className='card-body'>
                  <h4 className='card-title'>Ferris Wheel Animation</h4>
                </div>
                <img className='card-img-bottom' src='PortfolioSiteImgs/AnimationFerrisWheel.jpg' alt='Animated_Ferris_Wheel'></img>
              </a>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <a className='card p-3' href='https://christianh467.github.io/BalanceSheet/' target='_blank'>
                <div className='card-body'>
                  <h4 className='card-title'>Balance Sheet Template</h4>
                </div>
                <img className='card-img-bottom' src='PortfolioSiteImgs/BalanceSheetTemplate.jpg' alt='Balance_Sheet_Template'></img>
              </a>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <a className='card p-3' href='https://christianh467.github.io/CafeMenu/' target='_blank'>
                <div className='card-body'>
                  <h4 className='card-title'>Cafe Menu Template</h4>
                </div>
                <img className='card-img-bottom' src='PortfolioSiteImgs/CafeMenuTemplate.jpg' alt='Cafe_Menu_Template'></img>
              </a>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <a className='card p-3' href='https://christianh467.github.io/CitySkyline/' target='_blank'>
                <div className='card-body'>
                  <h4 className='card-title'>Responsive City Skyline</h4>
                </div>
                <img className='card-img-bottom' src='PortfolioSiteImgs/CitySkylinesScenery.jpg' alt='Responsive_City_Skyline'></img>
              </a>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <a className='card p-3' href='https://christianh467.github.io/NutritionLabel/' target='_blank'>
                <div className='card-body'>
                  <h4 className='card-title'>Nutrition Label Template</h4>
                </div>
                <img className='card-img-bottom' src='PortfolioSiteImgs/NutritionLabelTemplate.jpg' alt='Nutritional_Label_Template'></img>
              </a>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <a className='card p-3' href='https://christianh467.github.io/PenguinTransforms/' target='_blank'>
                <div className='card-body'>
                  <h4 className='card-title'>Penguin Transforms</h4>
                </div>
                <img className='card-img-bottom' src='PortfolioSiteImgs/PenguinTransforms.jpg' alt='Penguin_Waving'></img>
              </a>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <a className='card p-3' href='https://christianh467.github.io/ProductLandingPage/' target='_blank'>
                <div className='card-body'>
                  <h4 className='card-title'>Product Landing Page</h4>
                </div>
                <img className='card-img-bottom' src='PortfolioSiteImgs/ProductLandingPage.jpg' alt='Product_Landing_Page_Template'></img>
              </a>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <a className='card p-3' href='https://christianh467.github.io/Survey_Form/' target='_blank'>
                <div className='card-body'>
                  <h4 className='card-title'>Survey Form Template</h4>
                </div>
                <img className='card-img-bottom' src='PortfolioSiteImgs/SurveyFormTemplate.jpg' alt='Survey_Form_Template'></img>
              </a>
            </div>
            <div className='col-sm-6 col-lg-4'>
              <a className='card p-3' href='https://christianh467.github.io/TributePage/' target='_blank'>
                <div className='card-body'>
                  <h4 className='card-title'>Tribute Page</h4>
                </div>
                <img className='card-img-bottom' src='PortfolioSiteImgs/tribute-page-main-image.jpg' alt='Tribute_Page_Template'></img>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id='contact-section'>
        <h1>Let's Work Together...</h1>
        <p>the future is waiting</p>
        <div class='contact-list'>
          <li class='profile-link'><div class='img-container'><a id='profile-link' href='https://www.facebook.com/Christianh467' target='_blank'><i class="fa-brands fa-square-facebook"></i><span>Facebook</span></a></div></li>
          <li class='profile-link'><div class='img-container'><a id='profile-link' href='https://github.com/Christianh467' target='_blank'><i class="fa-brands fa-github"></i><span>Github</span></a></div></li>
          <li class='profile-link'><div class='img-container'><a id='profile-link' href=' ' target='_blank'><i class="fa-solid fa-mobile"></i><span id='phone'>(817)-939-7721</span></a></div></li>
          <li class='profile-link'><div class='img-container'><a id='profile-link' href='mailto:christianhead467@gmail.com' target='_blank'><i class="fa-solid fa-paper-plane"></i><span id='email'>Christianhead467@gmail.com</span></a></div></li>
        </div>
      </div>
    </div>
  );
}

export default Portfolio_Site;
