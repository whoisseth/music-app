/** @format */

import React from "react";
import { TbCloudDownload } from "react-icons/tb";
import { LuPlayCircle } from "react-icons/lu";
type Props = {
  img: string;
  name: string;
  category: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  handleDownload?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function SuggetionCard(props: Props) {
  return (
    <div className="flex max-w-[200px] items-center justify-between gap-2 ">
      <div className="flex items-center gap-2">
        <button
          onClick={props.onClick}
          className="group relative h-10 min-h-10 w-10 min-w-10 overflow-hidden rounded"
        >
          <img
            height={40}
            width={40}
            className="  h-10 w-10 border border-b-white object-cover"
            src={props.img}
            alt="song-img"
          />
          <div className="absolute left-0 top-0 hidden h-full w-full cursor-pointer items-center  justify-center border bg-black/50 transition-all group-hover:flex ">
            <LuPlayCircle className=" text-3xl  text-white " />
          </div>
        </button>
        <section className=" flex  flex-col">
          <p className="max-w-[110px] truncate text-sm font-semibold capitalize">
            {props.name}
          </p>
          <p className="max-w-[110px] truncate text-xs capitalize">
            {props.category}
          </p>
        </section>
      </div>
      <div>
        <button
          onClick={props.handleDownload}
          className=" rounded-full bg-white/80 p-1 hover:bg-white/50 "
        >
          <TbCloudDownload className="text-xl text-gray-600 " />
        </button>
      </div>
    </div>
  );
}
