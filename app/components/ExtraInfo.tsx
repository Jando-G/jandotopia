import React from 'react';

const ExtraInfo: React.FC = () => {
    return (
        <div className="Card flex flex-row items-center h-[120px] justify-around">
            <a href="https://bsky.app/profile/jandotopia.online" className ="Link">
                    <img src="/bluesky_logo.png" alt="BlueSky Link" className="LinkBaseImage"/> 
                    <img src="/bluesky_logo_hover.png" className="LinkHoverImage"/>
            </a>
            <a href="https://discordapp.com/users/295749883196080129" className ="Link">
                    <img src="/discord_logo.png" alt="Discord Link" className="LinkBaseImage"/> 
                    <img src="/discord_logo_hover.png" className="LinkHoverImage"/>
            </a>
            <a href="https://jando-g.itch.io/" className ="Link">
                    <img src="/itch_logo.png" alt="Itch.io Link" className="LinkBaseImage"/> 
                    <img src="/itch_logo_hover.png" className="LinkHoverImage"/>
            </a>
            <a href="https://steamcommunity.com/id/alexlrey/" className ="Link">
                    <img src="/steam_logo.png" alt="Steam Link" className="LinkBaseImage"/> 
                    <img src="/steam_logo_hover.png" className="LinkHoverImage"/>
            </a>
            <a href="https://open.spotify.com/user/12124317792" className ="Link">
                    <img src="/spotify_logo.png" alt="Spotify Link" className="LinkBaseImage"/> 
                    <img src="/spotify_logo_hover.png" className="LinkHoverImage"/>
            </a>
            <a href="https://myanimelist.net/animelist/minombrejeff?status=7&order=4&order2=0" className ="Link">
                    <img src="/mal_logo.png" alt="My Anime List Link" className="LinkBaseImage"/> 
                    <img src="/mal_logo_hover.png" className="LinkHoverImage"/>
            </a>
        </div>
    );
};

export default ExtraInfo;