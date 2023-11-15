import { useState } from 'react';
import "@fontsource/ibm-plex-sans";
import './App.scss';
import { CandidatesList } from './candidates';
import Contact from "./components/Contacts/Contact";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Summary from "./components/Summary/Summary";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import { Container, Grid, Button, Avatar, Typography } from '@mui/material';
import myImage from './images/me.jpg';
import PersonIcon from '@mui/icons-material/Person';

const white = '#ffffff';
const darkBlue = '#1a253f';
const bodyColor = '#eaf0f7';

function App() {
    const [state, setState] = useState(CandidatesList[0]);

    const candidates = CandidatesList.map( (person) => {
        return (
             <Button
                key={ person.id }
                startIcon={ <PersonIcon sx={{ color: white }} /> }
                variant='contained'
                size='large'
                sx={{
                    mr: 1,
                    fontSize: 12
                }}
                onClick={ () => setState(CandidatesList[person.id]) }>
                  { person.fullName }
              </Button>
        )
    });

    return (
        <div className="App">
            <Container>
                <Grid container sx={{ mb: 2, mt: 2 }}>
                    <Grid item lg={ 12 }>{ candidates }</Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={3} md={3} sm={12} xs={12} sx={{
                        backgroundColor: darkBlue,
                        padding: '30px 5px',
                        position: 'relative',
                        textAlign: 'center',
                        color: white,
                        borderRadius: '5px',
                        maxHeight: '420px',
                    }}>
                        <Avatar
                            alt={ state.fullName }
                            src={ myImage }
                            sx={{
                                width: '120px',
                                height: '120px',
                                margin: '0 auto'
                            }}
                        />
                        <Typography sx={{ fontSize: 24, fontWeight: 'bold', color: bodyColor, mt: 2 }}>{ state.fullName }</Typography>
                        <Typography sx={{ fontSize: 16, color: bodyColor }}>{ state.activePosition }</Typography>
                        { state.contact && <Contact contact={ state.contact } iconSize={ 20 } /> }
                    </Grid>
                    <Grid item lg={9} md={9} sm={12} xs={12} sx={{ padding: '30px', background: white }}>
                        <Grid container spacing={4}>
                            <Grid item lg={6}>
                                { state.summary && <Summary summary={ state.summary } name={ state.fullName } /> }
                            </Grid>
                            <Grid item lg={6}>
                                <About
                                    birthday={ state.birthday }
                                    language={ state.language }
                                    nationality={ state.nationality }
                                    interest={ state.interest }
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item lg={12}>
                                { state.experience && <Experience experience={ state.experience } iconSize={ 50 } /> }
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item lg={6}>
                                { state.education && <Education education={ state.education } iconSize={ 50 } /> }
                            </Grid>
                            <Grid item lg={6}>
                                { state.skills && <Skills skills={ state.skills } /> }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
