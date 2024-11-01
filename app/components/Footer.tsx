import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div>
                <p>&copy; Jando {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;