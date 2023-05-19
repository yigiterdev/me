import NextIcon from "@/styles/icon/next";
import ReactIcon from "@/styles/icon/react";
import SassIcon from "@/styles/icon/sass";
import TypeScriptIcon from "@/styles/icon/ts";
import WorkExperience from "../experience/experience";

function About() {
  return (
    <div id="about-section" className="p-10 min-h-screen max-w-2xl m-auto">
      <div className="card mb-5">
        <h1 className="typography--h2 mb-3 text-color--lime">TECH STACK</h1>

        <div className="flex align-middle justify-center gap-5">
          <TypeScriptIcon />

          <ReactIcon />

          <NextIcon />

          <SassIcon />
        </div>
      </div>

      <div className="card mb-5">
        <h1 className="typography--h2 mb-3 text-color--lime">ABOUT</h1>

        <p>
          My name is Ahmet Bugra Yigiter, and I reside in Ankara. I have three years of
          experience as a frontend developer. During this time, I have been actively
          engaged in various projects within the frontend domain. Notably, I have
          contributed to the development of the blockchain-based{" "}
          <a href="https://perawallet.app/" target="_blank">
            Pera Wallet
          </a>
          , the finance project{" "}
          <a href="https://agoracorp.ca/" target="_blank">
            Agora
          </a>
          , as well as the open-source projects associated with Pera Wallet{" "}
          <a href="https://www.npmjs.com/package/@perawallet/connect" target="_blank">
            @perawallet/connect
          </a>
          ,{" "}
          <a href="https://www.npmjs.com/package/@perawallet/onramp" target="_blank">
            @perawallet/onramp
          </a>
          . I have actively participated in the development and worked across diverse
          areas in these projects. For approximately two years, I have been utilizing
          English extensively in both written and verbal communication within my
          professional engagements. Additionally, I enjoy making contributions to
          open-source projects.
        </p>
      </div>

      <WorkExperience />
    </div>
  );
}

export default About;
