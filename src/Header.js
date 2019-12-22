import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Header.css'

const Header = _ =>
  <header className="masthead">
    <Container>
      <Row className="text-center">
        <Col>
          <h1 className="text-white text-uppercase font-weight-bold">
            Inteligência Artificial e Blockchain
          </h1>
          <h2 className="text-white">
            Aplicadas a Bem Estar, Saúde e Esportes
          </h2>
        </Col>
      </Row>
    </Container>
  </header>

export default Header
