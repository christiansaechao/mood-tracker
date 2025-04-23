import { useState } from 'react';
import { MoodButtons } from './components/mood-btns';
import './App.css'

const moodEmojis = [
    {
        'emoji': '😍',
        'text': 'I love coding!'
    },
    {
        'emoji': '😭',
        'text': 'Coding makes me sad!',
    },
    {
        'emoji': '😖',
        'text': 'Code confuse, code no work!',
    },
    {
        'emoji': '🤢',
        'text': `I'm disgusted I chose to code!`,
    },
    {
        'emoji': '😁',
        'text': 'Pretty good day of coding!',
    },
];

function App() {
    const [moodWeek, setMoodWeek] = useState([]);
    const [count, setCount] = useState(-7);

    const getDate = (count) => {
        const now = new Date();
    
        const year = (now.getFullYear());
        const month = (String(now.getMonth() + 1).padStart(2, '0'));
        const day = (String(now.getDate() + count).padStart(2, '0'));
        setCount(prev => prev + 1);
        return `${year}/${month}/${day}`;
    }
    
    const handleMoodClick = (emoji, text) => {
        const date = getDate(count);
        setMoodWeek(prev => {
            const updatedArray = [...prev, { date, emoji, text }];
            return updatedArray.slice(-7);
        });
    }

    return (
        <>
            <div style={{ padding: '20px', fontSize: '1.4rem' }}>How do you feel about coding today?</div>
            <MoodButtons moodEmojis={moodEmojis} handleMoodClick={handleMoodClick} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: '20px', padding: '40px'}}>
                {moodWeek.map(({date, emoji, text}, index) => {
                    return (
                        <div key={index} style={{ minHeight: '40px', border: '1px solid white', borderRadius: '10px', padding: '5px'}}>
                            <div>{date}</div>
                            <div>{emoji}</div>
                            <div>{text}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default App
