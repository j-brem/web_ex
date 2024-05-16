'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { AppDemo } from '@/components/AppDemo'
import { AppStoreLink } from '@/components/AppStoreLink'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import logoBbc from '@/images/logos/bbc.svg'
import logoCbs from '@/images/logos/cbs.svg'
import logoCnn from '@/images/logos/cnn.svg'
import logoFastCompany from '@/images/logos/fast-company.svg'
import logoForbes from '@/images/logos/forbes.svg'
import logoHuffpost from '@/images/logos/huffpost.svg'
import logoTechcrunch from '@/images/logos/techcrunch.svg'
import logoWired from '@/images/logos/wired.svg'
import heroExImage from '@/images/hero/ex.gif'
import { CircleBackground } from './CircleBackground'
import { Modal } from './Modal'
import { Alerts } from './Alerts'
import heroImage from '@/images/hero/ex.gif'

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function PlayIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

export function Hero() {
  const [showModal, setShowModal] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  useEffect(() => {
    setShowModal(true)
  }, [])

  return (
    <>
      {showModal && <Modal onClose={setShowModal} />}
      
      {showAlert && <Alerts type='ok' title='알림' descriptions={['준비중입니다.']} action={setShowAlert}/>}

      <Container className="w-full h-screen overflow-hidden bg-ainbg-primary mx-auto">
        <video
          loop
          autoPlay
          muted
          id="bg-video"
          className="hidden md:flex min-w-full h-auto object-cover absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
          <source
            src='/main-bg-8sec.mp4'
            type="video/mp4"
            />
        </video>
        <div className="absolute top-0 mt-[50%] md:top-1/2 md:mt-0 transform -translate-y-1/2 text-white">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-50">
            NHP CBCT AI Diagnosis
          </h1>
          {/* <p className="text-lg md:text-xl lg:text-2xl">Your centered text message goes here.</p> */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
            {/* <AppStoreLink /> */}
            <Button
              // href="/#services"
              variant="solid"
              color='cyan'
              onClick={() => setShowAlert(true)}
            >
              {/* <PlayIcon className="h-6 w-6 flex-none" /> */}
              <span className="ml-0">Web AICiTi</span>
            </Button>
            <Button
              // href="/#docs"
              variant="outline"
              color='cyan'
              onClick={() => setShowAlert(true)}
            >
              {/* <PlayIcon className="h-6 w-6 flex-none" /> */}
              <span className="ml-0 text-ainblue-600">Manual</span>
            </Button>
          </div>
        </div>
        <div className="md:hidden mt-[80%]">
          <Image
            className="w-full"
            src={heroImage}
            alt={""}
          />  
        </div>
      </Container>
    </>
  )
}
