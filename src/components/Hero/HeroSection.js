import React from 'react';
import {Box, Heading} from "@chakra-ui/react";

const HeroSection = () => {
    return (
        <Box width={'100%'}>
            {/* Image container*/}
            <Box width={'100%'}
                 height={'100vh'}
                 minH={'800px'}
                 position={"relative"}
                 bg={'linear-gradient(to right bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(https://fticommunications.com/wp-content/uploads/2020/04/brand_images_corporate_office_buildings_A4-scaled.jpg) center/cover'}
                 pt={'30vh'}
                 backgroundAttachment={['unset',null,'fixed']}
            >
                {/*<Image*/}
                {/*    src={'https://fticommunications.com/wp-content/uploads/2020/04/brand_images_corporate_office_buildings_A4-scaled.jpg'}*/}
                {/*    layout={'fill'}*/}
                {/*    objectFit={'cover'}*/}
                {/*/>*/}

            {/*  content box */}

                <Box
                    margin={'0px auto 80px auto'}
                    border={'3px solid #fff'}
                    maxWidth={['310px',null,null,'452px']}
                    padding={'40px 30px'}
                >
                    <Heading
                        fontSize={['75px',null,null,'118px']}
                        fontFamily={'Fjalla One'}
                        fontWeight={'normal'}
                        letterSpacing={'1px'}
                        as={'h1'}
                        textAlign={'center'}
                        color={'#fff'}
                        lineHeight={1.1}
                        textTransform={'uppercase'}
                    >
                        Abyan<br/>
                        <Box
                            fontWeight={'bolder'}
                            fontFamily={'Fjalla One'}
                            display={'inline-block'}
                            fontSize={['60px',null,null,'85px']}
                        >
                            Global Strategies
                        </Box>
                    </Heading>

                    <Heading as={'h2'}
                             fontSize={['22px',null,null,'24px']}
                             mt={'30px'}
                             color={'white'}
                             fontFamily={'Source Sans Pro'}
                             textAlign={'center'}
                             fontWeight={'normal'}
                    >
                        Manage Change.
                        <br/>
                        Mitigate Risk.
                        <br/>
                        Enhance Market Position.
                    </Heading>

                </Box>


            </Box>


        </Box>
    );
};

export default HeroSection;