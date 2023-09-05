import React from 'react'

const ListItem = ({ item, onDeleteItem, onToggle }) => {
    return (
        <li>
            <input type='checkbox' value={item.packed} onChange={() => { onToggle(item.id) }}></input>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item)}>❌</button>
        </li>
    )
}

export default ListItem
