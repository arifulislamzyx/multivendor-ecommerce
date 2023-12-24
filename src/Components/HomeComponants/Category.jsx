"use client";
import Image from "next/image";
import categoriesImage from "@/data/categoriesImage";

export const Category = () => {
  return (
    <div className="bg-white">
      <p className="text-2xl font-bold pt-5 lg:ml-35 md:ml-32 ml-2">
        Popular Categories
      </p>
      <div className="grid grid-cols-4 gap-4 max-w-[1050px] m-auto bg-white rounded-xl ">
        {categoriesImage.map((category) => (
          <div
            key={category.id}
            className="p-5 rounded-xl items-center sm:rounded-full"
          >
            <Image
              width={200}
              height={200}
              src={category.image}
              alt="categories"
              className="rounded li hover:shadow-2xl"
            />
            <p className="mt-5">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
