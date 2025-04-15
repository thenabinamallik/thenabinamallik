import React from 'react'
import { skills } from '../data/Skills';

const container = `bg-[#0B0F19] text-slate-100 pt-6`;
const wrapper = `flex flex-col justify-center items-center py-20 md:py-16 px-10 md:py-10 gap-4`;
const title = 'text-4xl font-bold text-cyan-400'; // Cyan title for contrast
const desc = 'text-xl text-center text-slate-300 max-w-2xl'; // Light subtitle
const skillContainer = 'flex flex-col p-3 gap-6 md:grid grid-cols-2 grid-rows-auto';
const skillWrapper = 'flex flex-col justify-center items-center bg-slate-800 py-4 p-3 rounded-xl border border-lime-800 hover:border-lime-600 duration-500'; // Dark background with lime border
const skillTitle = 'text-amber-600 text-2xl font-semibold text-center my-3'; // Amber title for each skill section
const skillList = 'flex flex-wrap gap-3 justify-center items-center px-3 py-4';
const oneSkillStyle = 'flex items-center flex-wrap p-2 border-2 border-gray-700 rounded-xl gap-2 hover:border-cyan-400'; // Dark border with hover effect
const skillImage = 'h-8 w-auto';
const skillName = 'text-gray-300';


function Skills() {
  return (
    <>
      <div name='skills' className={container}>
        <div className={wrapper}>
          <div className={title}>Skills</div>
          <div className={desc}>Here are some of my skills, on which I have worked </div>
          <div className={skillContainer}>
            {
              skills.map((oneSection) => (
                <div className={skillWrapper} key={oneSection.id}>
                  <div className={skillTitle}>{oneSection.title}</div>
                  <div className={skillList}>
                    {
                      oneSection.skill.map((item) => (
                        <div className={oneSkillStyle} key={item.id}>
                          <img className={skillImage} src={item.image} alt="" />
                          <span className={skillName}>{item.name}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills