import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { Album } from "../data/albums";
import { playlists } from "../data/playlists";
import { TbCloudDownload } from "react-icons/tb";

interface AlbumArtworkProps extends React.HTMLAttributes<HTMLButtonElement> {
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
  img: string;
  name: string;
  category: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;

  handleDownload?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export function AlbumArtwork({
  category,
  img,
  name,
  aspectRatio = "portrait",
  width,
  height,
  className,
  onClick,
  ...props
}: AlbumArtworkProps) {
  return (
    <button className={cn("space-y-3 ", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <button onClick={onClick} className="overflow-hidden rounded-md">
            <img
              src={img}
              alt={"song-img"}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
              )}
            />
          </button>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Add to Library</ContextMenuItem>
          <ContextMenuSub>
            <ContextMenuSubTrigger>Add to Playlist</ContextMenuSubTrigger>
            <ContextMenuSubContent className="w-48">
              <ContextMenuItem>
                <PlusCircledIcon className="mr-2 h-4 w-4" />
                New Playlist
              </ContextMenuItem>
              <ContextMenuSeparator />
              {playlists.map((playlist) => (
                <ContextMenuItem key={playlist}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3" />
                  </svg>
                  {playlist}
                </ContextMenuItem>
              ))}
            </ContextMenuSubContent>
          </ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Play Next</ContextMenuItem>
          <ContextMenuItem>Play Later</ContextMenuItem>
          <ContextMenuItem>Create Station</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Like</ContextMenuItem>
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="flex w-full justify-between gap-2   text-sm  ">
        <div className="space-y-1  text-sm  ">
          <h3 className="flex max-w-[100px] w-full   items-start truncate font-medium leading-none">
            {name}
          </h3>
          <p className="flex items-start whitespace-nowrap  truncate text-xs text-muted-foreground w-full max-w-[100px]">
            {category}
          </p>
        </div>
        <button
          onClick={props.handleDownload}
          className=" flex h-6   w-6 items-center justify-center rounded-full bg-white/80 hover:bg-white/50  "
        >
          <TbCloudDownload size={16} className="text-xl text-gray-600 " />
        </button>
      </div>
    </button>
  );
}

interface LoadingAlbumArtworkProps
  extends React.HTMLAttributes<HTMLDivElement> {
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function LoadingAlbumArtwork({
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: LoadingAlbumArtworkProps) {
  return (
    <div className="space-y-3  ">
      <div
        style={{
          height: height,
          width: width,
        }}
        // h-auto w-auto
        className={cn(
          " animate-pulse rounded-lg  bg-secondary object-cover transition-all ",
          aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
        )}
      />
      <div className="space-y-1 text-sm">
        <h3 className="h-5 w-[70%] animate-pulse rounded-lg bg-secondary font-medium leading-none" />
        <p className="h-5 w-[40%] animate-pulse rounded-lg bg-secondary text-xs text-muted-foreground" />
      </div>
    </div>
  );
}
