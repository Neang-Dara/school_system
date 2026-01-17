'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const SignInPage = () => {
  const { isSignedIn, user, isLoaded } = useUser()
  const router = useRouter()
  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user) return

    // Refresh the user to get the latest metadata (role)
    user.reload().then(() => {
      const role = user.publicMetadata.role || 'default'
      router.push(`/dashboard/${role}`)
    })
  }, [isLoaded, isSignedIn, user, router])

  return (
    <div className="h-screen flex items-center justify-center bg-[url('/bg2.jpg')] bg-cover bg-center">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className='bg-gray-100/50 backdrop-blur-md p-12 rounded-md shadow-2xl flex flex-col gap-4 w-90 ml-28'
        >
          <h1 className='text-xl font-bold flex items-center gap-2'>
            <Image src="/logo.png" alt="logo" width={50} height={50} />
            Rupp
          </h1>

          <Clerk.GlobalError className='text-sm text-red-400' />

          {/* Email field */}
          <Clerk.Field name="identifier" className='flex flex-col gap-1'>
            <Clerk.Label className='text-xs text-gray-500'>Email</Clerk.Label>
            <Clerk.Input
              type='text'
              required
              className='p-2 rounded-md ring-1 ring-gray-300 focus:ring-blue-400 outline-none'
            />
            <Clerk.FieldError className='text-xs text-red-400' />
          </Clerk.Field>

          {/* Password field */}
          <Clerk.Field name="password" className='flex flex-col gap-1'>
            <Clerk.Label className='text-xs text-gray-500'>Password</Clerk.Label>
            <Clerk.Input
              type='password'
              required
              className='p-2 rounded-md ring-1 ring-gray-300 focus:ring-blue-400 outline-none'
            />
            <Clerk.FieldError className='text-xs text-red-400' />
          </Clerk.Field>

          {/* Sign in button */}
          <SignIn.Action
            submit
            className='bg-yellow-400 text-white my-2 rounded-md text-sm p-2 hover:bg-blue-600 transition'
          >
            Sign in
          </SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  )
}

export default SignInPage
