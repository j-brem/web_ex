'use client'
// import dynamic from 'next/dynamic'

import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })

export function AboutCompany() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // return this null to avoid hydration errors
  }

  return (
    <section
      id="about-company"
      className="relative overflow-hidden py-20 sm:py-32 bg-ainbg-primary"
    >
      {/* <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div> */}
      <Container>
        <div className="max-w-3xl lg:mx-0">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-50">
            Get your first actions
          </h1>

          {/* <p className="mt-4 text-lg text-gray-200">
            Revolutionizing dental care through cutting-edge AI technology,
            our company offers an advanced diagnosis solution that transforms the landscape of dental healthcare.
          </p> */}
        </div>
        <div className="mt-12 w-full flex">
          <ReactPlayer url='https://youtu.be/ZKjW-JfD0TA' light={true} width='100%' />
          </div>
        <div className="mt-12 w-full flex">
          <ReactPlayer url='https://youtu.be/wpP0osRec6c' light={true} width='50%' />
          <ReactPlayer url='https://youtu.be/cqvdTNpLYyA' light={true} width='50%' />
        </div>
      </Container>
    </section>
  )
}
