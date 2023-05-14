'use client';
import { signOut } from 'next-auth/react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
        <button
        onClick={() => signOut()}
        className='bg-red-500 px-3 py-2'
        >
            Log out
        </button>
    </div>
  )
}

export default page