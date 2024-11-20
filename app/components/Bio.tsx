import React from 'react';
import Image from 'next/image';

const Bio: React.FC = () => {
    return (
            <div className="flex">
                <a href="https://bsky.app/profile/kael3.bsky.social/post/3l75jbrqfff2d"><div id="PictureContainer"><Image width={200} height={200} src="/kael.png" alt="Pixel art character with messy greeen hair sleeping soundly in bed surrounded by black cats."/></div></a>
                <div id="BasicInfo">
                    <div className="Info"><div className="Label"><div>Name</div></div><div>Jando, Alex</div></div>
                    <div className="Info"><div className="Label"><div>Age</div></div><div>24</div></div>
                    <div className="Info"><div className="Label"><div>Pronouns</div></div><div>Any</div></div>
                    <div className="Info"><div className="Label"><div>Personality</div></div><div>INFP, 9w1</div></div>
                </div>
            </div>
    );
};

export default Bio;