import { useId } from 'react'

import { Container } from '@/components/Container'
import Image from 'next/image'
import ceoImage from '@/images/company/ceo-ahn.png'
import { ViewfinderCircleIcon } from '@heroicons/react/20/solid'

const activity = [
  { id: 1, type: 'new-year',
    history: {
      name: '회사 창립',
      description: '',
    }, 
    date: '2021-04-05',
  },
  { id: 2, type: 'month',
    history: {
      name: 'AICiTi program version 4.1 출시',
      description: '',
    }, 
    date: '2021-09-10',
  },
  { id: 3, type: 'new-year',
    history: {
      name: '국내 특허 등록',
      description:
        `자연 두부 위치에서 촬영된 3차원 CBCT 영상에서 기계  학습 기반  치아교정 진단을 위한 
        두부 계측 파라미터 도출방법 – 국내 특허 등록 완료`,
    }, 
    date: '2022-03-05',
  },
  { id: 4, type: 'month',
    history: {
      name: 'PCT 출원 완료',
      description:
        `자연 두부 위치에서 촬영된 3차원 CBCT 영상에서 기계  학습 기반  치아교정 진단을 위한 
        두부 계측 파라미터 도출방법 – 국내 특허 등록 완료`,
    }, 
    date: '2022-04-29',
  },
  { id: 5, type: 'month',
    history: {
      name: '프로그램 검증 논문 게재',
      description:
      `Computer Methods and Programs in Biomedicine에 “Automated analysis of three-dimensional CBCT
      images taken in natural head position that combinesfacial profile processing and multiple deep-learning models"`,
    }, 
    date: '2022-09-08',
  },
  { id: 6, type: 'new-year',
    history: {
      name: '국내 출원 완료',
      description:
        `자연 두부 위치에서 촬영된 엑스레이(X-ray) 이미지를 이용한 기계학습 기반 치아 교정 진단을 위한 
        두부계측 파라미터 도출방법`,
    }, 
    date: '2023-03-23',
  },
  { id: 7, type: 'month',
    history: {
      name: '산자부 사업 과제 선정',
      description: '산자부 주관 중견 중소 기업 상생형 혁신 도약 사업 과제 선정',
      note: '(주관기업 – 바텍사, 총 사업비 – 39억, 주식회사 아인사이트 – 6억)',
    }, 
    date: '2023-04-25',
  },
  { id: 8, type: 'month',
    history: {
      name: 'AICiTi program version 7.7 출시',
      description: ``,
    }, 
    date: '2023-06-30',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function CompanyHistory() {
  return (
    <section
      id="company-history"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32 bg-ainbg-primary"
    >
      <Container>
        <div className="max-w-3xl lg:mx-0">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-50">
            회사연혁
          </h1>
        </div>

        <div className='flex justify-end mr-0 md:ml-[30%] xl:ml-[50%]'>
        {/* <ul role="list" className="mt-12 mx-10 md:mx-20 lg:mx-40 xl:w-1/2 xl:mx-auto space-y-6"> */}
        <ul role="list" className="mt-12 space-y-6">
          {activity.map((activityItem, activityItemIdx) => (
            <li key={activityItem.id} className="relative flex gap-x-4">
              <div className="mt-1 text-ainblue-600 text-lg font-bold">
                {activityItem.type === 'new-year' ?
                  <p className='ml-2.5'>{activityItem.date.split('-')[0]}</p> :
                  <p className='ml-14' />
                }
              </div>
              <div
                className={classNames(
                  activityItemIdx === activity.length - 1 ? 'h-1' : '-bottom-10',
                  'absolute left-20 top-4 flex w-6 justify-center'
                )}
              >
                <div className="w-px bg-gray-200" />
              </div>
              
              <div className="relative flex h-10 w-10 flex-none items-center justify-center bg-transparent">
                {activityItem.type === 'new-year' ? 
                  <ViewfinderCircleIcon className="h-10 w-10 text-ainblue-200" aria-hidden="true" />
                  : (
                  <div className="h-2 w-2 rounded-full bg-gray-100 ring-1 ring-gray-300" />
                )}
              </div>
              <div className="flex-auto mt-2 pr-20 md:pr-20 lg:pr-40 lx:pr-60 text-xs leading-5 text-gray-500">
                <div className="font-bold text-sm text-gray-50">{activityItem.history.name}</div> 
                <div className="font-medium italic text-gray-200">{activityItem.history.description}</div> 
                {activityItem.history.note && <div className="font-medium italic text-gray-200">{activityItem.history.note}</div>}
              </div>
              <time className="flex-none py-0.5 text-xs leading-5 text-gray-500">
                {activityItem.date}
              </time>
            </li>
          ))}
        </ul>
        </div>
      </Container>
    </section>
  )
}
