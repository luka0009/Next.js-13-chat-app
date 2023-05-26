"use client";
import Avatar from "@/app/components/Avatar";
import { FullMessageType } from "@/app/types";
import clsx from "clsx";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import React from "react";
import Image from "next/image";

type Props = {
  isLast?: boolean;
  data: FullMessageType;
};

const MessageBox: React.FC<Props> = ({ isLast, data }) => {
  const session = useSession();

  const isOwn = session?.data?.user?.email === data?.sender?.email;
  const seenList = (data.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.name)
    .join(", ");

  const container = clsx("flex gap-3 p-4", isOwn && "justify-end");
  const avatar = clsx(isOwn && "order-2");
  const body = clsx("flex flex-col gap-2", isOwn && "items-end");
  const message = clsx(
    "text-sm w-fit overflow-hidden",
    isOwn ? `
    bg-gradient-to-br from-purple-500 via-pink-400 to-purple-600 via-30%
    bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700
    text-white` : `
    bg-gradient-to-br from-sky-600 via-blue-500 to-sky-600 via-30% 
    bg-gradient-to-br from-blue-900 via-black to-blue-900 via-30%     
    text-white`,
    data.image ? "rounded-md p-0" : "rounded-full py-2 px-3"
  );

  return (
    <div className={container}>
      <div className={avatar}>
        <Avatar user={data.seenIds} />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-sm text-sky-500">{data.sender.name}</div>
          <div className="text-xs text-gray-400">
            {format(new Date(data.createdAt), "p")}
          </div>
        </div>
        <div className={message}>
          {data.image ? (
            <Image
              alt="image"
              height={288}
              width={288}
              src={data.image}
              className="object-cover cursor-pointer"
            />
          ) : (
            <div>{data.body}</div>
          )}
        </div>
        {
            isLast && isOwn && seenList.length > 0 && (
                <div className="text-xs font-light text-gray-400">{`Seen by ${seenList}`}</div>
            )
        }
      </div>
    </div>
  );
};

export default MessageBox;
