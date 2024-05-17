import { Container } from '@/components/Container'
import { LogoFooter } from '@/components/Logo'


function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className=" border-t border-gray-200  bg-grey-100 inset-x-0 bottom-0">
      <Container>
        <div className="md:flex items-start justify-between gap-y-10 pb-6 pt-12 lg:flex-row lg:items-center lg:py-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center text-gray-900">
              <LogoFooter className="h-6 w-auto" />
              <div className="ml-4">
                <p className="text-base font-semibold">AInsight Co. Ltd.</p>
                <p className="mt-0 text-sm">AI dental solution software</p>
              </div>
            </div>

          </div>
          <div className="text-gray-900">
            <div className="text-base font-semibold">대표자: 안장훈</div>
            <div className="mt-0 text-sm">사업자등록번호: 658-86-01914</div>
            <div className="mt-0 text-sm">전화: 02 2677-3579 이메일 admin@ainsightortho.com</div>
            <div className="mt-0 text-sm">본사: 서울특별시 구로구 경인로 661, 104동 1112호 (신도림푸르지오1차)</div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
