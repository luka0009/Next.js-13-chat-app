'use client';
import Modal from '@/app/components/modals/Modal';
import React from 'react'
import Image from 'next/image';

type Props = {
    src: string | null,
    isOpen?: boolean,
    onClose: () => void, 
}

const ImageModal: React.FC<Props> = ({src, isOpen, onClose}) => {
  if(!src) {
    return null;
  };


  return (
    <Modal isOpen={isOpen} onClose={onClose} dark>
        <div className='w-80 h-80 lg:w-96 lg:h-screen lg:max-h-[500px]'>
            <Image 
            alt='image'
            className='object-contain'
            fill
            src={src}
            />
        </div>
    </Modal>
  )
}

export default ImageModal