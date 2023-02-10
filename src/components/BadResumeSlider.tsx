import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/a11y';
import { Navigation, Pagination, Scrollbar, A11y, EffectCreative } from 'swiper';
import { Col, styled, Image, Avatar, Row } from '@nextui-org/react';

const BadResumeSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(1)

    return (
        <Col>
            <AvatarContainer>
                <Avatar rounded src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                    css={{
                        size: '$18',
                        '@sm': {
                            size: '$20'
                        }
                    }}
                />
                <BubbleImage src={`src/assets/bad-resume-slider/bubble-${currentSlide}.svg`}

                />
            </AvatarContainer>
            <SliderContainer>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCreative]}
                    effect='creative'
                    spaceBetween={50}
                    slidesPerView={1}
                    creativeEffect={{
                        prev: {
                            translate: [0, 0, -400],
                        },
                        next: {
                            translate: ["100%", 0, 0],
                        },
                    }}
                    navigation={{ enabled: false }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
                >
                    <SwiperSlide>
                        <img src='src/assets/bad-resume-slider/resume-1.svg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='src/assets/bad-resume-slider/resume-2.svg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='src/assets/bad-resume-slider/resume-3.svg' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='src/assets/bad-resume-slider/resume-4.svg' />
                    </SwiperSlide>


                </Swiper>
            </SliderContainer>
        </Col>
    )
}

const BubbleImage = styled('img', {
    position: 'absolute',
    left: 20,
    bottom: 60,
    '@sm': {
        left: 150,
        bottom: 40,
    }
})

const SliderContainer = styled('div', {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
        height: 'clamp(500px, 60vh, 900px)',
        pt: 20,
        pb: 30,
        marginInline: 'auto',
        width: '100%'
    }
})

const AvatarContainer = styled(Row, {
    position: 'relative',
    width: '100%',
    paddingLeft: 0,
    pt: 100,
    '@sm': {
        paddingLeft: 100,
        pt: 0
    }
})

export default BadResumeSlider