"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface User{
    name: string,
    email: string,
    imageUrl: string | null,
    
}

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null)

useEffect(() => {
  const fetchUser = async () => {
    const response = await fetch("http://localhost:8080/api/v1/users/me", {
      credentials: "include",
    });

    console.log("status", response.status);
    const data = await response.json();
    console.log("user data", data);

    setUser(data);
  };
  fetchUser();
}, []);





  return (
    <div>
        <h1>DashboardPage</h1>

        {user ? (
            <div>
                <p>Hello, {user.name}</p>
                <p>{user.email}</p>
                {user.imageUrl && <Image src={user.imageUrl} alt="user image" width={100} height={100} />}
            </div>
        ) : (
            <p>Loading...</p>
        )}

    </div>
  )
}
