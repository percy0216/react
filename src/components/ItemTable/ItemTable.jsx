import React, {useContext, useState} from 'react'
import Modal from '../Modal/Modal';
import { axiosInstance } from '../../services/axios.config';
import { ItemsContext, UPLOAD_ITEMS } from '../../context/itemsConstext';

const ItemTable = ({item}) => {
    const {name,price,stock,id} = item
    const [modalShow, setModalShow] = useState(false);

    const {items, dispatch} = useContext(ItemsContext)
    const handleDelete = () => {
      axiosInstance.delete(`/${id}`)
        .then( r => {
            if (r.status === 200 ){
              console.log(r);              
              const itemsUpload = items.filter( item => item.id !== r.data.id)          
              console.log(itemsUpload);              
              dispatch({type: UPLOAD_ITEMS, payload: itemsUpload})
            }
        })
    }

    /*const handlePurchase = () => {
      if (stock > 0) {
          axios.patch(`https://66f4a5f277b5e889709a119d.mockapi.io/api/stockProducts/${id}`, { stock: stock - 1 })
              .then(r => {
                  if (r.status === 200) {
                      const updatedItems = items.map(item =>
                          item.id === id ? { ...item, stock: item.stock - 1 } : item
                      );
                      dispatch({ type: 'UPLOAD_ITEMS', payload: updatedItems });
                  }
              })
              .catch(error => {
                  console.error("Error purchasing item:", error);
              });
      } else {
          console.log("Stock is insufficient for this purchase.");
      }
  };*/




  return (
    <>
    <tr>
        <th>{id}</th>
        <td>{name}</td>
        <td>{price}</td>
        <td>{stock}</td>
        <td style={{display: 'flex', justifyContent:'space-evenly'}}>
            <i style={{cursor: 'pointer'}} className="bi bi-bag-fill" ></i>  
            <i style={{cursor: 'pointer'}} className="bi bi-pencil-square" onClick={() => setModalShow(true)}></i>
            <i style={{cursor: 'pointer'}} className="bi bi-trash-fill" onClick={() => handleDelete(id)}></i> 
             
        </td>
    </tr>
    <Modal 
      show={modalShow}
      onHide={() => setModalShow(false)}
      item={item}
    />
    </>
  )
}

export default ItemTable