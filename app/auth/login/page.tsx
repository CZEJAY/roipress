
import React from 'react'
import Login from '@/components/auth/Login'

const page = () => {
  return (
    <>
      <React.Suspense>
          <Login />
        </React.Suspense>
    </>
  )
}

export default page