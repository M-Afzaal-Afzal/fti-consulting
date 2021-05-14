import React from 'react';
import {Box, Container, Flex, Heading, Text} from "@chakra-ui/react";

const GlobalLeadersSection = () => {
    return (
        <Box>

            <Box
                bg={'linear-gradient(to right, #004182, #8ab8c7)'}
                marginTop={'-100px'}
                w={'100%'}
                // height={'30rem'}
                pt={'16rem'} pb={'6rem'}
                px={4}
                position={'relative'}
            >

                <Box top={['-71', '-82', '-100px', null, null, '-140']} ml={'auto'}
                     w={['99%', null, '90%', '85%', '80%']}
                     position={'absolute'}
                     right={0} zIndex={10}
                >
                    {/*first section*/}
                    <Box p={'16px 0 16px 100px'} bg={'white'} mb={[8, null, 12, 16]}>
                        <Heading fontWeight={'normal'}
                                 color={'#404470'}
                                 fontFamily={'Fjalla One'}
                                 fontSize={['18px', '28px', null, '40px', null, '68px']}
                        >
                            GLOBAL LEADER IN STRATEGIC
                        </Heading>
                    </Box>

                    {/*second section*/}

                    <Box ml={'10%'}
                         p={'16px 0 16px 100px'}
                         bg={'white'}
                    >
                        <Heading fontWeight={'normal'} color={'#404470'}
                                 fontFamily={'Fjalla One'}
                                 fontSize={['18px', '28px', null, '40px', null, '68px']}
                        >
                            COMMUNICATIONS & ADVISORY
                        </Heading>
                    </Box>
                </Box>

                <Container maxWidth={'1200px'}>
                    {/*first box*/}
                    <Flex justify={'center'} alignItems={'center'} wrap={'wrap'}>

                        <Box w={'200px'} margin={4} border={'1px solid white'} p={4} py={16} textAlign={'center'}>
                            <Text
                                fontSize={'18px'}
                                color={'white'}
                                fontFamily={'Source Sans Pro'}
                                lineHeight={1.2}
                                fontWeight={'bolder'}

                            >
                                America’s Best Management Consulting Firms

                            </Text>
                            <Text
                                fontSize={'18px'}
                                color={'white'}
                                fontFamily={'Source Sans Pro'}
                                lineHeight={1.2}
                            >
                                Forbes
                            </Text>

                        </Box>


                    {/*second box*/}


                        <Box w={'200px'} margin={4} border={'1px solid white'} p={4} py={16} textAlign={'center'}>
                            <Text
                                fontSize={'18px'}
                                color={'white'}
                                fontFamily={'Source Sans Pro'}
                                lineHeight={1.2}
                                fontWeight={'bolder'}
                                w={'155px'}
                            >
                                Crisis Management Firm
                            </Text>
                            <Text
                                fontSize={'18px'}
                                color={'white'}
                                fontFamily={'Source Sans Pro'}
                                lineHeight={1.2}
                            >
                                The Deal
                            </Text>

                        </Box>


                    {/*third box*/}

                        <Box w={'200px'} margin={4} border={'1px solid white'} p={4} py={16} textAlign={'center'}>
                            <Text
                                fontSize={'18px'}
                                color={'white'}
                                fontFamily={'Source Sans Pro'}
                                lineHeight={1.2}
                                fontWeight={'bolder'}
                                w={'155px'}
                            >
                                Communications Firm of the Year

                            </Text>
                            <Text
                                fontSize={'18px'}
                                color={'white'}
                                fontFamily={'Source Sans Pro'}
                                lineHeight={1.2}
                            >
                                M&A Advisor
                            </Text>

                        </Box>

                    {/*fourth box*/}

                        <Box w={'200px'} margin={4} border={'1px solid white'} p={4} py={16} textAlign={'center'}>
                            <Text
                                fontSize={'18px'}
                                color={'white'}
                                fontFamily={'Source Sans Pro'}
                                lineHeight={1.2}
                                fontWeight={'bolder'}
                                w={'155px'}
                            >
                                Best
                                Firms to Work For List
                            </Text>
                            <Text
                                fontSize={'18px'}
                                color={'white'}
                                fontFamily={'Source Sans Pro'}
                                lineHeight={1.2}
                            >
                                Consulting Magazine
                            </Text>

                        </Box>


                    {/*fifth box*/}

                        <Box w={'200px'} margin={4} border={'1px solid white'} p={4} py={16} textAlign={'center'}>
                            <Text
                                fontSize={'18px'}
                                color={'white'}
                                fontFamily={'Source Sans Pro'}
                                lineHeight={1.2}
                                fontWeight={'bolder'}
                            >
                                Global Strategy Consulting Firm of the Year
                            </Text>
                            <Text
                                fontSize={'18px'}
                                color={'white'}
                                fontFamily={'Source Sans Pro'}
                                lineHeight={1.2}
                            >
                                M&A Network
                            </Text>

                        </Box>


                    {/*sixth box*/}

                        <Box w={'200px'} margin={4} border={'1px solid white'} p={4} py={16} textAlign={'center'}>
                            <Text
                                fontSize={'18px'}
                                color={'white'}
                                fontFamily={'Source Sans Pro'}
                                lineHeight={1.2}
                                fontWeight={'bolder'}
                                // w={'155px'}
                            >
                                MEA Public Affairs Consultancy of the Year

                            </Text>
                            <Text
                                fontSize={'18px'}
                                color={'white'}
                                fontFamily={'Source Sans Pro'}
                                lineHeight={1.2}
                            >
                                Provoke Media (Holmes Report)
                            </Text>

                        </Box>
                    </Flex>

                </Container>

            </Box>

        </Box>
    );
};

export default GlobalLeadersSection;