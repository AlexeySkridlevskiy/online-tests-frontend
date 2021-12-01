import React from "react";

function TableUsers(props){


    return(
        <tr>
            <td align='center'>
                <input type='checkbox'></input>
            </td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>&times;</td>
        </tr>
    )
}

export default TableUsers