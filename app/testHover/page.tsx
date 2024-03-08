// "use client";
// import { useState } from "react";

// const page = () => {
//   const [hover, setHover] = useState(false);

//   const toggleHover = () => {
//     setHover(!hover);
//   };
//   return (
//     <div>
//       <h3
//         className="relative"
//         onMouseLeave={!toggleHover}
//         onMouseEnter={toggleHover}
//       >
//         Here you can Hover
//       </h3>
//       {hover && (
//         <div className="grid grid-cols-3 bg-amber-600 absolute w-52">
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//           <h2>After you hover you seee this text</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default page;

// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";

// const Page = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [isHovered1, setIsHovered1] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };
//   const handleMouseEnter1 = () => {
//     setIsHovered1(true);
//   };

//   const handleMouseLeave1 = () => {
//     setIsHovered1(false);
//   };

//   return (
//     <div>
//       <div className="flex gap-2">
//         <motion.h3
//           className="relative"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//           whileHover={{ scale: 1, color: "#FF008C" }} // Framer Motion animation properties
//         >
//           Here you can Hover
//         </motion.h3>
//         <motion.h3
//           className="relative"
//           onMouseEnter={handleMouseEnter1}
//           onMouseLeave={handleMouseLeave1}
//           whileHover={{ scale: 1, color: "#FF008C" }} // Framer Motion animation properties
//         >
//           Here you can Hover 2
//         </motion.h3>
//       </div>

//       {isHovered && (
//         <motion.div
//           className="grid grid-cols-3 bg-amber-600 absolute"
//           initial={{ opacity: 0, x: 50 }} // Initial animation properties
//           animate={{ opacity: 1, y: 0 }} // Animation properties when component is visible
//           exit={{ opacity: 0, y: -50 }} // Exit animation properties
//         >
//           {/* Your hoverable components go here */}
//           <motion.h2>Component 1</motion.h2>
//           <motion.h2>Component 2</motion.h2>
//           <motion.h2>Component 3</motion.h2>
//           {/* ... more components */}
//         </motion.div>
//       )}
//       {isHovered1 && (
//         <motion.div
//           className="grid grid-cols-3 bg-amber-600 absolute"
//           initial={{ opacity: 0, x: 50 }} // Initial animation properties
//           animate={{ opacity: 1, y: 0 }} // Animation properties when component is visible
//           exit={{ opacity: 0, y: -50 }} // Exit animation properties
//         >
//           {/* Your hoverable components go here */}
//           <motion.h2>Component 1</motion.h2>
//           <motion.h2>Component 2</motion.h2>
//           <motion.h2>Component 3</motion.h2>
//           {/* ... more components */}
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Page;

// test= 2=>>>>>>>>>>>>>>>>>
// "use client";

// import React, { useState } from "react";
// import ecommerceCategories, { Category } from "@/data/categoryList";

// const EcommerceMenu: React.FC = () => {
//   const [activeCategory, setActiveCategory] = useState<number | null>(null);

//   const handleCategoryHover = (categoryId: number) => {
//     setActiveCategory(categoryId);
//   };

//   const handleCategoryLeave = () => {
//     setActiveCategory(null);
//   };

//   return (
//     <div>
//       {ecommerceCategories.map((category: Category) => (
//         <div
//           key={category.id}
//           onMouseEnter={() => handleCategoryHover(category.id)}
//           onMouseLeave={handleCategoryLeave}
//         >
//           <p>{category.category}</p>
//           {activeCategory === category.id && (
//             <ul>
//               {category.subcategories &&
//                 category.subcategories.map((subcategory) => (
//                   <li key={subcategory}>{subcategory}</li>
//                 ))}
//             </ul>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EcommerceMenu;

// test-3 =>>>>>>>>>>>>>>>>

{
  /* {hoverAllDept && (
        <div
          onMouseLeave={toggleAllDept}
          className="grid grid-cols-1 absolute top-48 z-10 bg-white rounded px-4 "
        >
          {ecommerceCategories.map((catList) => (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <Link href={"/category"} key={catList.id}>
                <div
                  onMouseEnter={toggleSubAllDept}
                  className="flex items-center gap-1"
                >
                  {catList.category} <IoIosArrowForward />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )} */
}
{
  /* {hoverSubAllDept && (
        <div>
          {ecommerceCategories.map((subCat) => (
            <div key={subCat.id}>
              <Link href={"/category"}>{subCat.subcategories}</Link>
            </div>
          ))}
        </div>
      )} */
}

///text motion
