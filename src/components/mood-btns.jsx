import React from 'react'

export const MoodButtons = ({ moodEmojis, handleMoodClick }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
            {moodEmojis.map(({ emoji, text}, index) => {
                return (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <button key={index} onClick={() => handleMoodClick(emoji, text)}>{emoji}</button>
                    </div>
                )
            })}
        </div>
    )
};