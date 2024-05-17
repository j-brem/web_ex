'use client'
// import dynamic from 'next/dynamic'


import { useEffect, useState } from 'react'
import Image from 'next/image'
import service from '@/images/services/service.png'

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
      className="mx-4 grid max-w-mx grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32  lg:grid-cols-3 lg:max-w-full"
      >


<div class="grid lg:grid-cols-1 gap-y-2 sm:grid-cols-1 sm:gap-y-46 lg:gap-x-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-50">
          AICiTi
          </h1>



          <p className="text-gray-200 lg:mx-0">
            AICiTi 아이씨티 프로그램은 치과용 CBCT(Cone Beam Computed Tomography) 영상에서 딥러닝 모델을 이용해 
치아 교정 진단에 필요한 랜드마크를 자동 검출, 분석을 제공합니다.
          </p>
        </div>

        <div className="sm:col-span-full lg:col-span-2 gap-4 sm:gap-6 lg:gap-8 flex justify-center rounded-lg bg-gray-800 ">
        <div class="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
          <Image
            className="w-full h-full object-cover "
            src={service}
            alt={""}
          />
          </div>         
          </div>


    </article>
  )
}