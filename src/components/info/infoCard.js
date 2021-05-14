import React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";

const InfoCard = ({heading,body,imgSrc,borderRight,borderLeft}) => {
    return (
        <Box transition={'all 0.6s'} _hover={{opacity: .9,cursor: 'pointer'}} w={'100%'} flexGrow={1} p={'4rem 2rem'}
             bg={'linear-gradient(to right bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)),' +
             ` url(${imgSrc}) center/cover`}
             borderTop={'3px solid #fff'}
             borderBottom={'3px solid #fff'}
             borderRight={borderRight && '1.5px solid #fff'}
             borderLeft={borderLeft &&  '1.5px solid #fff'}
        >

            <Heading
                letterSpacing={1}
                fontFamily={'Fjalla One'}
                as={'h5'}
                fontSize={'27px'}
                textTransform={'uppercase'}
                color={'#fff'}
                textShadow={'#000 0px 0px 5px'}
            >
                {heading}
            </Heading>

            <Text mt={8} color={'white'}>
                {body}
            </Text>
        </Box>
    );
};

export default InfoCard;