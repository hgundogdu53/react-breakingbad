import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <div className="cards">
            {items.map(item => (
                <CharacterItem key={item.char_id} item={item} />
            ))}
        </div>
    )
}

export default CharacterGrid
