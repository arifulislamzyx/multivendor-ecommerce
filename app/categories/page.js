"use client"
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react"


const Categories =()=>{
    const [categoriesData, setCategoriesData] = useState([])

    console.log( "all categories",categoriesData);


    useEffect(()=>{
        fetch("https://mitnog-server-dgugxhu66-ariful-islams-projects.vercel.app/categories")
        .then(res=> res.json())
        .then(data=> setCategoriesData(data))
        .catch(err=>{
            console.error("Error fetching categories:", err);
            setCategoriesData([]);
        })
    },[])
     
    return(
        <div className="bg-white">
            <p className="text-2xl pt-5 ml-32">Popular Categories</p>
            <div className="grid grid-cols-3 gap-4 w-3/4 m-auto bg-white rounded-xl">
            {
                categoriesData.map(category =>(
                    <div key={category._id} className="p-5 rounded-xl items-center" >
                        
                        <Image src={category.imageUrl} alt="" className="rounded" />
                        <p className="mt-5">{category.name}</p>
                        
                    </div>
                ))
            }
        </div>
        </div>
    )
 
}

export default Categories;