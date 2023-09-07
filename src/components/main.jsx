import blueSweater from '/blue.sweater.png'
import redSweater from '/red.sweater.png'
import yellowSweater from '/yellow.sweater.png'

export default function Main(){
  return(

    <div className='main'>
      <div className='shopping-card'>
        <a href="https://www.yargici.com/p/mavi-kayik-yaka-triko-23yktr2017x021?#ins_sr=eyJwcm9kdWN0SWQiOiIyM1lLVFIyMDE3WDAyMSJ9" target="_blank" rel="noreferrer">
        <img src={blueSweater} className="blue-sweater" alt="Blue Sweater" />
        </a>
        <p className='text'>Blue Sweater</p>
        <p className='price'>50$</p>
      </div>
      <div className='shopping-card'>
        <a href="https://www.yargici.com/p/kirmizi-kolsuz-triko-23yktr2043x582" target="_blank" rel="noreferrer">
        <img src={redSweater} className="red-sweater" alt="Red Sweater" />
        </a>
        <p className='text'>Red Sweater</p>
        <p className='price'>45$</p>
      </div>
      <div className='shopping-card'>
        <a href="https://www.yargici.com/p/sari-cep-detayli-triko-23yktr2016x029" target="_blank" rel="noreferrer">
        <img src={yellowSweater} className="yellow-sweater" alt="Yellow Sweater" />
        </a>
        <p className='text'>Yellow Sweater</p>
        <p className='price'>48$</p>
      </div>
    </div>
    
  )
}