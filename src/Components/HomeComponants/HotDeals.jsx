"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import HotDealsImg from "../../data/hotDealsImg"

export const HotDeals = () => {

  return (
    <div>
        <p className=' text-2xl hidden sm:hidden md:block md:ml-32 md:py-4  lg:block lg:ml-35 lg:py-6  '>Hot Deals</p>
        <div className='md:grid lg:grid-cols-2 md:grid-cols-2 gap-3 px-4 w-full max-w-[1050px] mx-auto sm:hidden'>
            {HotDealsImg.map((image)=>(
                <div key={image.id} 
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