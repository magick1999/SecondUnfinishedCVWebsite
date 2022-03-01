import React, {useState} from 'react';
import {Box, CardMedia, Typography} from "@mui/material";
import Logo from '../design resources/logo.svg';

export default function NavComponent(props) {
    const {sections, changeScreen} = props;

    const [currentTab, setCurrentTab] = useState(0);

    const onTabChange = (event, newValue) => {
        setCurrentTab(newValue);
    };
    const tabs = ["Home", "Work Experience", "Projects", "Education", "Skills", "Contact"]
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'horizontal',
            width: '-webkit-fill-available',
            margin: '2%',
        }}>
            <CardMedia
                component="img"
                height="40"
                image={Logo}
                alt="Logo"
                sx={{
                    width: "fit-content",
                }}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'horizontal',
                    justifyContent: 'flex-end'
                }}
            >
                {tabs.map(tabName => {
                    return (<Typography
                            sx={{
                                margin: '8px',
                                fontWeight: '600',
                                color: '#EE5C43'

                            }}
                        >
                            {tabName}
                        </Typography>
                    )
                })}
                <Typography
                    sx={{
                        margin: '8px',
                        fontWeight: '600',
                        color: '#EE5C43'
                    }}>
                    Resume
                </Typography>
            </Box>


        </Box>
    );
}
