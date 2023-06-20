"use client";

import SingleStory from "./singlestory";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { HiBookOpen } from "react-icons/hi";
import { TfiVideoClapper } from "react-icons/tfi";
import { AiOutlinePlus } from "react-icons/ai";

export default function Story() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const singleStoryData = [
    {
      title: "Bill Gates",
      img: "/bill_gates.jpg",
      postImg: "bg-[url(/building.jpg)]",
    },
    {
      title: "Elon Musk",
      img: "/elon_musk.jpg",
      postImg: "bg-[url(/gaming_mouse.jpg)]",
    },
    {
      title: "Bill Gates",
      img: "/bill_gates.jpg",
      postImg: "bg-[url(/building.jpg)]",
    },
    {
      title: "Elon Musk",
      img: "/elon_musk.jpg",
      postImg: "bg-[url(/gaming_mouse.jpg)]",
    },
    {
      title: "Bill Gates",
      img: "/bill_gates.jpg",
      postImg: "bg-[url(/building.jpg)]",
    },
    {
      title: "Elon Musk",
      img: "/elon_musk.jpg",
      postImg: "bg-[url(/gaming_mouse.jpg)]",
    },
  ];

  return (
    <div className="px-4 bg-white rounded-[17px] shadow-md">
      <div className="grid grid-cols-2 bg-white border-b border-gray-300">
        <div className="relative">
          <div className="mx-auto w-fit flex gap-2 items-center text-primary py-2">
            <HiBookOpen className="text-[30px]" />
            <p className="font-bold">Stories</p>
          </div>
          <div className="bg-primary h-[3px]"></div>
        </div>

        <div>
          <div className="mx-auto w-fit flex gap-2 items-center text-gray-500 py-2">
            <TfiVideoClapper className="text-[26px]" />
            <p className="font-bold">Reels</p>
          </div>
        </div>
      </div>

      <div className="flex gap-[10px] mt-5 pb-5 overflow-x-scroll scrollbar-hide">
        <div className="w-[112px] shadow-md rounded-[15px] pb-2 shrink-0">
          <Image
            className="w-[112px] h-[151px] rounded-t-[15px] object-cover"
            src={session?.user?.image}
            alt="dp"
            width={300}
            height={500}
          />
          <div>
            <div className="bg-primary w-[35px] h-[35px] rounded-full grid place-items-center text-[24px] text-white mx-auto -mt-[20px] relative outline outline-[6px] outline-white">
              <AiOutlinePlus />
            </div>
            <p className="text-center mt-2 font-medium">Create Story</p>
          </div>
        </div>
        {singleStoryData.map(({ title, img, postImg }, index) => {
          return (
            <SingleStory
              key={index}
              title={title}
              img={img}
              postImg={postImg}
            />
          );
        })}
      </div>
    </div>
  );
}
