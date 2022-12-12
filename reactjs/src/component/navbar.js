import react from 'react'

const Navbar = () => {
    return(
        <nav>
            <div className='wrapper'>
                <div className='logo'>react js</div>
                <div className='menu'>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">study</a></li>
                        <li><a href="#">organization</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar