export const  traerTodos = () => (dispatch) =>{
    dispatch({
        type: 'traer_datos', 
        payload: [
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
    })

}