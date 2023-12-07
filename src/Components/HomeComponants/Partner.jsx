// import React from 'react'
// import Img1 from "../../../public/Partners/partner1.png"
// import Img2 from "../../../public/Partners/partner2.png"
// import Img3 from "../../../public/Partners/partner3.png"
// import Img4 from "../../../public/Partners/partner4.png"
// import Img5 from "../../../public/Partners/partner5.jpeg"
// import Img6 from "../../../public/Partners/partner6.png"
// import Img7 from "../../../public/Partners/partner7.png"
// import Img8 from "../../../public/Partners/partner8.png"
// import Img9 from "../../../public/Partners/partner9.png"
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Image from 'next/image'
// import { Box } from '@mui/material'


// const Partner = () => {
//     const partners= [Img1, Img2, Img3, Img4, Img5 , Img6, Img7, Img8]

//     const settings = {
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: false,
//         speed: 2000,
//         autoplaySpeed: 2000,
//         cssEase: "linear"
//       };
//   return (
//     <div className='w-full bg-black'>
//     <Slider {...settings}>
//         {partners.map((partner)=>(
//             <div className='rounded-full gap-4 bg-white w-[100px] h-[150px]' >
//             <Image src={partner} width='200' height='50' ></Image>
//         </div>
//         ))}
//     </Slider>

//     </div>
//   )
// }

// export default Partner ;