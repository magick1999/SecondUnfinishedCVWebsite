import React from 'react';
import {Box, Card, Typography} from "@mui/material";
import TagCloudComponent from "./TagCloudComponent";

const SkillsComponent = () => {

    return (
        <Box
            sx={{
                margin: '5% 5% 20% 5%',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
            }}>
            <Typography>
                In the following section I will be presenting my skills and my two main interests
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'horizontal',
                    height: '768px'
                }}
            >
                <Box
                    sx={{
                        width: '40%',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        flexDirection: 'column'
                    }}
                >
                    <Card
                        sx={{
                            width: '100%',
                            height: '300px',
                            background: 'rgba(238,92,67,0.8)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            padding: '2%',
                            boxShadow: '10px 10px 25px 10px rgba(0,0,0,0.37)'
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'white'
                            }}
                            variant='h3'
                        >
                            Web Development
                        </Typography>
                        <Typography
                            sx={{
                                color: 'white'
                            }}
                            variant='body1'
                        >
                            My passion from web development comes from the desire to deliver a good user experience.
                            I have always been fascinated by UI/UX design. At it's core this means to understand
                            human behaviour and provide software based on how humans think in order to minimize
                            friction and maximize user interaction towards the businesses goal.
                        </Typography>
                    </Card>
                    <Card
                        sx={{
                            width: '100%',
                            height: '300px',
                            background: 'rgba(255,160,122,0.8)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            padding: '2%',
                            boxShadow: '10px 10px 25px 10px rgba(0,0,0,0.37)'
                        }}
                    >
                        <Typography
                            sx={{
                                color: 'white'
                            }}
                            variant='h3'
                        >
                            Cloud Computing
                        </Typography>
                        <Typography
                            sx={{
                                color: 'white'
                            }}
                            variant='body1'
                        >
                            Nowadays the main focus is on building software quickly and in an agile way.
                            This requires providing resources such as servers in a time and
                            cost efficient manner and in my vision the cloud is the answer to that.
                            Going from an idea to reality has never been easier, doing that with
                            traditional infrastructure can be so expensive that some ideas never go
                            past their initial stage.
                        </Typography>
                    </Card>
                </Box>

                <TagCloudComponent/>
            </Box>
        </Box>

    );
}

export default SkillsComponent;
