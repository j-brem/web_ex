import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div class="flex flex-col ">
      <Header />
      <main className="relative bg-ainbg-secondary">{children}</main>

      <Footer className="overflow-hidden bg-grey-100"></Footer>
      </div>
    </>
  )
}
