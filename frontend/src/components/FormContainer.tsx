import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

interface FormContainerProps {}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <Container className='my-3'>
      <Row className='justify-content-md-center '>
        <Col xs={16} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
