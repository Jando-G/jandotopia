import React from 'react';
import Bio from './Bio';
import ExtraInfo from './ExtraInfo';
import Terminal from './Terminal';
const Main: React.FC = () => {
    return (
        <div className="flex-[3] flex flex-col gap-[2vh] min-w-[500px] min-w-[700px]">
            <div className="Card flex-1 flex flex-col">
                <Bio></Bio>
                <Terminal></Terminal>
            </div>
            <ExtraInfo></ExtraInfo>
        </div>
    );
};

export default Main;