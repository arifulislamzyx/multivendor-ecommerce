"use client"
import Image from "next/image";
import { useEffect, useState } from "react"


export const Category =()=>{
    const [categoriesData, setCategoriesData] = useState([])

    console.log( "all categories",categoriesData);


    useEffect(()=>{
        fetch("https://mitnog-server.vercel.app/categories")
        .then(res=> res.json())
        .then(data=> setCategoriesData(data))
        .catch(err=>{
            console.error("Error fetching categories:", error);
            setCategoriesData([]);
        })
    },[])
     
    return(
        <div className="bg-white">
            <p className="text-2xl pt-5 lg:ml-35 md:ml-32 sm:ml-2">Popular Categories</p>
            <div className="grid grid-cols-3 gap-4 w-3/4 m-auto bg-white rounded-xl">
            {
                categoriesData.map(category =>(
                    <div key={category._id} className="p-5 rounded-xl items-center">
                        
                        <Image width={200} height={200} src={category.imageUrl} alt="" className="rounded" />
                        <p className="mt-5">{category.name}</p>
                        
                    </div>
                ))
            }
        </div>
        </div>
    )
 
}


