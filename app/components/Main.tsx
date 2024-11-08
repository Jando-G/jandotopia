import React from 'react';
import Bio from './Bio';
import ExtraInfo from './ExtraInfo';
const Main: React.FC = () => {
    return (
        <div className="flex-[3] flex flex-col gap-[2vh] min-w-[500px] min-w-[700px]">
            <Bio></Bio>
            <ExtraInfo></ExtraInfo>
        </div>
    );
};

export default Main;