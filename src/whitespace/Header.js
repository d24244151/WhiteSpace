import React from 'react';

function Header() {
    return (
        <div className='clswhitespace-head'>
            <div className='container'>
                <div className='clswhitespace-logocontain'>
                    <div className='clswhitespace-leftlogo'>
                        <img src='/assets/image/Logo.png' alt='logo' />
                    </div>

                    <div className='clswhitespace-rightlogo'>
                        <div className='clswhitespace-list'>
                            <li>Products <span><img src='assets/image/DownArrow.png' /></span></li>
                            <li>Solutions <span><img src='assets/image/DownArrow.png' /></span></li>
                            <li>Resources <span><img src='assets/image/DownArrow.png' /></span></li>
                            <li>Pricing <span><img src='assets/image/DownArrow.png' /></span></li>
                        </div>
                        <div className='clswhitespace-btn'>
                            <button className='login'>Login</button>
                            <button className='try'>Try Whitespace free</button>

                        </div>
                        <div className='clswhitespace-mob'>
                            <img src='assets/image/menu.png' alt='menu' />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Header;