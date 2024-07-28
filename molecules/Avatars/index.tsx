import Image from "next/image";
import React from "react";

export const Avatars = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex -space-x-4 rtl:space-x-reverse">
        <Image
          width={1000}
          height={1000}
          className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
          src="/images/avatars/avatar1.jpg"
          alt="Avatar 3"
        />
        <Image
          width={1000}
          height={1000}
          className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
          src="/images/avatars/avatar3.jpg"
          alt="Avatar 3"
        />
        <Image
          width={1000}
          height={1000}
          className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
          src="/images/avatars/avatar2.jpg"
          alt="Avatar 2"
        />
        <Image
          width={1000}
          height={1000}
          className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
          src="/images/avatars/avatar1.jpg"
          alt="Avatar 1"
        />
      </div>
      <div className="flex flex-col">
        <p className="font-outfit text-sm text-white">100+</p>
        <p className="font-karla text-xs font-light text-gray-300">
          Subscribed Clients
        </p>
      </div>
    </div>
  );
};
