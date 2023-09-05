import React from 'react'
import ListItem from './list-item'
import { useState } from 'react'

const List = ({ items, onDeleteItem, onToggle, handleClearItems }) => {
    const [sortBy, setSortBy] = useState('input')

    let sortedItem;
    switch (sortBy) {
        case 'input': sortedItem = items
            break;
        case 'description': sortedItem = items.slice().sort((a, b) => a.description.localeCompare(b.description))
            break;
        case 'packed': sortedItem = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
            break;
    }


    console.log(sortedItem)
    return (<>
        <div className='list'>
            <ul >
                {sortedItem.map(item => (
                    <ListItem key={item.id} item={item} onDeleteItem={onDeleteItem} onToggle={onToggle}></ListItem>
                ))}
            </ul>
            <div className='actions'>
                <select value={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}>
                    <option value='input'> Sort by input order
                    </option>
                    <option value='description'> Sort by description
                    </option>
                    <option value='packed'> Sort by packed status
                    </option>
                </select>
                <button onClick={handleClearItems}>Clear</button>
            </div>
        </div>
    </>
    )
}

export default List
