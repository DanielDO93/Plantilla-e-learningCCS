import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import withAuth from '../../services/withAuth'
import presentacion from '../../assets/img/img-cursoQA/presentacion.jpg'

class PresentacionView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn pt-3">
            <Card>
              <CardHeader className="text-justify">
                <h3>Presentación</h3>
              </CardHeader>
              <CardBody className="">
                <Row>
                  <Col xs="12">
                    <h4>Alcance</h4>
                    <p className="cajaA1">
                      Este procedimiento es aplicable al personal de todas las
                      áreas, así como a cualquier proyecto que CCS le
                      proporcione el servicio de calidad.<br></br>
                      Esta metodología aplica para todos los canales de
                      interacción.
                    </p>
                  </Col>
                  <Col xs="12">
                    <p className="text-center">
                      <img
                        src={presentacion}
                        style={{ width: 360 }}
                        alt="presentacion"
                        className="img-fluid bordeImagen"
                      />
                    </p>
                  </Col>
                  <Col xs="12">
                    <h4>Referencia</h4>
                    <p className="cajaA2">
                      <ul>
                        <li>Norma NMX-CC-9001-IMNC vigente. </li>
                        <li>Manual de Calidad y Seguridad de Información</li>
                      </ul>
                    </p>
                  </Col>
                </Row>
              </CardBody>
            </Card>
      </div>
    )
  }
}
export default withAuth(PresentacionView)
