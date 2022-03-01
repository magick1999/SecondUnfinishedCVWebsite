import './App.css';
import HomeComponent from "./Home/HomeComponent";
import NavComponent from "./Nav/NavComponent";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import Background1 from '../src/design resources/background.png';
import ProjectsComponent from "./Projects/ProjectsComponent";
import SkillsComponent from "./Skills/SkillsComponent";
import ExperienceComponent from "./Education And Work Experience/ExperienceComponent";
import FooterComponent from "./Footer/FooterComponent";

const theme = createTheme({
    typography: {
        fontFamily: "Montserrat",
        color: '#EE5C43',
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Box
                    sx={{
                        backgroundImage: `url(${Background1})`,
                        zIndex: '-1',
                    }}
                >
                    {/*white div*/}
                    <NavComponent/>
                    <HomeComponent/>
                    <ProjectsComponent/>
                    <SkillsComponent/>
                    <ExperienceComponent/>
                    <FooterComponent/>
                </Box>
            </div>
        </ThemeProvider>

    );
}

export default App;
