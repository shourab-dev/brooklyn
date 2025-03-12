import React from "react";
import {
  FaFacebookF,
  FaDribbble,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Heading from "./utils/Heading";
import Detail from "./utils/Detail";
import PrimaryButton from "./utils/PrimaryButton";
import { MdOutlineFileDownload } from "react-icons/md";
const Profile = () => {
  const socialLinks = [
    {
      id: 1,
      url: "#",
      icon: <FaFacebookF />,
    },
    {
      id: 2,
      url: "#",
      icon: <FaDribbble />,
    },
    {
      id: 3,
      url: "#",
      icon: <FaInstagram />,
    },
    {
      id: 4,
      url: "#",
      icon: <FaLinkedinIn />,
    },
    {
      id: 5,
      url: "#",
      icon: <FaBehance />,
    },
  ];

  return (
    <section
      id="profileArea"
      className="mt-[50px] lg:mt-[212px] relative z-10  "
    >
      <div className="container">
        <div className="shadow-custom lg:p-[112px] rounded-2xl bg-white grid gap-[70px] lg:gap-[136px] lg:grid-cols-2 items-center">
          <div className="profileImage relative">
            <img src="/public/images/profile.png" className="w-full" alt="" />

            {/* Social */}
            <div className="flex w-full max-w-[264px] shadow-social justify-center p-3 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-sm">
              {socialLinks.map((link) => (
                <a
                  className="w-12 h-12 text-lg hover:text-white hover:bg-primary-500 transition-colors duration-300 rounded-sm text-primary-500 grid place-items-center"
                  key={link.id}
                  href={link.url}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="profileCnt px-8 pb-8 lg:px-0">
            <Heading>I am Professional User Experience Designer</Heading>
            <Detail className="mt-8 mb-4">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </Detail>
            <Detail>
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </Detail>

            <div className="flex gap-4 mt-8">
              <PrimaryButton>My Projects</PrimaryButton>
              <PrimaryButton className="!flex gap-3 items-center bg-transparent text-primary-500 border border-color-primary-500">
                <MdOutlineFileDownload /> Download CV
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
