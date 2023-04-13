import React from 'react';
import Title from './Title';

function List(){
    const data1 = [
        {
            id:1,
            title:"Gandhinagar",
            description:"The capital of Gujarat."
        },
        {
            id:2,
            title:"Surat",
            description:"Smart city of Gujarat"
        },
        {
            id:3,
            title:"Junagadh",
            description:"City of lions."
        }
    ]
    const datalist = data1.map(data2 => (
    <Title data2 = {data2}></Title> ))
    return <div>{datalist}</div>
}

export default List;