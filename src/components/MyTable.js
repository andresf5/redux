import React from 'react'
import { Table, TextField } from 'react-bootstrap'

export default function MyTable(props) {

    return (
        <div>
            <h3> Tabla solo para visualización  </h3>

            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    {props.info.map((category, idx) => (
                        <tr key={idx}>
                            <td> {category.name} </td>
                            { category.variables ? category.variables.map((variable, id) => <td key={id}> {variable} </td>) : null}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

    )
}