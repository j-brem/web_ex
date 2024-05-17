'use client'

import { useId } from 'react'
import ReactPlayer from 'react-player'

export default function cbct() {
 

  return (
    <section
    id="cbct"
    className="mx-4 grid max-w-mx grid-cols-1 items-start gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32  lg:grid-cols-3 lg:max-w-full"
  >

  <div class="grid lg:grid-cols-1 gap-y-2 sm:grid-cols-1 sm:gap-y-46 lg:gap-x-4">
          <h1 className="text-3xl font-bold tracking-tight text-gray-50">
          CBCT 촬영법
          </h1>

            <a href="https://drive.google.com/file/d/1HJybymVa3NxcJDNmirOH0nsu3GBDWF0K/view?usp=sharing"  
            target='_blank' className="text-gray-200 lg:mx-0 underline py-2">
            다운로드</a>

        </div>


        <div className="sm:col-span-full lg:col-span-2 gap-4 sm:gap-6 lg:gap-8 flex justify-center rounded-lg bg-gray-800 ">

  
        <ReactPlayer 
            className="w-full h-full object-cover "
          url='https://youtu.be/ZKjW-JfD0TA' light={true} />

          </div>

  
          </section>  
)

}
