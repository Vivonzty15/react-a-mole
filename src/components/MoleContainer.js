// Just one example
import {useState} from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer({score, setScore}){
const [displayMole, toggleMole] = useState(false)

const handleClick = (e) => {
    setScore(score + 1)
    toggleMole(false)
}
    return (
        <div className='mole-container'>
            {displayMole ? 
            <Mole setScore={setScore} toggle={toggleMole} handleClick={handleClick} 
            /> : 
            <EmptySlot setScore={setScore} toggle={toggleMole} handleClick={handleClick}/>}
        </div>
    )
}

export default MoleContainer