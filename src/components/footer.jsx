import React from 'react'


const Footer = ({ itemCount, packedItems }) => {
    if (!itemCount.length) {
        return (
            <footer className='stats'>
                <p>
                    Start packing stuff!
                </p>
            </footer>
        )

    }
    return (
        <footer className='stats'>
            {
                packedItems === 100 ? "You are ready to go!" : `You have ${itemCount} items on your list, and you already packed ${packedItems} (%)`
            }
        </footer>
    )
}

export default Footer
