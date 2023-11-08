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
import { Card } from 'react-bootstrap';


function App() {
    const [state, setState] = useState(CandidatesList[0]);

    const candidateButton = CandidatesList.map( (person) => {
       return (
           <Card style={{ width: '18rem' }} key={person.fullName}>
             <Card.Body>
               <Card.Title>{person.fullName}</Card.Title>
               <Card.Subtitle className="mb-2 text-muted">{person.activePosition}</Card.Subtitle>
               <Button
                  variant = {person.id === state.id ? 'primary' : 'light'}
                  onClick = {() => {
                      setState(CandidatesList[person.id]);
                  }}
              >
                  Click
              </Button>
             </Card.Body>
           </Card>
       )
    });

    return (
        <div className="App">
            <Container>
                <Row>
                    <Col lg="2">
                        {candidateButton}
                    </Col>
                    <Col lg="7">
                        <h1>{state.fullName}</h1>
                        <h3>{state.activePosition}</h3>
                        <Summary summary={state.summary} />
                        <Experience experience={state.experience} />
                    </Col>
                    <Col lg="3" className="left-person-block">
                        <Contact contact={state.contact} />
                        <Skills skills={state.skills} />
                        <Education education={state.education} />
                        <Language language={state.language} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
