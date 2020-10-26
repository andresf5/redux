import React, { useEffect, useState } from 'react';
import FormCategory from './FormCategory';
import MyTable from './MyTable';
import TableWithInputs from './TableWithInputs'
import { connect } from 'react-redux';
import * as datosActions from '../actions/datosActions'

//datos iniciales de prueba
//const datos = 
const datos= [
  {
    name: 'Categoria1',
    variables: ['v1','v2', 'v5']
  },
  {
    name: 'Categoria2',
    variables: ['v1','v2']
  },
  {
    name: 'Categoria3',
    variables: ['v1','v2','drill']
  },  
]

const App = (props) => {
 
  // useEffect(() => {
  //   // Actualiza el título del documento usando la API del navegador
  //   props.traerTodos();
  
  // });   

  console.log(props)
 

  const [data,setData] = useState(datos)
 
  console.log(props)
  return (
    <div className="container">
      <FormCategory data={data} setData={setData} />
      <TableWithInputs data={data}  setData={setData} />
      <MyTable info={data} />
    </div>

  )
}

const mapStateToProps =  (reducers) =>{
  return reducers.datosReducer;

}; 

export default connect(mapStateToProps, { datosActions })(App);
