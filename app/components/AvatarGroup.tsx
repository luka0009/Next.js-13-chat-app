'use client';

import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarGroupProps {
  users?: User[];
};

const AvatarGroup: React.FC<AvatarGroupProps> = ({ 
  users = [] 
}) => {
  const slicedUsers = users.slice(0, 3);
  
  const positionMap = {
    0: 'top-[1px] left-[12px]',
    1: 'bottom-[2px]',
    2: 'bottom-[2px] right-[1px]'
  }

  return (
    <div className="relative h-12 w-12 rounded-full border-[1px]
     border-sky-500 bg-gradient-to-br from-blue-900 via-sky-500 to-blue-900">
      {slicedUsers.map((user, index) => (
        <div 
          key={user.id} 
          className={`
            absolute
            inline-block 
            rounded-full 
            overflow-hidden
            h-[22px]
            w-[22px]
            ${positionMap[index as keyof typeof positionMap]}
          `}>
            <Image
              fill
              src={user?.image || '/images/placeholder.jpg'}
              alt="Avatar"
            />
        </div>
      ))}
    </div>
  );
}

export default AvatarGroup;