'use client'
// import dynamic from 'next/dynamic'

import { Container } from '@/components/Container'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

// const NoSSR = dynamic(() => import('../components/no-ssr'), { ssr: false })

export function Services() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // return this null to avoid hydration errors
  }

  return (
    <article
      id="services"
      className="relative overflow-hidden bg-ainbg-primary py-20 sm:py-28"
    >
      {/* <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div> */}
      <Container className="relative">
      <div className="max-w-3xl lg:mx-0">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-50">
          AICiTi
          </h1>
          </div>

        <div className="relative mt-12 col-span-12 md:col-span-6 flex items-center">
            <div className="z-10 mx-auto w-full justify-right">
            <p className="text-gray-200">
            AICiTi 아이씨티 프로그램은 치과용 CBCT(Cone Beam Computed Tomography) 영상에서 딥러닝 모델을 이용해 
치아 교정 진단에 필요한 랜드마크를 자동 검출, 분석을 제공합니다.
          </p>
            </div>
          </div>

      </Container>
    </article>
  )
}