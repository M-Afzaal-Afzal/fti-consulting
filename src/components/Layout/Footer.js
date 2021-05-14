import React from 'react';
import {Box, Container, Text} from "@chakra-ui/react";
import Image from "next/image";

const Footer = () => {
    return (
        <Box bg={'#58595b'} p={8}>
            <Container maxWidth={["540px", null, "960px", '1140px']} position={'relative'}>
                <Box
                    display={'flex'}
                    flexDirection={['column',null,null,'row']}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    {/* left icons*/}
                    <Box>
                        <Box position={'relative'} mb={[5,null,null,0]} width={[250, 365, null, 306]}
                             height={[39, 49.28, null, 64.25]}>
                            <Image
                                src={'https://fticommunications.com/wp-content/themes/FTI%20Communications%20Custom%20Theme/assets/img/FTI_Logo_White.svg'}
                                objectFit={'contain'}
                                layout={'fill'}
                            />
                        </Box>
                    </Box>

                    {/*    right icons*/}

                    <Box>
                        <Text color={'#fff'} fontSize={'12px'}>
                            © 2020 FTI Consulting, Inc. All Rights Reserved &nbsp;
                            <a style={{textDecoration:'underline'}} href="#">Privacy Policy</a>
                        </Text>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
