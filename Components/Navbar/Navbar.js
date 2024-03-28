import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-main'>
            <div className='nav-logo'>Neeraj's Tour</div>
            <ul className='nav-menu'>
                <li>Home</li>
                <li>About</li>
                <li>Explore</li>
                <li className='nav-contact'>Contact</li>
            </ul>

        </div>

    )
}

export default Navbar
