import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'


export default function TableWithInputs(props) {

    const { data, setData } = props

    const updateData = (e, idx, id) => {
        let myData = [...data]
        myData[idx].variables[id] = e.target.value
        setData(myData)
    }

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label><h3> Tabla de variables modificable </h3></Form.Label>
                    <Row>
                        {props.data.map((info, idx) => (
                            <Col key={idx} >
                                <Row>   {info.name} </Row>
                                { info.variables ? info.variables.map((variable, id) =>
                                    <Row key={id}>
                                        <Form.Control value={data[idx].variables[id]} id={idx} name={id} onChange={(e) => updateData(e, idx, id)} type="text" />
                                    </Row>
                                ) : null}
                            </Col>
                        ))}
                    </Row>
                </Form.Group>
            </Form>
        </div>


    )
}