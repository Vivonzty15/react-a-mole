import {useEffect} from 'react'
import emptySlot from '../assets/molehill.png'

function EmptySlot({toggle}) {

    useEffect(() => {
        console.log('hello')
        //Feel free to adjust this number as you see fit.
        //It is your game to tune!
      let randSeconds = Math.ceil(Math.random() * 6500)
      let timer = setTimeout(() => {
          toggle(true)
      }, randSeconds)
      return () => clearTimeout(timer)
    }, [])

    return (
        <div className='empty-slot'>
            <img src={emptySlot} alt='molehill'/>
        </div>
    )
}

export default EmptySlot