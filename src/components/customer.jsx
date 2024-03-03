"use client"
import Image from "next/image"
import Link from "next/link"

const Customer = ({ photo, name, email, id , removeUser }) => {


  return (
       <div className="w-[900px] h-[90px] bg-slate-100 mt-[10px] rounded-md flex flex-row gap-9 justify-center">
        <Image
          className=" w-[50px] h-[50px] m-[20px]"
          src={photo}
          width={120}
          height={120}
        ></Image>
        <div className="mt-[30px]">
          <span className="text-gray-500">{id}</span>
        </div>
        <div className="mt-[30px]">
          <span className="text-gray-500">{name}</span>
        </div>
        <div className="mt-[30px]">
          <span className="text-gray-500">{email}</span>
        </div>
        <div className="mt-[30px] space-x-1 flex flex-row">
          <Link href={`/?editCust=true?id=${id}`}>
            <p className="w-[60px] h-[20px] rounded-md text-white text-sm bg-green-300 hover:bg-green-400 text-center">Edit</p>
          </Link>
          <button onClick={()=> removeUser(id)} className="w-[60px] h-[20px] rounded-md text-white text-sm bg-red-300 hover:bg-red-400">
            Delete
          </button> 
        </div>
  </div>
  )
}

export default Customer