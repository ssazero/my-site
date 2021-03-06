import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faLaptop } from '@fortawesome/free-solid-svg-icons';

import withTranslation from '../hoc/withTranslation';
import Effect from 'react-reveal/Fade';
import { Dictionary } from './../languageContext';

interface Props {
   title: string,
   description: string,
   mobile?: boolean,
   live?: string,
   github?: string,
   source: string,
   dictionary: Dictionary
}

const Project = (props: Props) => {
   const { title, description, mobile, live, github, source, dictionary } = props;

   const renderGithubButton = () => {
      if (github) {
         return (
            <a
               target="_blank"
               rel="noopener noreferrer"
               className="projects__item-link projects__item-link--left"
               href={github}
            >
               GitHub
            </a>
         );
      }
      return (
         <span
            className="projects__item-link projects__item-link--left custom-label-container"
            style={{ textDecoration: 'line-through', color: '#bbb' }}
         >
            GitHub
            <div className="custom-label custom-label--project custom-label--project--1">
               {dictionary.portfolio.project.noGithubLink}
            </div>
         </span>
      );
   }

   const renderPreviewButton = () => {
      if (live) {
         return (
            <a
               target="_blank"
               rel="noopener noreferrer"
               className="projects__item-link projects__item-link--right"
               href={live}
            >
               {mobile ? dictionary.portfolio.project.install : dictionary.portfolio.project.preview}
            </a>
         );
      }
      return (
         <span
            className="projects__item-link projects__item-link--right custom-label-container"
            style={{ textDecoration: 'line-through', color: '#bbb' }}
         >
            {mobile ? dictionary.portfolio.project.install : dictionary.portfolio.project.preview}
            <div className="custom-label custom-label--project custom-label--project--2">
               {dictionary.portfolio.project.noLiveLink}
            </div>
         </span>
      );

   }

   return (
      <Effect>
         <div className="projects__item">
            <div className="projects__item-drawer">
               <h4 className="projects__item-title">{title}</h4>
               <p className="projects__item-description">{description}</p>
               <FontAwesomeIcon
                  icon={mobile ? faMobileAlt : faLaptop}
                  className="projects__item-icon"
                  title={mobile ? 'Mobile project' : 'Web project'}
               />
            </div>
            {renderGithubButton()}
            {renderPreviewButton()}
            <div className="projects__item-image-container">
               <img
                  draggable="false"
                  className="projects__item-image"
                  src={source}
                  alt={'Project ' + title}
               />
            </div>
         </div>
      </Effect>
   );
};

export default withTranslation(Project);
