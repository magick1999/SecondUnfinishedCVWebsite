import TagCloud from 'react-tag-cloud';
import {createTheme, Typography} from "@mui/material";
import React, {Component} from 'react';

const theme = createTheme({
    typography: {
        fontFamily: "Montserrat",
        color: '#EE5C43',
    },
});


const styles = {
    large: {
        fontSize: 60,
        fontWeight: 'bold'
    },
    small: {
        opacity: 0.7,
        fontSize: 16
    }
};
const skills = ["JavaScript", "ReactJS", "Java", "Back-end Frameworks", "Kotlin", "Ruby", "Full-Stack", "AWS Certified Developer"];

class TagCloudComponent extends Component {
    componentDidMount() {
        setInterval(() => {
            this.forceUpdate();
        }, 5000);
    }


    render() {
        return (
            <TagCloud
                className='tag-cloud'

                style={{
                    flex: '1',
                    fontFamily: 'Montserrat',
                    fontSize: 30,
                    fontWeight: 600,
                    color: '#EE5C43',
                    padding: 10,
                    margin: '10px',
                    height: '100%',
                    width: '60%',
                }}>
                {skills.map(skill => {
                    return (
                        <Typography
                            sx={{
                                color: '#EE5C43'
                            }}
                        >
                            {skill}
                        </Typography>
                    )
                })}
            </TagCloud>
        );
    }
}

export default TagCloudComponent;


// const TagCloudComponent = () => {
//
//     const skills = ["JavaScript", "ReactJS", "Java", "Back-end Frameworks", "Kotlin", "Ruby", "Full-Stack", "AWS Certified Developer"];
//
//     return (
//         <ThemeProvider theme={theme}>
//             <TagCloud
//                 style={{
//                     flex: '1',
//                     fontFamily: 'Montserrat',
//                     fontSize: 30,
//                     fontWeight: 600,
//                     color: '#EE5C43',
//                     padding: 10,
//                     margin: '10px',
//                     height: '100%',
//                     width: '60%',
//                 }}>
//                 {skills.map(skill => {
//                     return(
//                         <Typography
//                             sx={{
//                                 color: '#EE5C43'
//                             }}
//                         >
//                             {skill}
//                         </Typography>
//                     )
//                 })}
//             </TagCloud>
//         </ThemeProvider>
//
//     );
// }
//
//
// export default TagCloudComponent;
