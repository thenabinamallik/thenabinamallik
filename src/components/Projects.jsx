import React from 'react';
import { projects } from '../data/Projects.js';

const container = 'bg-[#0B0F19] text-slate-100 py-20 px-6 md:px-16'; // Dark background with light text
const wrapper = 'flex flex-col justify-center items-center gap-6';
const title = 'text-4xl font-bold text-cyan-400'; // Cyan title for contrast
const subTitle = 'text-xl text-center text-slate-300 max-w-2xl'; // Lighter subtitle
const projectContainer = 'flex flex-wrap gap-12 md:grid grid-cols-2 lg:grid-cols-3 grid-rows-auto';
const projectWrapper = 'bg-slate-800 hover:bg-slate-700 transition-all duration-300 shadow-md px-6 py-8 rounded-2xl border border-slate-600 hover:border-cyan-400'; // Dark project cards with hover effect
const imgWrapper = 'relative bg-gradient-to-l from-amber-600 to-lime-600 rounded p-px duration-500'; // Gradient effect for project images
const projectImgStyle = 'rounded relative';
const overlayStyle = 'hidden absolute inset-0 md:flex gap-6 justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 duration-500'; // Overlay for buttons on image hover
const btnStyle = 'mx-4 flex-1 bg-cyan-600 rounded-lg text-white py-3 px-3 md:px-5 hover:bg-cyan-500'; // Cyan button style
const nameDateWrapper = 'flex flex-col gap-1';
const nameStyle = 'text-amber-600 text-2xl font-semibold'; // Amber project title
const dateStyle = 'text-slate-400 text-sm'; // Lighter date color
const skillWrapper = 'flex flex-wrap gap-2 mt-3';
const skillStyle = 'bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium'; // Cyan skill tags



function Projects() {
  return (
    <div name='projects' className={container}>
      <div className={wrapper}>
        <div className={title}>Projects</div>
        <div className={subTitle}>Here are My Recent Projects defining Experience</div>
        <div className={projectContainer}>
          {projects.map((item, index) => (
            <div className={projectWrapper} key={index}>
              <div className={imgWrapper}>
                <img className={projectImgStyle} src={item.img} alt="" />
                <div className={overlayStyle}>

                  <button className={btnStyle}>
                    <a href={item.live} target='_blank' rel='noopener noreferrer'>Live</a>
                  </button>
                  <button className={btnStyle}>
                    <a href={item.github} target='_blank' rel='noopener noreferrer' className='text-nowrap'>Github </a>
                  </button>
                </div>

              </div>
              <div className={skillWrapper}>
                {item.skills.map((skill, index) => (
                  <div className={skillStyle} key={index}>{skill}</div>
                ))}
              </div>
              <div className={nameDateWrapper}>
                <div className={nameStyle}>{item.title}</div>
                <div className={dateStyle}>{item.date}</div>
              </div>
              <div>{item.desc}</div>
              <div className='flex items-center justify-between md:hidden'>

                <button className={btnStyle}>
                  <a href={item.live} target='_blank' rel='noopener noreferrer'>Live</a>
                </button>
                <button className={btnStyle}>
                  <a href={item.github} target='_blank' rel='noopener noreferrer' className='text-nowrap'>Github </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
