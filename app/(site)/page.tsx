import Image from "next/image"
import AuthForm from "./components/AuthForm"

export default function Home() {
    return (
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-800 text-sky-500">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image 
            alt="logo"
            height='200' 
            width='200'
            className="mx-auto w-auto"
            src='/images/logo.png' 
            />
            <h2 className="mt-[-25px] text-center text-3xl font-bold tracking-tight">
                Sign in to your account
            </h2>
        </div>
        <AuthForm />
      </div>
    )
  }
  