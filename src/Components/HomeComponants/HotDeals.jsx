"use client"
import React, { useState } from 'react'
import hoteDeals1 from "../../../public/hotDeals/hotDeals1.png"
import hoteDeals2 from "../../../public/hotDeals/hotDeals2.png"
import hoteDeals3 from "../../../public/hotDeals/hotDeals3.png"
import hoteDeals4 from "../../../public/hotDeals/hotDeals4.png"
import Image from 'next/image'

const HotDeals = () => {

    const images = [hoteDeals1, hoteDeals2, hoteDeals3, hoteDeals4]
    const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
        <p className=' text-2xl hidden sm:hidden md:block md:ml-32 md:py-4  lg:block lg:ml-35 lg:py-6  '>Hot Deals</p>
        <div className='md:grid lg:grid-cols-2 md:grid-cols-2 gap-3 px-4 w-full max-w-[1050px] mx-auto sm:hidden'>
            {images.map((image, index)=>(
                <div key={index} 
                onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}

            className='transition duration-700 ease-in-out transform hover:scale-105 hover:blur-sm'
                >
                    <Image 
                    src={image} alt='hotDealsImg'></Image>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HotDeals