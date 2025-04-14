import React from "react";
import Button from "./Button";

const ImageClipBox = ({ src, clipPath }) => {
  return (
    <div className={`${clipPath}`}>
      <img src={src} alt="" />
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="bg-black rounded-lg relative py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src={"/img/contact-1.webp"}
            clipPath={"contact-clip-path-1"}
          />
          <ImageClipBox
            src={"/img/contact-2.webp"}
            clipPath={"contact-clip-path-2 lg:translate-y-40 translate-y-60"}
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:right-10 md:left-auto lg:top-20 lg:w-80">
          <ImageClipBox
            src={"/img/swordman-partial.webp"}
            clipPath={"absolute md:scale-125"}
          />
          <ImageClipBox
            src={"/img/swordman.webp"}
            clipPath={"sword-man-clip-path md:scale-125"}
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">join zentry</p>

          <p className="special-font w-full mt-10 font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            Let's b<b>u</b>ild <br /> the new era of <br /> g<b>a</b>ming t
            <b>o</b>gether
          </p>

          <Button
            title={"Contact Us"}
            containerClass={"mt-10 cursor-pointer"}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
