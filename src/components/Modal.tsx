import Link from "next/link"
import { Dispatch, SetStateAction } from "react"
import modalImage from '@/images/hero/modal.png'
import Image from "next/image"
import { XMarkIcon } from '@heroicons/react/20/solid'

export function Modal({
  onClose
}: {
  onClose: Dispatch<SetStateAction<boolean>>
}) {

  return (
    <div className="z-50 fixed inset-0 bg-gray-800 bg-opacity-70 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="w-2/3 border border-gray-400 xs:w-1/3 md:w-2/5 xl:w-1/4 shadow-lg rounded-md bg-white">
        <div className="">
          <h3 className="p-0 text-sm text bg-gray-400 m-0">
            <Link href="/" onClick={() => onClose(false)}>
              <XMarkIcon className="p-1 h-8 w-8 text-white" />
            </Link>
          </h3>
          <div className="mt-2 px-2 py-2">
            <Image
              className="w-full"
              src={modalImage}
              alt={""}
              priority={false}
            />            
          </div>
          <div className="flex justify-center mt-0">

            {/* Navigates back to the base URL - closing the modal */}
            <Link
              href="https://forms.gle/zomMStTYqeXVeRzw8"
              onClick={() => onClose(false)}
              className="m-2 px-4 py-2 w-full text-center bg-ainbg-primary text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              사전등록 신청하기
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
