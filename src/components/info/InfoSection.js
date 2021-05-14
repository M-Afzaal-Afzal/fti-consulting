import React, {Component} from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";
import InfoCard from "./infoCard";

class InfoSection extends Component {
    render() {
        return (
            <Box>

                <Box display={'flex'} flexDirection={['column',null,null,'row']}>

                    {/* left side*/}

                    <InfoCard
                        heading={'The Reddit Rally: What the Short Squeeze Saga Means for your Company’s Reputation'}
                        imgSrc={'https://fticommunications.com/wp-content/uploads/2021/02/GettyImages-1220909109-scaled.jpg'}
                        body={'A few weeks ago, the share price of select stocks skyrocketed thanks to heightened demand from retail investors in a forum called WallStreetBets on social media platform Reddit, betting against hedge funds that had heavily shorted them. Some shares hit their all-time high after trending on social media. These stocks’ spike in value was not due to any material changes within the companies or any macroeconomic events, but instead was a product of the moral beliefs of a group of people online, who decided to squeeze funds out of a short position that was publicly disclosed. A stock rally like this is not limited to any one industry or timeline. Here are a few broader implications of the short squeeze saga on corporate reputation.'}
                        />

                {/*    right side*/}

                   <InfoCard heading={'Embracing the Next Normal: Six Key Questions Every Executive Team Should Be Asking'}
                             body={'In a year wrought with uncertainty, one thing has remained constant: the need to adapt. We’ve been evolving with the realities of the COVID-19 pandemic on a global scale and are experiencing a reawakening on issues related to social justice, climate change and a search for purpose. The call for action is reverberating across all aspects of our economy, even as more questions surface. But unlike the evolutions we’ve experienced in the past, success in the year ahead cannot be driven from the board room alone. The conversation is more nuanced and more personal – and those companies most likely to thrive in the next normal will be those who are able to connect with employees on a personal level and embed a change capability into their corporate culture.'}
                             imgSrc={'https://fticommunications.com/wp-content/uploads/2021/02/image-for-story.jpg'}
                   />

                </Box>
            </Box>
        );
    }
}

export default InfoSection;