import Image from "next/image";
import CardImg from '@/app/assets/CardImg2.png'
import { Phone, Stars } from "lucide-react";

export default function Card() {
  return (
    <>
      <div className="flex flex-col gap-2 w-[340px]">     
        <div className="w-[340px] h-[340px] object-cover overflow-hidden rounded-xl">
          <div className="theme-bg w-full rounded-tl-md rounded-tr-md text-white px-2">
            Hello
          </div>
          <Image src={CardImg} alt="" width={340} className="object-cover min-w-full max-w-full min-h-full max-h-full rounded-tl-none rounded-tr-none"/>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-color text-[12px]">5 Days & 4 Nights</p>
          <div className="flex flex-row gap-1.5 items-center">
            <Stars width={15} className="theme-color" fill="#a03dfcb3"/>
            <p className="font-color text-[14px] theme-color"> {'4.6'}</p>
            <p className="font-color text-[12px]"> {'(1.6k)'}</p>
          </div>
        </div>
        <div className="">
          <p className="text-sm">Dubai Highlights | Skyline and Sandscapes</p>
        </div>
        <div className="card-days p-1 rounded">
          <p className="text-xs">5D Dubai</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <p className="font-bold text-base">INR 45,000</p>
          <p className="font-light text-sm line-through font-color">INR 75,000</p>
          <p className="font-bold text-green-700 text-[10px] bg-green-200">save INR 30,000</p>
        </div>
        <div className="flex gap-3 items-center">
          <button className="p-2.5 border-[#a03dfcb3] border rounded-md">
            <Phone className="theme-color" fill="#a03dfcb3" />
          </button>
          <button className="p-2.5 rounded-md border border-[#a03dfcb3] text-center w-full font-bold text-white bg-[#a03dfcb3]">
            Avail This Offer
          </button>         
        </div>
      </div>
    </>
  )
}