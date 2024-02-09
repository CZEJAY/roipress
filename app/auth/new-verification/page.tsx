"use client"
import React from 'react'
import VerificationForm from '@/components/auth/verificationForm'

const page = () => {
  return (
    <>
      <React.Suspense >
          <VerificationForm />
        </React.Suspense>
    </>
  )
}

export default page