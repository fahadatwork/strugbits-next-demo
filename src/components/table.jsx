
"use client"


import React, { useState } from "react";
import Image from "next/image";
import Customer from "./customer";

const Table = () => {
  const updown = "/updown.svg";
  const user = '/user.png';
  const users = [
    { id: 1, name: "Fahad Ullah Khan", email: "fahad@fahad.com", photo: user },
    { id: 2, name: "Fahad Ullah Kaan", email: "fahad@fahad1.com", photo: user },
    { id: 3, name: "Fahad Ullah Khhn", email: "fahad@fahad2.com", photo: user },
  ];

   const [filteredUsers, setFilteredUsers] = useState(users);

  
   const removeUser = (id) => {
    setFilteredUsers(filteredUsers.filter((user) => user.id !== id));
  };



  return (

    <>
      <div className="w-[900px] h-[50px] bg-slate-100 rounded-lg flex flex-row gap-2 justify-center">
        <div className="flex flex-row gap-8">
        <button className="font-bold text-gray-500 flex flex-row gap-2 mt-[15px]">
            Image
          </button>
          <button className="font-bold text-gray-500 flex flex-row gap-2 mt-[15px]">
            Customer ID# <Image height={15} width={15} src={updown}></Image>
          </button>
          <button className="font-bold text-gray-500 flex flex-row gap-2 mt-[15px]">
            Customer Name <Image height={15} width={15} src={updown}></Image>
          </button>
          <button className="font-bold text-gray-500 flex flex-row gap-2 mt-[15px]">
            Customer Email <Image height={15} width={15} src={updown}></Image>
          </button>
        </div>
      </div>

      {filteredUsers.map((user) => (
  <Customer
    key={user.id}
    id={user.id}
    name={user.name}
    photo={user.photo}
    email={user.email}
    removeUser={removeUser}

  />
))}

    
    </>
  );
};

export default Table;
