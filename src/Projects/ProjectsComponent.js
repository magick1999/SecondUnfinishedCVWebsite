import React, {useState} from 'react';
import {Box, Card, Typography} from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import Temp from '../ComponentTMP_0-image.png';

const HomeComponent = () => {
    const [hoverState, setHoverState] = useState([false, false, false, false]);
    const heights = [300, 250, 310, 260];

    const projects = ["CV 1.0", "Food Review", "Kitchen Nightmare", "Atom8"];
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '6% 0% 6% 0%'
            }}
        >
            <Box
                sx={{
                    margin: '3%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    backgroundColor: 'white',
                }}
            >
                <Box
                    sx={{
                        width: '30%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
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
                            variant="h2"
                            sx={{
                                margin: '8px',
                                fontWeight: '600',
                                color: '#EE5C43'

                            }}
                        >
                            Projects
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                margin: '8px',
                                fontWeight: '400',
                                color: '#EE5C43'
                            }}
                        >
                            blabalblablalbalblasdafgg
                            ggggggggggggggggggggggggg
                            blabalblablalbalblasdafgg
                            ggggggggggggggggggggggggg
                            blabalblablalbalblasdafgg
                            ggggggggggggggggggggggggg
                            blabalblablalbalblasdafgg
                            ggggggggggggggggggggggggg
                            blabalblablalbalblasdafgg
                            ggggggggggggggggggggggggg
                            blabalblablalbalblasdafgg
                            ggggggggggggggggggggggggg
                            blabalblablalbalblasdafgg
                            ggggggggggggggggggggggggg
                            blabalblablalbalblasdafgg
                            ggggggggggggggggggggggggg
                        </Typography>
                    </Card>
                </Box>

                <Box sx={{width: '60%', minHeight: 393, padding: '2%', margin: '8px 0px 0px 0px'}}>
                    <Masonry columns={2} spacing={2}
                    >
                        {projects.map((project, index) => {
                            return (

                                <Box
                                    sx={{
                                        width: '300px',
                                        height: heights[index],
                                    }}
                                    key={index}
                                    onMouseOver={() => {
                                        const newStates = [];
                                        for (let i = 0; i < projects.length; i++) {
                                            newStates[i] = projects[i] === project;
                                        }
                                        setHoverState(newStates)
                                    }}
                                    onMouseOut={() => {
                                        const newStates = [];
                                        for (let i = 0; i < projects.length; i++) {
                                            if (projects[i] === project) {
                                                newStates[i] = false;
                                            } else {
                                                newStates[i] = false;
                                            }
                                        }
                                        setHoverState(newStates)
                                    }}

                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundImage: `url(${Temp})`,
                                            backgroundSize: 'contain',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'end'
                                        }}
                                    >
                                        {
                                            hoverState[projects.indexOf(project)] &&
                                            <Typography
                                                sx={{
                                                    background: 'rgba(240,240,240,0.5) none no-repeat scroll 0 0',
                                                }}
                                            >
                                                {project}
                                            </Typography>
                                        }

                                    </Box>

                                </Box>
                            )
                        })}
                    </Masonry>
                </Box>
            </Box>

        </Box>
    );
}

export default HomeComponent;
