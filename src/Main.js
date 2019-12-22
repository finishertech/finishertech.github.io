import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Main.css'
import events from './events'

const Main = _ =>
  <main role="main">
    {
      events.map((event) =>
        <Container id={event.id} key={event.key}>
          <Row>
            <Col>
              <div className="container-title">
                <h2>
                  {event.title}<br/>
                  (<a  href={event.link}
                      target="_blank"
                      rel="noopener noreferrer">
                    {event.subtitle}
                  </a>)
                </h2>
              </div>
              <div
                className="container-body"
                dangerouslySetInnerHTML={{__html: event.body}}>
              </div>
            </Col>
          </Row>
        </Container>
      )
    }
  </main>

export default Main
