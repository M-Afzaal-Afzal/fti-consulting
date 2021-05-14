import React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";
import {SwiperSlide} from "swiper/react";

const CarouselSlide = ({heading,imgSrc,body}) => {
    return (
        <>
        <SwiperSlide>

            <Box
                _hover={{cursor: 'pointer'}}
                w={'100%'}
                h={'30rem'}
                bg={`linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${imgSrc}) center/cover`}
                display={'flex'}
                alignItems={'flex-end'}
            >

                <Box px={24} py={24}>
                    <Heading
                        as={'h5'}
                        letterSpacing={'1px'}
                        textTransform={'uppercase'}
                        fontFamily={'Fjalla One'}
                        fontSize={'27px'}
                        color={'white'}
                    >
                        {heading}
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
                        {body}
                    </Text>

                </Box>

            </Box>
        </SwiperSlide>
        </>
    );
};

export default CarouselSlide;