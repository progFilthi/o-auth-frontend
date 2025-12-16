"use client"
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaGoogle } from 'react-icons/fa6'

export default function page() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  }

  return (
    <div className='flex justify-between items-center p-8'>
      <ModeToggle/>
      <Button onClick={handleGoogleLogin}>
        <FaGoogle/>
        Login with Google</Button>
    </div>
  )
}
