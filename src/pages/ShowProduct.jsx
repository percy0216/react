import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { axiosInstance } from '../services/axios.config';
import Table from '../components/Navbar/Table/table';
import { ItemsContext, UPLOAD_ITEMS } from '../context/itemsConstext';

const ShowProduct = () => {

  //const [items, setItems] = useState([])
  const { items, dispatch } = useContext(ItemsContext)

  useEffect(() => {
    axiosInstance.get('/')
      .then(r => {
        if (r.status === 200) {
          //setItems(r.data)
          dispatch({ type: UPLOAD_ITEMS, payload: r.data })
        } else {
          throw new Error(`[${r.status}]ERROR en la solicitud`)
        }
      })
      .catch(err => console.log(err))
  }, [])

  /*const editItem = (id, data) => {
    console.log('editando...')
    axiosInstance.put(`/${id}`,data)
      .then(r => {
        if(r.status === 200 ){
          axiosInstance.get('/')
            .then(r => {
              if (r.status === 200){
                setItems(r.data)
              } else {
                throw new Error(`[ERROR ${r.status}] Error en la solicitud`)
              }
            })
            .catch(err => console.log(err))
        } else {
          throw new Error(`[ERROR ${r.status}] Error en la solicitud`)
        }
      })
      .catch(err => console.log(err))
  }*/

  return (
    <>
      <div>
        <div  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ textAlign: 'center', flex: 1 }}>Libros en sistema</h1>
          <input className='textsearch' type="text" style={{ marginLeft: 'auto' }} 
          placeholder='Buscar...' />
          <i className="bi bi-search" style={{marginRight: '20px', cursor: 'pointer'}}></i>
        </div>

        <div className='container mt-3' >
          {
            items.length > 0 ?
              <Table items={items} />
              :
              <h2 style={{ textAlign: 'center' }}>No hay libros en el sistema</h2>
          }
        </div>
      </div>
    </>
  )
}

export default ShowProduct