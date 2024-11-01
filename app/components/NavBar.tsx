import React from 'react';

const NavBar: React.FC = () => {
    return (
        <div id="NavBar" className="Card">
            <button className="text-white text-2xl">About</button>
            <div></div>
            <button className="text-white text-2xl">Images</button>
        </div>
    );
};

export default NavBar;