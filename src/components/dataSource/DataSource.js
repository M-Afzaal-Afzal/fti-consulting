import React from 'react';
import {Box, Heading} from "@chakra-ui/react";

const DataSource = () => {
    return (
        <Box w={'100%'}
             bg={'url(https://fticommunications.com/wp-content/uploads/2020/04/shutterstock_1506856664-scaled.jpg)'}
             height={'759px'}

             py={24}
        >
            <Box textAlign={'center'}  px={[4, 8, 16, 24]}>
                <Heading color={'#57585a'} letterSpacing={'1px'} fontSize={['28px', null, '38px', null, '48px']}
                         fontFamily={'Fjalla One'} p={4} bg={'rgba(255, 255, 255, 0.8)'} as={'h1'}
                >
                    YOUR SOURCE FOR DATA, ANALYSIS AND NEWS FROM OUR GLOBAL EXPERTS.
                </Heading>
            </Box>

            {/* Three points container*/}

            <Box>
                {/* first point*/}
                <Box _hover={{cursor: 'pointer'}} mt={'6rem'} ml={'auto'}  p={'22px'} pl={['3rem','5rem','8rem']} w={'80%'} clipPath={'polygon(7% 0, 100% 0%, 100% 99%, 0% 100%)'}
                      bg={'linear-gradient(to left, rgba(43, 166, 192, 0.5), #2ba6c0)'}
                >
                    <Heading
                        fontSize={'27px'}
                        letterSpacing={'1px'}
                        fontFamily={'Fjalla One'}
                        color={'white'}
                        textTransform={'uppercase'}
                        fontWeight={'normal'}
                    >
                        VIEW INSIGHTS
                    </Heading>
                </Box>

                {/* second point*/}
                <Box _hover={{cursor: 'pointer'}} mt={'2rem'} ml={'auto'}  p={'22px'} pl={['3rem','5rem','8rem']} w={'80%'} clipPath={'polygon(7% 0, 100% 0%, 100% 99%, 0% 100%)'}
                     bg={'linear-gradient(to left, rgba(41, 125, 184, 0.5), #297db8)'}
                >
                    <Heading
                        fontSize={'27px'}
                        letterSpacing={'1px'}
                        fontFamily={'Fjalla One'}
                        color={'white'}
                        textTransform={'uppercase'}
                        fontWeight={'normal'}
                    >
                        VIEW NEWS
                    </Heading>
                </Box>

                {/* third point*/}
                <Box _hover={{cursor: 'pointer'}} mt={'2rem'} ml={'auto'}  p={'22px'} pl={['3rem','5rem','8rem']} w={'80%'} clipPath={'polygon(7% 0, 100% 0%, 100% 99%, 0% 100%)'}
                     bg={'linear-gradient(to left, rgba(124, 155, 167, 0.5), #7c9ba7)'}
                >
                    <Heading
                        fontSize={'27px'}
                        letterSpacing={'1px'}
                        fontFamily={'Fjalla One'}
                        color={'white'}
                        textTransform={'uppercase'}
                        fontWeight={'normal'}
                    >
                        VIEW CASE STUDIES
                    </Heading>
                </Box>

            </Box>

        </Box>
    );
};

export default DataSource;