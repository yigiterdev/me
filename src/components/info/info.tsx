import "./info.css";

import ArrowDownIcon from "@/styles/icon/arrowdown";
import GithubIcon from "@/styles/icon/github";
import LinkedinIcon from "@/styles/icon/linkedin";
import MailIcon from "@/styles/icon/mail";
import TwitterIcon from "@/styles/icon/twitter";
import Image from "next/image";
import Link from "next/link";

function Info() {
  return (
    <div className="min-h-screen pt-24 pb-10 flex flex-col items-center justify-between">
      <div>
        <Image
          className="mx-auto mb-5 rounded-full"
          src={"/profile-img.jpg"}
          alt="Profile"
          width="200"
          height="200"
        />

        <h1 className="typography--display text-center mx-auto w-fit mb-2">
          AHMET BUGRA <span className="text-color--lime">YIGITER</span>
        </h1>

        <h2 className="typography--h1 text-color--secondary text-center mx-auto w-fit mb-5">
          FRONTEND DEVELOPER
        </h2>

        <div className="flex align-middle justify-center gap-5">
          <a href="https://github.com/yigiterdev/" target="_blank">
            <GithubIcon />
          </a>

          <a href="https://www.linkedin.com/in/yigiterbugra/" target="_blank">
            <LinkedinIcon />
          </a>

          <a href="https://twitter.com/yigiterdev" target="_blank">
            <TwitterIcon />
          </a>

          <a href="mailto:yigiterahmetbugra@gmail.com">
            <MailIcon />
          </a>
        </div>
      </div>

      <Link href="#about-section">
        <ArrowDownIcon />
      </Link>
    </div>
  );
}

export default Info;
