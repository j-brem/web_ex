
import { Container } from '@/components/Container'
import Image from 'next/image'
import patentImage from '@/images/company/patent.png'
import treatiseImage from '@/images/company/treatise.png'
import bookImage from '@/images/company/book.png'

export function Docs() {

  return (
    <section
      id="docs"
      className="relative overflow-hidden py-20 sm:py-32 bg-ainbg-secondary"
    >
      <Container>
        <div className="max-w-3xl lg:mx-0">
          <h1 className="text-3xl font-semibold tracking-tight text-gray-50">
          사용 매뉴얼
          </h1>
        </div>
        
        <div className="mt-12 space-x-8 flex justify-center">
          <Image
            className="w-1/4"
            src={patentImage}
            alt={""}
          />
          <Image
            className="w-1/4"
            src={treatiseImage}
            alt={""}
          />
          <Image
            className="w-1/4"
            src={bookImage}
            alt={""}
          />
        </div>
      </Container>
      </section>


    
  )
  
}
