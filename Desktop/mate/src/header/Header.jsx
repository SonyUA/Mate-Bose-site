const Header = () => {
    return (
        <header className='header'>
            <div className='header__top'>
                <img src='/images/logo.png' alt='logotyp' />
                <a href='#menu'>
                    <img src='/images/icons/Icon-Burger-menu.png' alt='Icon-Burger-menu' />
                </a>
            </div>
            <div className='header__bottom'>
                <img src='/images/Sound-waves.png' alt='Sound-waves' />
                <h1 className='header__title'>
                    The world shades.
                    <br />
                    Your music shines.
                </h1>
            </div>
        </header>
    );
};

export default Header;
