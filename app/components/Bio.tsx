import React from 'react';

const Bio: React.FC = () => {
    return (
        <div className="Card">
            <div className="flex">
                <a href="https://bsky.app/profile/kael3.bsky.social/post/3l75jbrqfff2d"><div id="PictureContainer"><img src="/kael.png"></img></div></a>
                <div id="BasicInfo">
                    <div>Name: Jando, Alex</div>
                    <div>Pronouns: Any</div>
                    <div>Age: 24</div>
                </div>
            </div>
            <div>
                Hello stranger, fancy seeing you here.
                <img src="/construction.gif"></img>
            </div>

        </div>
    );
};

export default Bio;