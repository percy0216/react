import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../services/axios.config';
import Table from '../components/Navbar/Table/table';


const ShowProduct = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    axiosInstance.get('/')
      .then(r => {
        if (r.status === 200) {
          setItems(r.data)
        } else {
          throw new Error(`[${r.status}]ERROR en la solicitud`)
        }
      })
      .catch(err => console.log(err))
  }, [])

  const editItem = (id, data) => {
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
  }

  return (
    <div>
        <h1 style={{textAlign: 'center'}}> Productos en sistema </h1>
        
        <div className='container mt-3' >
          {
            items.length > 0 ?              
                <Table items={items} editItem={editItem} />
            :
            <h2 style={{textAlign: 'center'}}>No hay productos en el sistema</h2>
          }
        </div>
    </div>
  )
}

export default ShowProduct