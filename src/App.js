import { useState } from 'react';
import './App.scss';
import { CandidatesList } from './candidates';
import Contact from "./components/Contacts/Contact";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Summary from "./components/Summary/Summary";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import {Container, Grid, Button} from '@mui/material';
import myImage from './images/me.jpg';
import PersonIcon from '@mui/icons-material/Person';

function App() {

    const [state, setState] = useState(CandidatesList[0]);

    const candidates = CandidatesList.map( (person) => {
        return (
             <Button
                key={ person.id }
                startIcon={ <PersonIcon /> }
                variant="contained"
                size="large"
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
            <Container className="candidates-block">
                <Grid container sx={{ mb: 2, mt: 2 }}>
                    <Grid item lg={ 12 }>{ candidates }</Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={3} md={3} sm={12} xs={12} className="candidate-quick-info">
                        <img src={ myImage } className="candidate-image" alt={ state.fullName } />
                        <h2>{ state.fullName }</h2>
                        <h5>{ state.activePosition }</h5>
                        { state.contact && <Contact contact={ state.contact } iconSize={ 20 } /> }
                    </Grid>
                    <Grid item lg={9} md={9} sm={12} xs={12} className="candidate-full-info">
                        <Grid container>
                            <Grid item lg={6} className="candidate-about-block">
                                { state.summary && <Summary summary={ state.summary } name={ state.fullName } /> }
                            </Grid>
                            <Grid item lg={6} className="candidate-about-additional-block">
                                <About
                                    fullName={ state.fullName }
                                    birthday={ state.birthday }
                                    language={ state.language }
                                    nationality={ state.nationality }
                                    interest={ state.interest }
                                />
                            </Grid>
                        </Grid>
                        <Grid container sx={{ mt: 5, fontSize: 16 }} className="candidate-other-block">
                            <Grid item lg={3}>
                                { state.education && <Education education={ state.education } iconSize={ 50 } /> }
                            </Grid>
                            <Grid item lg={6}>
                                { state.experience && <Experience experience={ state.experience } iconSize={ 50 } /> }
                            </Grid>
                            <Grid item lg={3}>
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
