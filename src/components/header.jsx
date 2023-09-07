import shoppingLogo from '/logo.png'


export default function Header(){
  return(

      <div className='header'>
        <div className='nav-bar'>
          <a href="https://www.yargici.com/" target="_blank" rel="noreferrer">
            <img src={shoppingLogo} className="logo" alt="Shopping logo" />
          </a>
          <ul className='link-container'>
            <li>SEARCH</li>
            <li>SIGN IN</li>
            <li>FAVORITES</li>
            <li>SHOPPING BAG</li>
          </ul>
        </div>
      </div>
      
  )
}



