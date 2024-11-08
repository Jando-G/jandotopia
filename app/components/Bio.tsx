import React from 'react';
import Image from 'next/image';
const Bio: React.FC = () => {
    return (
        <div className="Card flex-1 flex flex-col">
            <div className="flex">
                <a href="https://bsky.app/profile/kael3.bsky.social/post/3l75jbrqfff2d"><div id="PictureContainer"><Image width={200} height={200} src="/kael.png" alt="Pixel art character with messy greeen hair sleeping soundly in bed surrounded by black cats."/></div></a>
                <div id="BasicInfo">
                    <div className="Info"><div className="Label"><div>Name</div></div><div>Jando, Alex</div></div>
                    <div className="Info"><div className="Label"><div>Age</div></div><div>24</div></div>
                    <div className="Info"><div className="Label"><div>Pronouns</div></div><div>Any</div></div>
                    <div className="Info"><div className="Label"><div>MBTI</div></div><div>INFP</div></div>
                </div>
            </div>
            <div className="mt-10 BioBoxContainer flex flex-col flex-1">
                <div id="BioBoxTop"><div className="text-[#7a7a7a]">jando@jandotopia-dot-online: ~</div></div>
                <div id="BioBox" className="flex-1"> <span className="text-[#698763]">jando@jandotopia-dot-online</span>:<span className="text-[#729ec9]">~</span>$ info <br></br>Hello stranger :D Welcome to my website. <br></br><br></br>This is the only page for now. I'm planning to add an images page later to show off the things I'm making.</div>
            </div>
        </div>
    );
};

export default Bio;