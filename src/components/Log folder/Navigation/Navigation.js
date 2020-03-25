import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav className={'navigation'}>
                <p onClick={() => onRouteChange('signout')} className={'navigation__all--signOut'}>Выйти</p>
            </nav>
        );
    } else {
        return (
            <nav className={'navigation'}>
                <p onClick={() => onRouteChange('signin')} className={'navigation__all'}>Войти</p>
            </nav>
        )
    }
};

export default Navigation;