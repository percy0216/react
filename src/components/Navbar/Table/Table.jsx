import React from 'react'
import TableBs from 'react-bootstrap/Table'
import ItemTable from '../../ItemTable/ItemTable';

const table = ({ items,editItem }) => {
    console.log(items);
    return (
        <TableBs striped bordered hover variant='dark'>
            <thead>
                <tr>
                    <th style={{textAlign: 'center'}}>#ID</th>
                    <th style={{textAlign: 'center'}}>Producto</th>
                    <th style={{textAlign: 'center'}}>Precio</th>
                    <th style={{textAlign: 'center'}}>Stock</th>
                    <th style={{textAlign: 'center'}}>Editar</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item,i) => (
                    <ItemTable item={item} key={i} editItem={editItem}/>
                ))}
                
            </tbody>
        </TableBs>
    );
}

export default table