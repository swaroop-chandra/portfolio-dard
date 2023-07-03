import React from "react";
import bg from "../../public/images/background/bg.jpg";
import {
  TfiMobile,
  TfiEmail,
  TfiEnvelope,
  TfiLocationPin,
  TfiLinkedin,
} from "react-icons/tfi";
import { SiFacebook, SiGithub, SiInstagram } from "react-icons/si";
import { SlDoc } from "react-icons/sl";

function SideBarBottom() {
  function ComposeMail() {
    var recipient = "swaroop@gmail.com";
    var subject = "Hello Swaroop";
    var body = `Dear Swaroop,
    
    
Trying to connect with you!


Best regards,`;

    var mailtoLink =
      "mailto:" +
      recipient +
      "?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    window.location.href = mailtoLink;
  }

  const openDocumentInNewTab = () => {
    const url = "/document/swaroop_resume.pdf";
    window.open(url, "_blank");
  };
  return (
    <div>
      <main>
        <div className=" flex flex-col justify-between items-between">
          <div className="mb-4">
            <div className="flex mb-4">
              <div
                className="icon_box lg:text-5xl lg:w-12 lg:h-12 w-10 h-10 cursor-pointer"
                onClick={ComposeMail}
              >
                <TfiEmail />
              </div>

              <div className="text-start ps-5 text-xs truncate my-auto w-9/12">
                <h2
                  className="text-sm text-stone-500 mb-1 cursor-pointer"
                  onClick={ComposeMail}
                >
                  EMAIL
                </h2>
                <p onClick={ComposeMail} className="cursor-pointer">
                  swaroop.chandra666@gmail.com
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              <div className="icon_box lg:text-5xl lg:w-12 lg:h-12 w-10 h-10">
                <TfiMobile />
              </div>
              <div className="text-start px-5 text-xs truncate my-auto">
                <h2 className="text-sm text-stone-500 mb-1">Mobile</h2>
                <p>+91 - 8660253870</p>
              </div>
            </div>
            <div
              className="flex mb-4 cursor-pointer"
              onClick={openDocumentInNewTab}
            >
              <div className="icon_box lg:text-5xl lg:w-12 lg:h-12 w-10 h-10">
                <SlDoc />
              </div>
              <div
                className="text-start px-5 text-xs truncate my-auto cursor-pointer"
                onClick={openDocumentInNewTab}
              >
                <h2 className="text-sm text-stone-500 mb-1">Resume</h2>
                {/* <p></p> */}
                {/* <Link > */}
                <p>Look at it!</p>
                {/* </Link> */}
              </div>
            </div>
            <div className="flex mb-4">
              <div className="icon_box lg:text-5xl lg:w-12 lg:h-12 cursor-pointer w-10 h-10">
                <a
                  href="https://www.google.com/maps/place/Medical+Chamber/@12.8707728,74.8472166,16.82z/data=!4m14!1m7!3m6!1s0x3ba35b90b06f252d:0x2202cc6a717d3472!2sMedical+Chamber!8m2!3d12.8698592!4d74.8477389!16s%2Fg%2F11h2md1jjf!3m5!1s0x3ba35b90b06f252d:0x2202cc6a717d3472!8m2!3d12.8698592!4d74.8477389!16s%2Fg%2F11h2md1jjf?hl=en&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TfiLocationPin />
                </a>
              </div>

              <div className="text-start px-5 text-xs truncate my-auto">
                <h2 className="text-sm text-stone-500 mb-1">
                  {" "}
                  <a
                    href="https://www.google.com/maps/place/Medical+Chamber/@12.8707728,74.8472166,16.82z/data=!4m14!1m7!3m6!1s0x3ba35b90b06f252d:0x2202cc6a717d3472!2sMedical+Chamber!8m2!3d12.8698592!4d74.8477389!16s%2Fg%2F11h2md1jjf!3m5!1s0x3ba35b90b06f252d:0x2202cc6a717d3472!8m2!3d12.8698592!4d74.8477389!16s%2Fg%2F11h2md1jjf?hl=en&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Location{" "}
                  </a>
                </h2>
                <p>
                  {" "}
                  <a
                    href="https://www.google.com/maps/place/Medical+Chamber/@12.8707728,74.8472166,16.82z/data=!4m14!1m7!3m6!1s0x3ba35b90b06f252d:0x2202cc6a717d3472!2sMedical+Chamber!8m2!3d12.8698592!4d74.8477389!16s%2Fg%2F11h2md1jjf!3m5!1s0x3ba35b90b06f252d:0x2202cc6a717d3472!8m2!3d12.8698592!4d74.8477389!16s%2Fg%2F11h2md1jjf?hl=en&entry=ttu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mangalore - India
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="border_bottom my-5"></div>

          <div className="my-4 flex justify-evenly gap-4">
            {/* <a
              href="https://www.facebook.com/swaroop.chandra.39/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFacebook className="lg:w-7 lg:h-7 w-5 h-5  text-stone-500 hover:text-blue-600 hover:bg-gray-300 rounded-md cursor-pointer" />
            </a> */}
            <a
              href="https://github.com/swaroop-chandra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="lg:w-7 lg:h-7 w-5 h-5  text-stone-500 hover:text-stone-950 hover:bg-gray-300 rounded-md cursor-pointer" />
            </a>
            {/* <a
              href="https://www.instagram.com/swapo_chan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className="lg:w-7 lg:h-7 w-5 h-5  text-stone-500 hover:text-fuchsia-500 hover:bg-gray-300 rounded-md cursor-pointer" />
            </a> */}
            <a
              href="https://www.linkedin.com/in/swaroop-chandra/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TfiLinkedin className="lg:w-7 lg:h-7 w-5 h-5 text-stone-500 hover:text-blue-600 hover:bg-gray-300 rounded-md cursor-pointer p-1" />
            </a>
          </div>
        </div>
      </main>
      <style global jsx>{`
        .icon_box {
          position: relative;
          background: linear-gradient(
            to bottom right,
            hsl(0, 0%, 25%) 0%,
            hsla(0, 0%, 25%, 0) 50%
          );
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 16px;
          color: #ffdb70;
          box-shadow: -4px 8px 24px hsla(0, 0%, 0%, 0.125);
          z-index: 1;
          border-radius: 12px;
        }
        .icon_box::before {
          content: "";
          position: absolute;
          inset: 1px;
          background: #202022;
          border-radius: inherit;
          z-index: -1;
        }
        .icon_box:hover {
          transform: scale(1.1);
          transition: transform 0.5s;
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}

export default SideBarBottom;
