import React from 'react';

const ListResults = ({ queryResults }) => {
    let displayList = [];
    // Get table header
    const header = (<tr> + {Object.keys(queryResults[0]).map(title => (<th>{title}</th>))} + </tr>);

    console.log(header)

    queryResults.forEach(element => {
        //We do not know what keys each object contains. So we get all of them and add it to a list.

        let tableRow = [];
        Object.keys(element).forEach(key => {

        tableRow.push(element[key]);
        })
        displayList.push((<tr> + {tableRow.map(element => <td>{element}</td>)} + </tr>));

        tableRow = [];
    });
        return (
            <table>
            {header}
            {displayList.map(res => res)}
            </table>
        )
}

export default ListResults;