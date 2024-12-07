import React from 'react'
import TableBs from 'react-bootstrap/Table'
import ItemTable from '../../ItemTable/ItemTable';

const table = ({ items }) => {
    return (
        <TableBs striped bordered hover variant='dark'>
            <thead>
                <tr>
                    <th style={{textAlign: 'center'}}>#ID</th>
                    <th style={{textAlign: 'center'}}>Libros</th>
                    <th style={{textAlign: 'center'}}>Precio</th>
                    <th style={{textAlign: 'center'}}>Stock</th>
                    <th style={{textAlign: 'center'}}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item,i) => (
                    <ItemTable item={item} key={i}/>
                ))}
                
            </tbody>
        </TableBs>
    );
}

export default table