// Just one example
import { useEffect } from 'react'
import moleImg from '../assets/mole.png'

function Mole( {toggle, handleClick}) {
    useEffect(() => {
          //Feel free to adjust this number as you see fit.
          //It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className='mole'>
            <img style={{ 'width': '30vw' }}
                src={moleImg}
                onClick={handleClick} />
        </div>
    )
}

export default Mole