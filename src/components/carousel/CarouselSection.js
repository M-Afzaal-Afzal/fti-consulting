import React from 'react';

import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
// import styles from './swiper.css';

import SwiperCore, {
    Pagination,
    Navigation,
    Autoplay
} from 'swiper/core';
import {Swiper, SwiperSlide} from "swiper/react";
import {Box, Heading, Text} from "@chakra-ui/react";


// install Swiper modules
SwiperCore.use([Autoplay,Pagination, Navigation]);

const CarouselSection = () => {
    return (
        <Swiper
            pagination={{
                "clickable": true
            }}
            navigation={true}
            className="mySwiper"
            autoplay={{
                "delay": 2500,
                "disableOnInteraction": false
            }}
        >

            {/*  Slide one */}

            <SwiperSlide>

                <Box
                    _hover={{cursor: 'pointer'}}
                    w={'100%'}
                    h={'45rem'}
                    bg={'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://fticommunications.com/wp-content/uploads/2021/02/GettyImages-461053917-scaled.jpg) center/cover'}
                    display={'flex'}
                    alignItems={'flex-end'}
                >

                    <Box px={[12,16,24]} py={[12,16,24]}>
                        <Heading
                            as={'h5'}
                            letterSpacing={'1px'}
                            textTransform={'uppercase'}
                            fontFamily={'Fjalla One'}
                            fontSize={'27px'}
                            color={'white'}
                        >
                            Rough Seas or Calm Waters?
                        </Heading>

                        <Text
                            color={'white'}
                            maxWidth={'1040px'}
                            textShadow={'#000 0px 0px 5px'}
                            fontFamily={'Source Sans Pro'}
                            fontWeight={'normal'}
                            fontSize={'16px'}
                            mt={8}
                        >
                            With the United States’ firm hold as the world’s top natural gas producer and an increasing
                            focus of other nations seeking to solve the simultaneous economic growth and climate
                            challenge, a clear opportunity exists for continued U.S. leadership in global LNG markets.
                        </Text>

                    </Box>

                </Box>
            </SwiperSlide>

            {/*  Slide Two */}

            <SwiperSlide>

                <Box
                    _hover={{cursor: 'pointer'}}
                    w={'100%'}
                    h={'45rem'}
                    bg={'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://fticommunications.com/wp-content/uploads/2020/11/Capture.png) center/cover'}
                    display={'flex'}
                    alignItems={'flex-end'}
                >

                    <Box px={[12,16,24]} py={[12,16,24]}>
                        <Heading
                            as={'h5'}
                            letterSpacing={'1px'}
                            textTransform={'uppercase'}
                            fontFamily={'Fjalla One'}
                            fontSize={'27px'}
                            color={'white'}
                        >
                            IR Monitor – 22nd February 2021
                        </Heading>

                        <Text
                            color={'white'}
                            maxWidth={'1040px'}
                            textShadow={'#000 0px 0px 5px'}
                            fontFamily={'Source Sans Pro'}
                            fontWeight={'normal'}
                            fontSize={'16px'}
                            mt={8}
                        >
                            We begin by looking at how the increasing demand for “sustainable” investment is prompting
                            managers to change strategy, or at least the branding, when it comes to European funds. We
                            then turn to Institutional Investor magazine to find out which companies fixed-income
                            investors favoured in 2020. Next, we revisit the future of the office, highlighting that
                            long-term investors continue to acquire offices in major cities. Then, we look at reports
                            that suggest corporate dealmakers are likely to have overpaid in 2020. In addition, we
                            examine the recent global fund manager survey that found investor confidence is soaring with
                            the focus now wholly shifted to capital expenditure. Finally, we note the extraordinarily
                            high number of IPOs already in 2021 and the probability that many (if not most) will be
                            unprofitable.
                        </Text>

                    </Box>

                </Box>
            </SwiperSlide>

            {/*  Slide Three */}

            <SwiperSlide>

                <Box
                    _hover={{cursor: 'pointer'}}
                    w={'100%'}
                    h={'45rem'}
                    bg={'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://fticommunications.com/wp-content/uploads/2021/02/GettyImages-1205569631-scaled.jpg) center/cover'}
                    display={'flex'}
                    alignItems={'flex-end'}
                >

                    <Box px={[12,16,24]} py={[12,16,24]}>
                        <Heading
                            as={'h5'}
                            letterSpacing={'1px'}
                            textTransform={'uppercase'}
                            fontFamily={'Fjalla One'}
                            fontSize={'27px'}
                            color={'white'}
                        >
                            ESG+ Newsletter – 18th February 2021
                        </Heading>

                        <Text
                            color={'white'}
                            maxWidth={'1040px'}
                            textShadow={'#000 0px 0px 5px'}
                            fontFamily={'Source Sans Pro'}
                            fontWeight={'normal'}
                            fontSize={'16px'}
                            mt={8}
                        >
                            In this week’s ESG+ we highlight a number of strategic climate-related announcements
                            including BlackRock’s stewardship update outlining its expectations of transparent climate
                            risk reporting and target-setting; moves by the Biden administration to model the cost of
                            greenhouse gas emissions on human health and society; and how climate considerations are
                            affecting the aviation sector. Also, in the spotlight: the growth of ESG investment;
                            diversity and inclusion as a driver of voting decisions; and the investment implications of
                            slowly evolving corporate governance in Japan.
                        </Text>

                    </Box>

                </Box>
            </SwiperSlide>

            {/*  Slide Four */}

            <SwiperSlide>

                <Box
                    _hover={{cursor: 'pointer'}}
                    w={'100%'}
                    h={'45rem'}
                    bg={'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://fticommunications.com/wp-content/uploads/2020/12/GettyImages-1177967778-1.jpg) center/cover'}
                    display={'flex'}
                    alignItems={'flex-end'}
                >

                    <Box px={[12,16,24]} py={[12,16,24]}>
                        <Heading
                            as={'h5'}
                            letterSpacing={'1px'}
                            textTransform={'uppercase'}
                            fontFamily={'Fjalla One'}
                            fontSize={'27px'}
                            color={'white'}
                        >
                            Putting Yourself Back in the Narrative: A Return to Proactive Storytelling
                        </Heading>

                        <Text
                            color={'white'}
                            maxWidth={'1040px'}
                            textShadow={'#000 0px 0px 5px'}
                            fontFamily={'Source Sans Pro'}
                            fontWeight={'normal'}
                            fontSize={'16px'}
                            mt={8}
                        >
                            For many corporations in the past year, business plans were upended and communications
                            strategies pivoted to address the pressing issues of COVID-19 and other challenges related
                            to market conditions, outcries for racial justice, and a divisive presidential election.
                        </Text>

                    </Box>

                </Box>
            </SwiperSlide>

        </Swiper>
    );
};

export default CarouselSection;