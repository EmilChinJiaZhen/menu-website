export const dynamic = "force-dynamic";

import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config'
import { isValidMedia } from '../utils/isValidMedia'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MainCourse from './maincourse'
import MainCourseSwiper from './maincourseswiper'
import SnackCourse from './snack'
import SnackSwiper from './snackswiper'
import Bevarage from './bevarage'
import BevarageSwiper from './bevarageswiper'
import Link from 'next/link'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const homepageData = await payload.findGlobal({ slug: 'homepage' })

  return (
    <>
      {/* Cart Button */}
      <div className="flex justify-end p-4">
        <Link href="/cart">
          <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">
            🛒 Cart
          </button>
        </Link>
      </div>

      <MainCourse content={homepageData.maincourseSection}></MainCourse>
      <MainCourseSwiper content={homepageData.maincourseSection}></MainCourseSwiper>
      <SnackCourse content={homepageData.snackSection}></SnackCourse>
      <SnackSwiper content={homepageData.snackSection}></SnackSwiper>
      <Bevarage content={homepageData.bevarageSection}></Bevarage>
      <BevarageSwiper content={homepageData.bevarageSection}></BevarageSwiper>
    </>
  )
}
