import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import mainLogo from "../../assets/Leo Shows-Picsart.png";

const Footer = () => {
  return (
    <footer className="bg-[#1F1E17] text-gray-400 text-sm ">
        <div className="border border-gray-600 w-full">
            <div className="flex flex-col items-center py-6">
                <img src={mainLogo} alt="BookMyScreen Logo" className="w-28 mb-4" />
            

                {/* Social Icons */}
                <div className="flex space-x-4 mb-4 mx-auto">
                    <FaFacebookF className="w-8 h-8 p-2 rounded-full bg-[#656251] text-white" />
                    <FaTwitter className="w-8 h-8 p-2 rounded-full bg-[#656251] text-white" />
                    <FaInstagram className="w-8 h-8 p-2 rounded-full bg-[#656251] text-white" />
                    <FaYoutube className="w-8 h-8 p-2 rounded-full bg-[#656251] text-white" />
                    <FaPinterestP className="w-8 h-8 p-2 rounded-full bg-[#656251] text-white" />
                    <FaLinkedinIn className="w-8 h-8 p-2 rounded-full bg-[#656251] text-white" />
                </div>
            
                {/* Copyright */}
                <p className="text-center text-xs px-4 max-w-4xl">
                    Copyright 2025 © Leo Shows Pvt Ltd.  All Rights Reserved.<br />
                </p>
                <small>
                    The content and images used on this site are copyright protected and
                    copyrights vests with the respective owners. The usage of the content
                    and images on this website is intended to promote the works and no
                    endorsement of the artist shall be implied.
                </small>
            </div>
        </div>
    </footer>
  )
}

export default Footer