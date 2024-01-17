import hoteDeals1 from "../../public/hotDeals/hotDeals1.png"
import hoteDeals2 from "../../public/hotDeals/hotDeals2.png"
import hoteDeals3 from "../../public/hotDeals/hotDeals3.png"
import hoteDeals4 from "../../public/hotDeals/hotDeals4.png"

interface HotDealItem{
  id: number;
  bg: string;
  title?: string
}


const HotDealsImg:HotDealItem[] = [
    {
    id: 1,
    bg: hoteDeals1,
  },
  {
    id: 2,
    bg: hoteDeals2,
  },
  {
    id: 3,
    bg: hoteDeals3,
    title: "Banner 3",
  },
  {
    id: 4,
    bg: hoteDeals4,
    title: "Banner 3",
  },
  
];

export default HotDealsImg;