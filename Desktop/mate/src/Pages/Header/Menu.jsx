import { memo } from "react";
// eslint-disable-next-line react-refresh/only-export-components
const Menu = () => {
    return (
        <div className='menu' id='menu'>
            <div className='menu__top'>
                <img src='/images/logo.png' alt='logotyp' />
                <a href='#home'>
                    <img src='/images/icons/Icon-Close.png' alt='Close' />
                </a>
            </div>
            <nav className='nav'>
                <a href='#Home' className='nav__link'>
                    Home
                </a>
                <a href='#recommended' className='nav__link'>
                    recommended
                </a>
                <a href='#categories' className='nav__link'>
                    Categories
                </a>
                <a href='#How-to-buy' className='nav__link'>
                    How to buy
                </a>
            </nav>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Menu);
