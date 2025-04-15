import React from 'react'
import { experiences } from '../data/Experiences.js'

const container = 'bg-[#0B0F19] text-slate-100 py-20 px-6 md:px-16';
const wrapper = 'flex flex-col justify-center items-center gap-6';
const title = 'text-4xl font-bold text-cyan-400';
const subTitle = 'text-xl text-center text-slate-300 max-w-2xl';
const expContainer = 'flex flex-col gap-7 w-full max-w-4xl';
const expWrapper = 'bg-slate-800 hover:bg-slate-700 transition-all duration-300 shadow-md px-6 py-8 rounded-2xl border border-slate-600 hover:border-cyan-400';
const companyWrapper = 'flex gap-4 items-center';
const companyImgStyle = 'rounded-xl w-20 h-20 object-cover';
const roleNameDateWrapper = 'flex flex-col gap-1';
const roleStyle = 'text-cyan-300 text-2xl font-semibold';
const companyName = 'text-slate-300 text-lg';
const dateStyle = 'text-slate-400 text-sm';
const skillContainer = 'flex flex-col gap-1 mt-3';
const skillTitle = 'text-cyan-400 text-lg font-medium';
const skillWrapper = 'flex flex-wrap gap-2';
const skillStyle = 'bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium';


function Experience() {
  return (
    <div name='experience' className={container}>
      <div className={wrapper}>
        <div className={title}>Experience</div>
        <div className={subTitle}>My Work Experience as a Software Developer</div>
        <div className={expContainer}>
          {
            experiences.map((item, index) => {
              return (
                <div key={index} className={expWrapper}>
                  <div className={companyWrapper}>
                    <div>
                      <img
                        className={companyImgStyle}
                        height={'80px'}
                        width={'80px'}
                        src={item.img}
                        alt="companyLogo"
                      />
                    </div>
                    <div className={roleNameDateWrapper}>
                      <div className={roleStyle}>{item.role}</div>
                      <div className={companyName}> {item.company} </div>
                      <div className={dateStyle}> {item.date} </div>
                    </div>
                  </div>
                  <div> {item.desc} </div>
                  <div className={skillContainer}>
                    <div className={skillTitle}>Skills :- </div>
                    <div className={skillWrapper}>
                      {
                        item.skills.map((skill, index) => {
                          return (
                            <li key={index} className={skillStyle}> {skill} </li>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Experience