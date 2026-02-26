'use client'
import { Homepage } from "@/payload-types";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { isValidMedia } from "../utils/isValidMedia";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from "react";

export default function BevarageSwiper({content}: Readonly<{content: Homepage['bevarageSection']}>) {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="container mx-auto px-4 mt-2 mb-2">
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={5}
        breakpoints={{ // when window width is >= 320px
          0: {
            slidesPerView: 2,
            spaceBetween: 90,
          },
          430: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          // when window width is >= 640px
          700: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 1080px
          1080: {
            slidesPerView: 5,
            spaceBetween: 24,
          },
        }}
      >
        {(content.bevarages ?? []).map((item) => (
          isValidMedia(item.bevaragePicture) && (
            <SwiperSlide key={item.id ?? item.bevarageName}>
              <div className="flex flex-col items-center relative w-48 cursor-pointer" onClick={() => setSelectedItem(item)}>
                {/* <p className="text-sm">
                  RM {item.bevaragePrice}
                </p> */}
                <div className='relative w-48 h-48'>
                  <Image
                    src={item.bevaragePicture.url}
                    fill
                    unoptimized
                    alt={item.bevaragePicture.alt}
                    className="object-cover rounded-xl"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h3 className="mt-2 text-lg font-semibold mb-2">
                  {item.bevarageName}
                </h3>
              </div>
            </SwiperSlide>
          )
        ))}
      </Swiper>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 ml-2 mr-2">
          <div className="bg-gray-700 rounded-lg p-6 max-w-md w-full relative">
            <button className="absolute top-2 right-2 text-white hover:text-black" onClick={() => setSelectedItem(null)}
            >
              ✕
            </button>
            <div className="flex flex-col items-center">
              {/* <p className="text-sm mb-2">RM {selectedItem.bevaragePrice}</p> */}
              <div className="relative w-48 h-48 mb-4">
                <Image src={selectedItem.bevaragePicture.url} fill unoptimized alt={selectedItem.bevaragePicture.alt} className="object-cover rounded-xl" />
              </div>
              <h3 className="mt-2 text-lg font-semibold">
                {selectedItem.bevarageName}
              </h3>
            </div>
            <button
              className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition disabled:opacity-50"
              disabled={loading}
              onClick={async () => {
                setLoading(true);
                try {
                  const res = await fetch("/api/cart/add", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                      name: selectedItem.bevarageName,
                      price: selectedItem.bevaragePrice,
                      imageUrl: selectedItem.bevaragePicture.url,
                    }),
                  });

                  const data = await res.json();
                  alert(`${selectedItem.bevarageName} added to cart`);
                  setSelectedItem(null); // close modal
                } catch (err) {
                  alert("Error adding to cart");
                } finally {
                  setLoading(false);
                }
              }}
            >
              {loading ? "Adding..." : "Add to Cart"}
            </button>
          </div>
        </div>
      )}
    </>
    </div>
  )
}
