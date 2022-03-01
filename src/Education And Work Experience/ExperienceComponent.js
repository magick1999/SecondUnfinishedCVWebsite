import React from 'react';
import {Box, Card, Typography} from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';

const ExperienceComponent = () => {
    return (
        <Box
            sx={{
                padding: '5% 5% 20% 5%',
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: '#EE5C43',
                        textAlign: 'center'

                    }}
                >
                    Work Experience
                </Typography>
                <Typography
                    variant="h4"

                    sx={{
                        color: '#EE5C43',
                        textAlign: 'center'


                    }}
                >
                    Education
                </Typography>
            </Box>
            <Timeline position="alternate">
                <TimelineItem>

                    <TimelineContent>
                        <Card
                            sx={{
                                height: '300px',
                                background: 'rgba(238,92,67,0.8)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                padding: '2%',
                                margin: '5%',
                                boxShadow: '10px 10px 25px 10px rgba(0,0,0,0.37)'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'white',
                                    textAlign: 'center'

                                }}
                                variant='h6'
                            >
                                Mihai Viteazul Bucharest High School
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white',
                                    textAlign: 'center'

                                }}
                                variant='body1'
                            >
                                Mathematics‑Informatics focused courses. Member of the excellency programming club.
                            </Typography>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineContent>
                        <Card
                            sx={{
                                height: '300px',
                                background: 'rgba(238,92,67,0.8)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                padding: '2%',
                                margin: '5%',
                                boxShadow: '10px 10px 25px 10px rgba(0,0,0,0.37)'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'white',
                                    textAlign: 'center'

                                }}
                                variant='h6'
                            >
                                LeuSoft
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white',
                                    textAlign: 'center'

                                }}
                                variant='body1'
                            >
                                Developed various applications for clients in different fields (medical, finance,
                                education) in a diverse team learning about:
                                <br/>

                                • Architectures ( MVC, MVVM )
                                <br/>
                                • Software Development Methodologies and Practices
                                <br/>

                                • Gained useful experience in Kotlin, GSON, Java, XML, Web Technologies, Team
                                Management.
                            </Typography>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineContent>
                        <Card
                            sx={{
                                height: '300px',
                                background: 'rgba(238,92,67,0.8)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                padding: '2%',
                                margin: '5%',
                                boxShadow: '10px 10px 25px 10px rgba(0,0,0,0.37)'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'white',
                                    textAlign: 'center'

                                }}
                                variant='h6'
                            >
                                Swansea University
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white',
                                    textAlign: 'center'

                                }}
                                variant='body1'
                            >
                                Studied the basis of the software development industry by learning to build:
                                <br/>

                                • APIs
                                <br/>
                                • Mobile Applications
                                <br/>

                                • Web Applications
                                <br/>

                                Because my major was called Software Engineering, there was a visible focus on:
                                <br/>

                                • Agile methodologies
                                <br/>

                                • Teamwork
                            </Typography>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineContent>
                        <Card
                            sx={{
                                height: '300px',
                                background: 'rgba(238,92,67,0.8)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                padding: '2%',
                                margin: '5%',
                                boxShadow: '10px 10px 25px 10px rgba(0,0,0,0.37)'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'white',
                                    textAlign: 'center'

                                }}
                                variant='h6'
                            >
                                Driver and Vehicle Licensing Agency
                            </Typography>
                            <Typography

                                sx={{
                                    color: 'white',
                                    textAlign: 'center'

                                }}
                                variant='body1'
                            >
                                • Worked on multiple projects such as a full stack internal application deployed on
                                Amazon AWS. I was also assigned to write an end to end
                                automation pack from scratch, only with brief instructions from a manual tester.
                                <br/>
                                • Gained useful experience in React, RubyOnRails, AWS, RSpec, Capybara, PostgreSQL,
                                Teamwork, Agile.
                            </Typography>
                        </Card>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    );
}

export default ExperienceComponent;
