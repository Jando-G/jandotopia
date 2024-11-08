import React from 'react';

const NavBar: React.FC = () => {
    return (
        <div className="Card flex-[.5] h-full">
            <button className="NavItem text-white text-2xl">Bio</button>
            <div></div>
            <button className="NavItem text-white text-2xl">Images</button>
        </div>
    );
};

export default NavBar;