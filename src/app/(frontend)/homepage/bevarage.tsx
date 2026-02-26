'use client'
import { Homepage } from "@/payload-types";


export default function Bevarage({content}: Readonly<{content: Homepage['bevarageSection']}>) {

  return (
    <div className='flex flex-col items-center text-center py-2 ml-2 mr-2'>
      <h1 className='text-3xl font-bold'>
        {content.bevarageTitle}
      </h1>
      <p className='text-lg'>
        {content.bevarageSubtitle}
      </p>
    </div>
  )
}