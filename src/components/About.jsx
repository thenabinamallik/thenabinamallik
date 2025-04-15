import React from "react";
import Nabina from "../assets/mine.jpg";
import { ReactTyped } from "react-typed";
import { FaFileDownload } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Bio } from "../data/Bio";

const container =
  "bg-[#0B0F19] text-slate-100 text-lg p-8 md:px-24 md:py-20 flex flex-col md:flex-row-reverse gap-10 justify-center items-center";
const imgWrapper = "flex-1 flex justify-center items-center";
const imgStyle =
  "rounded-full border-4 border-cyan-500 hover:border-cyan-400 transition-all duration-500 shadow-lg";
const introAboutWrapper = "flex flex-1 flex-col gap-8";
const introWrapper = "flex flex-col gap-2";
const hiStyle = "text-amber-500 text-4xl font-bold tracking-wide";
const nameStyle = "text-cyan-400 text-3xl font-extrabold";
const typedWrapper = "text-xl font-medium mt-2 flex items-center gap-2";
const aStyle = "font-bold";
const typedStyle =
  "text-base text-cyan-900 px-4 py-1 rounded-full bg-cyan-100 shadow";
const btnStyle =
  "flex-1 bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white font-semibold rounded-lg p-3 px-6 shadow-md";
const linkStyle = "flex justify-center items-center gap-2";

function About() {
  return (
    <div name="about" className={container}>
      <div className={imgWrapper}>
        <img
          className={imgStyle}
          src={Nabina}
          alt={"myImage"}
          height={"300px"}
          width={"300px"}
        />
      </div>
      <div className={introAboutWrapper}>
        <div className={introWrapper}>
          <h1 className={hiStyle}> Hi, I am</h1>
          <h1 className={nameStyle}>Nabina Mallik</h1>
          <div className={typedWrapper}>
            <span className={aStyle}>a</span>
            <ReactTyped
              className={typedStyle}
              strings={Bio.roles}
              startDelay={100}
              typeSpeed={50}
              backDelay={2000}
              backSpeed={30}
              loop={true}
            />
          </div>
        </div>
        <div> {Bio.description}</div>

        <div className="flex flex-wrap gap-4 lg:gap-8 xl:gap-16">
          <button className={btnStyle}>
            <a className={linkStyle} href={Bio.resume} target="_blank">
              Resume <FaFileDownload />{" "}
            </a>
          </button>
          <button className={btnStyle}>
            <a className={linkStyle} href={Bio.linkedin} target="_blank">
              LinkedIn <FaLinkedin />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;