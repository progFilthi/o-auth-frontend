import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaGoogle } from 'react-icons/fa6'

export default function page() {
  return (
    <div className='flex justify-between items-center p-8'>
      <ModeToggle/>
      <Button>
        <FaGoogle/>
        Login with Google</Button>
    </div>
  )
}
