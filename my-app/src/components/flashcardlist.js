import React from 'react';
import Flashcard from './flashcard';

export default function Flashcardlist({flashcard}) {
    return (
        <div>
            {flashcard.map( flashcard => {
                return <Flashcard flashcard = {flashcard} key = {flashcard.id} />
            })}
        </div>
    )
}
