import React from 'react'
import { tabs } from '../utils/constants'

const Profile = () => {
  return (
    <>
        <div className='bg-[#e5e5e5]'>
            <div>
                {
                    tabs.map((tab,i)=>(
                        <button className=' '>
                            {tab}
                        </button>
                    ))
                }
            </div>

        </div>
    </>
  )
}

export default Profile