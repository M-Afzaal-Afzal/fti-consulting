import React from 'react';
import {Box, Container} from "@chakra-ui/react";
import Image from 'next/image';
import HeaderButton from "../Buttons/HeaderButton";
import {useMediaQuery} from "@chakra-ui/react";


const Header = () => {

    const [isLargerThan992] = useMediaQuery("(min-width: 992px)")

    return (
        <>
            {/*<Box display={'flex'} justifyContent={'flex-end'}>*/}

            {/*</Box>*/}
            <Box position={'fixed'} zIndex={999} w={'100%'} bg={'rgba(118, 151, 176, 0.6)'} borderBottom={'1px solid #fff'}>

                <Container maxWidth={["540px", null, "960px"]} position={'relative'}>
                    <Box
                        display={'flex'}
                        flexWrap={'nowrap'}
                        justifyContent={['flex-start','space-between']}
                        alignItems={'center'}
                        w={"100%"}
                        h={'80px'}
                    >
                        {/* Left icons*/}
                        <Box>
                            <Box position={'relative'} width={[250,365, null, 306]}
                                 height={[39, 49.28, null, 64.25]}>
                                <Image
                                    src={'https://fticommunications.com/wp-content/themes/FTI%20Communications%20Custom%20Theme/assets/img/FTI_Logo_White.svg'}
                                    objectFit={'contain'}
                                    layout={'fill'}
                                />
                            </Box>
                        </Box>

                        {/* Right icons*/}

                        {
                            isLargerThan992 && (
                                <Box>
                                    <HeaderButton>
                                        About
                                    </HeaderButton>

                                    <HeaderButton>
                                        Practices & Sectors
                                    </HeaderButton>

                                    <HeaderButton>
                                        Trending Topics
                                    </HeaderButton>

                                    <HeaderButton>
                                        Newsroom
                                    </HeaderButton>
                                </Box>
                            )
                        }

                        {
                            !isLargerThan992 && (
                                <Box _hover={{cursor: 'pointer'}} right={'22px'} top={'30px'} position={'absolute'} >
                                    <Image
                                        src={'https://fticommunications.com/wp-content/themes/FTI%20Communications%20Custom%20Theme/assets/img/hamburger.png'}
                                        width={48}
                                        height={24}
                                    />
                                </Box>
                            )
                        }

                    </Box>
                </Container>

            </Box>
        </>
    );
};

export default Header;
