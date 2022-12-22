import React from 'react';
class ProjectCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='col-sm-6 col-lg-4'>
              <a className='card p-3' href={this.props.link} target='_blank'>
                <div className='card-body'>
                  <h4 className='card-title'>{this.props.title}</h4>
                </div>
                <img className='card-img-bottom' src={this.props.imageLocation} alt={this.props.title}></img>
              </a>
            </div>
        );
    }
}

export default ProjectCard;