import React from 'react'
import { FaSearch, FaUser } from 'react-icons/fa'
import mainLogo from '../../assets/Leo Shows.png'
import { useLocation } from '../../context/LocationContext';
import map from "../../assets/pin.gif"

const Header = () => {

    const {location, loading, error} = useLocation();

  return (
    <div className="w-full text-sm bg-white">
      {/* Top Navbar */}
      <div className="px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3">
          {/* Left Part */}
          <div className="flex items-center space-x-4">
            <img
              src={mainLogo}
              alt="logo"
              className="h-13 object-contain"
            />
            <div className="relative">
              <input
                type="text"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="border border-gray-300 rounded px-4 py-1.5 w-[400px] text-sm outline-none"
              />
              <FaSearch className="absolute right-2 top-2.5 text-gray-500" />
            </div>
          </div>
          {/* Right Part */}
          <div className="flex item-center space-x-6">
            <div className="text-sm font-medium cursor-pointer border rounded-full border-[#88856E] p-2">
               {!location && <img src={map} alt='loading..'className='w-5 h-5'/>}
               {location && <p>{location} &nbsp; ▼</p> }
            </div>
            <span className="cursor-pointer text-sm font-medium border rounded-full border-[#88856E] p-2">
              <FaUser className="text-[#88856E" />
            </span>
            <button className="bg-orange-500 text-white px-4 py-1.5 rounded text-sm hover:bg-[#F8AF26]/90 transition duration-200 font-medium">
              Sign in
            </button>
          </div>
        </div>
      </div>
      {/* Bottom Navbar */}
      <div className="bg-[#E9ECEF] px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-2 text-[#333333]">
          <div className="flex items-center space-x-6 font-medium">
            <span className="hover:text-orange-500">Movies</span>
            <span className="hover:text-orange-500">Stream</span>
            <span className="hover:text-orange-500">Events</span>
            <span className="hover:text-orange-500">Plays</span>
            <span className="hover:text-orange-500">Sports</span>
            <span className="hover:text-orange-500">Activities</span>
          </div>

            <div className="flex item-center space-x-6 text-sm">
                <span className="hover:underline">ListYourShow</span>
                <span className="hover:underline">Corporates</span>
                <span className="hover:underline">Offers</span>
                <span className="hover:underline">Gift Cards</span>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Header