import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Card from '../components/Card'

export default function index (): React.ReactChild {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>{' '}
        <Col>
          <Card></Card>
        </Col>
      </Row>
    </Container>
  )
}
