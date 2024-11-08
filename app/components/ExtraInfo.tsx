import React from 'react';
import Image from 'next/image';

const ExtraInfo: React.FC = () => {
    return (
        <div className="Card flex flex-row items-center h-[120px] justify-around">
            <a href="https://bsky.app/profile/jandotopia.online" className ="Link">
                    <Image width={100} height={100} src="/bluesky_logo.png" alt="BlueSky Logo" className="LinkBaseImage"/> 
                    <Image width={100} height={100} src="/bluesky_logo_hover.png" alt="BlueSky Logo" className="LinkHoverImage"/>
            </a>
            <a href="https://discordapp.com/users/295749883196080129" className ="Link">
                    <Image width={100} height={100} src="/discord_logo.png" alt="Discord Logo" className="LinkBaseImage"/> 
                    <Image width={100} height={100} src="/discord_logo_hover.png" alt="Discord Logo" className="LinkHoverImage"/>
            </a>
            <a href="https://jando-g.itch.io/" className ="Link">
                    <Image width={100} height={100} src="/itch_logo.png" alt="Itch.io Logo" className="LinkBaseImage"/> 
                    <Image width={100} height={100} src="/itch_logo_hover.png" alt="Itch.io Logo" className="LinkHoverImage"/>
            </a>
            <a href="https://steamcommunity.com/id/alexlrey/" className ="Link">
                    <Image width={100} height={100} src="/steam_logo.png" alt="Steam Logo" className="LinkBaseImage"/> 
                    <Image width={100} height={100} src="/steam_logo_hover.png" alt="Steam Logo" className="LinkHoverImage"/>
            </a>
            <a href="https://open.spotify.com/user/12124317792" className ="Link">
                    <Image width={100} height={100} src="/spotify_logo.png" alt="Spotify Logo" className="LinkBaseImage"/> 
                    <Image width={100} height={100} src="/spotify_logo_hover.png" alt="Spotify Logo" className="LinkHoverImage"/>
            </a>
            <a href="https://myanimelist.net/animelist/minombrejeff?status=7&order=4&order2=0" className ="Link">
                    <Image width={100} height={100} src="/mal_logo.png" alt="My Anime List Logo" className="LinkBaseImage"/> 
                    <Image width={100} height={100} src="/mal_logo_hover.png" alt="My Anime List Logo" className="LinkHoverImage"/>
            </a>
        </div>
    );
};

export default ExtraInfo;