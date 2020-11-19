import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')
    
    const filterInput = q => {
        setText(q)
        getQuery(q)
    }

    return (
        <div className="search">
            <form>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search characters"
                    value={text}
                    onChange={e => filterInput(e.target.value)} 
                    autoFocus 
                />    
            </form>            
        </div>
    )
}

export default Search
