import logo from '../../logo.svg';

interface Props {
    title: string
  }
  

export const Header = ( {title}:Props ) =>{
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a href="/" className='navbar-brand'>
                <img src={logo} alt="Movies Logo" style={{width: '4rem'}} />
                {title}
                </a>
            </div>
        </nav>
    )
}