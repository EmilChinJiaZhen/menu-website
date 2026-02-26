'use client'
import { Homepage } from "@/payload-types";


export default function MainCourse({content}: Readonly<{content: Homepage['maincourseSection']}>) {

  return (
    <div className='flex flex-col items-center text-center py-2 ml-2 mr-2'>
      <h1 className='text-3xl font-bold'>
        {content.maincourseTitle}
      </h1>
      <p className='text-lg'>
        {content.maincourseSubtitle}
      </p>
    </div>
  )
}