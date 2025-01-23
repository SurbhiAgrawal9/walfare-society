import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Community Member",
      image: "https://placehold.co/60x60/3498db/FFFFFF/png?text=SJ",
      content: "ASHA Welfare Society has made an incredible impact in our community. Their dedication to helping families in need is truly inspiring. Through their support, I was able to secure better education for my children.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Volunteer",
      image: "https://placehold.co/60x60/3498db/FFFFFF/png?text=MC",
      content: "Working with ASHA has been a life-changing experience. The organization's commitment to community development and their systematic approach to solving social issues is commendable.",
      rating: 5
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Program Beneficiary",
      image: "https://placehold.co/60x60/3498db/FFFFFF/png?text=PP",
      content: "The support I received from ASHA during difficult times was invaluable. Their team went above and beyond to ensure my family had access to essential resources and opportunities.",
      rating: 5
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Local Business Partner",
      image: "https://placehold.co/60x60/3498db/FFFFFF/png?text=DW",
      content: "Partnering with ASHA has allowed us to make a real difference in the Chelsea neighborhood. Their transparent approach and dedication to sustainable development is truly remarkable.",
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return '⭐'.repeat(rating)
  }

  return (
    <section className="reviews">
      <h2>What People Say About Us</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review-card">
              <div className="review-header">
                <img
                  src={review.image}
                  alt={review.name}
                  className="reviewer-image"
                />
                <div className="reviewer-info">
                  <h4>{review.name}</h4>
                  <p>{review.role}</p>
                </div>
              </div>
              <p className="review-content">{review.content}</p>
              <div className="review-rating">
                {renderStars(review.rating)}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Reviews