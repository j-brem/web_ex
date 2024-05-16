import { useId } from 'react'
import { Container } from '@/components/Container'
import Image from 'next/image'
import ceoImage from '@/images/ceo-message/ceo-box.png'

export function CeoMessage() {
  return (
    <section
      id="ceo-message"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32 bg-ainbg-secondary"
    >
      <Container>
        <div className="max-w-3xl lg:mx-0">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-50">
            We are changing the way people smile
          </h1>
          {/* <p className="mt-4 text-lg text-gray-200">
            Ainsight is an artificial intelligence orthodontic correction program designed to make data,
            based on information accessible to everyone,
            easily understandable for both professionals and the general public.
            With image interpretation times reduced to less than 10 seconds,
            we are revolutionizing the clinical process by significantly shortening the time required for orthodontic assessments.
          </p> */}
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-16 xl:gap-24">
          <div className="relative mt-12 mx-auto col-span-12 md:col-span-6">
            <p className="text-gray-200">
              안녕하십니까?<br /><br />
              주식회사 아인사이트 대표 안장훈입니다.
              여러 선생님들께 저희 회사를 소개하게 되어 대표로서 무척 기쁩니다.
              저희 회사는 치과 의료용 소프트웨어를 치과의사 선생님들께 제공하는 회사입니다. 
              특히 치과교정과 전문의나 치과의사 선생님들이 치과교정과 환자를 보실 때주로 채득하는 2차원 x-ray,
              3차원 CBCT 영상 및 구강 스캔 데이터를 자동으로 분석해주는 프로그램을 서비스하고 있습니다. 
              2차원 CEPHALOGRAM이나 3차원 CBCT 영상, 혹은 구강 스캔 데이터를 채득하고
              수작업으로 이것을 분석하시는데 많은 시간과 노력이 듭니다. <br /><br />

              따라서, 이런 부분을 인공 지능 기술 기반으로 한 프로그램을 이용하여 자동으로 분석함으로써
              짧은 시간에 효율적으로 교정 환자를 진단하고 치료계획을 수립할 수 있습니다.
              그리고, 치근을 포함하고 골격을 고려한 치아 자동 배열 프로그램을 준비 중이며 이 프로그램은 교정 환자 상담을 위한 치료 SIMULATION이나 
              투명 교정 장치 제작용으로 활용할 수 있습니다. 또한, 양악 수술을 위한 3차원 영상의 자동 SIMULATION 및 수술용 가이드를 제공할 예정입니다.<br /><br />

              이외에 임플란트 수술을 위한 자동 진단 및 보이스 챠팅을 위한 기술 개발도 계획 중입니다. 
              저도 치과의사이고 치과교정과 전문의이기 때문에 선생님들께서 임상에서 많은 고생을 하고 계시다는 것을 알고 있습니다. 
              저희 회사에서는 좋은 치과 의료용 소프트웨어를 지속적으로 개발하여 선생님들의 노고를 조금이나마 덜어드리기 위해 노력하겠습니다. 
              모쪼록 선생님들의 가정에 늘 행운이 함께 하시고 가족 모두 건강하시기를 기원드립니다.<br /><br />
              
              감사합니다.
            </p>
          </div>
          <div className="relative mt-12 col-span-12 md:col-span-6 flex items-center">
            <div className="z-10 mx-auto w-full justify-center">
              <Image
                className="w-full"
                src={ceoImage}
                alt={""}
              />
              <h3 className="mt-6 font-medium text-gray-200 text-center">
                Ahn Jang-hoon, CEO
              </h3>
            </div>
          </div>
        </div>

      </Container>
    </section>
  )
}
