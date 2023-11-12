import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import { CandidatesList } from './candidates';
import Contact from "./components/Contacts/Contact";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Language from "./components/Language/Language";
import Summary from "./components/Summary/Summary";
import Experience from "./components/Experience/Experience";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import myImage from './images/me.jpg';


function App() {
    const [state, setState] = useState(CandidatesList[0]);

    const candidateLists = CandidatesList.map( (person) => {
       return (
             <Button className="candidate-btn" variant='success' onClick={() => setState(CandidatesList[person.id])}>
                  {person.fullName}
              </Button>
       )
    });

    return (
        <div className="App">
            <Container className="candidates-block">
                <Row>
                    <Col lg="12" className="candidates-navigation-block">
                        {candidateLists}
                    </Col>
                </Row>
                <Row>
                    <Col lg="2" className="candidate-quick-info">
                        <img src={myImage} className="candidate-image" alt={state.fullName} />
                        <h1>{state.fullName}</h1>
                        <h4>{state.activePosition}</h4>
                        <Contact contact={state.contact} />
                    </Col>
                    <Col lg="10" className="candidate-full-info">
                        <Row>
                            <Col lg="6" className="candidate-about-block">
                                <Summary summary={state.summary} name={state.fullName} />
                            </Col>
                            <Col lg="1"></Col>
                            <Col lg="5" className="candidate-about-additional-block">
                                <div><span>Name: </span>{state.fullName}</div>
                                <div><span>Birthday: </span> {state.birthday}</div>
                                <div><span>Spoken Language: </span><Language language={state.language} /></div>
                                <div><span>Nationality: </span>{state.nationality}</div>
                                <div><span>Interest: </span>{state.interest}</div>
                            </Col>
                        </Row>
                        <Row className="candidate-other-block">
                            <Col lg="3">
                                <Education education={state.education} />
                            </Col>
                            <Col lg="6">
                                <Experience experience={state.experience} />
                            </Col>
                            <Col lg="3">
                                <Skills skills={state.skills} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
