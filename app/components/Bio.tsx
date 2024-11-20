'use client';

import React from 'react';
import Image from 'next/image';
import MessageLog from './MessageLog';
import { useState } from 'react'

const Bio: React.FC = () => {
    const [text, setText] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    const addMessage = (newMessage: string) => { 
        setMessages((prevMessages) => [...prevMessages, newMessage]); 
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => { 
        if (e.key === 'Enter') {
            e.preventDefault(); 
            if(text==='clear') {
                setMessages([]);
            }
            else {
                addMessage(text);
            }
            setText(''); 
        } 
    };
    
    return (
        <div className="Card flex-1 flex flex-col">
            <div className="flex">
                <a href="https://bsky.app/profile/kael3.bsky.social/post/3l75jbrqfff2d"><div id="PictureContainer"><Image width={200} height={200} src="/kael.png" alt="Pixel art character with messy greeen hair sleeping soundly in bed surrounded by black cats."/></div></a>
                <div id="BasicInfo">
                    <div className="Info"><div className="Label"><div>Name</div></div><div>Jando, Alex</div></div>
                    <div className="Info"><div className="Label"><div>Age</div></div><div>24</div></div>
                    <div className="Info"><div className="Label"><div>Pronouns</div></div><div>Any</div></div>
                    <div className="Info"><div className="Label"><div>Personality</div></div><div>INFP, 9w1</div></div>
                </div>
            </div>
            <div className="mt-10 TerminalContainer flex flex-col flex-1">
                <div id="TerminalTop"><div className="text-[#7a7a7a]">jando@jandotopia-dot-online: ~</div></div>
                <div id="Terminal" className="flex-1">
                    <div className="flex"> 
                    </div>
                    {messages.map((message, index) => (
                        <MessageLog key={index} message={message} />
                    ))}
                    <div className="flex h-full"> 
                        <div className="min-w-[15rem]"><span className="text-[#698763]">jando@jandotopia-dot-online</span>:<span className="text-[#729ec9]">~</span>$</div>
                        <textarea value={text} onChange={e => setText(e.target.value)} onKeyDown={handleKeyPress} id="TerminalInput"></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bio;