"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Category = () => {
  const [categoriesData, setCategoriesData] = useState([]);

  console.log("all categories", categoriesData);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesRes = await fetch(
          "https://lazy-lime-seahorse-wrap.cyclic.app/categories"
        );
        if (!categoriesRes.ok) {
          throw new Error("Network Issue Categories");
        }

        const data = await categoriesRes.json();
        setCategoriesData(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="bg-white">
      <p className="text-2xl pt-5 lg:ml-35 md:ml-32 sm:ml-2">
        Popular Categories
      </p>
      <div className="grid grid-cols-3 gap-4 w-3/4 m-auto bg-white rounded-xl ">
        {categoriesData.map((category) => (
          <div
            key={category._id}
            className="p-5 rounded-xl items-center sm:rounded-full"
          >
            <Image
              width={200}
              height={200}
              src={category.imageUrl}
              alt=""
              className="rounded"
            />
            <p className="mt-5">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
