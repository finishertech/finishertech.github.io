import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
  return (
    <Container id="sobre">
      <Row>
        <Col>
          <div className="container-title">
            <h2>Sobre</h2>
          </div>
          <div className="container-body">
            <p>
              A <strong>Finisher.Tech</strong> é uma Startup de tecnologia que une
              duas paixões de <a  href="http://paulojeronimo.com" target="_blank"
              rel="noopener noreferrer">seu fundador</a>:
              a busca pela saúde e bem estar através da prática esportiva cotidiana,
              e o incansável desejo de produzir soluções que usem tecnologias de ponta
              para tornar as pessoas cada vez mais motivadas e disciplinadas
              em seus próprios planos de saúde.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
