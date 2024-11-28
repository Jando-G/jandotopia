'use client';
import React from 'react';
import MessageLog from './MessageLog';
import { useState, useEffect } from 'react';
import { NextRequest, NextResponse, userAgent } from 'next/server'

const Terminal: React.FC = () => {
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

    const commandDictionary: { [key: string]: JSX.Element } = { 
        help: <div>commands: about, infofetch, help, clear</div>, 
        about: <div>Hello, I'm Alex. This website exists to help my online stalkers learn more about me. It's supposed to have Images
            and stuff but I'm still working on that.</div>,
        goals: <div>My goals right now are:
        <br></br>   1. Socialize more
        <br></br>   2. Be less judgemental of myself and others
        <br></br>   3. Be more confrontational and honest with people
        <br></br>   4. Continue to improve at game developement
        <br></br>   5. Allow myself to do things I enjoy without feeling guilty. Making this website is a great example of that.
        </div>,
        hobbies: <div>These days I mostly skate my flatrail, play videogames, sing, play drums and watch a crippling amount of Youtube. 
        And of course, I am also learning game development. Game development is a hobby that Ive had for about 2 years now. I really like how its a 
        combination of many different creative and unique skills. Im not good at sticking to one thing for a long time, so its nice to be able to switch between
        disciplines and still feel a sense of progress. My two favorite disciplines are game programming and tech art. I only recently started learning tech art 
        and gosh damn is the learning curve crazy. I just have to remind myself that Im improving at my own pace and its all gunna click together soon. Im excited to share pics of my tech art once 
        I feel confident enough to do so.
        </div>,
        infofetch: <div>Here are specs</div>,
    }
    
    return (
        <div className="mt-10 TerminalContainer flex flex-col flex-1">
        <div id="TerminalTop"><div className="text-[#7a7a7a]">jando@jandotopia-dot-online: ~</div></div>
        <div id="Terminal" className="flex-1 text-[0.9rem]">
            <div className="flex"> 
            </div>
            {messages.map((message, index) => (
                <MessageLog key={index} message={message} content={commandDictionary[message]} />
            ))}
            <div className="flex h-full"> 
                <div className="min-w-[16.8rem]"><span className="text-[#698763]">jando@jandotopia-dot-online</span>:<span className="text-[#729ec9]">~</span>$</div>
                <textarea placeholder={messages.length ? "" : "use 'help' to get a list of commands"} value={text} onChange={e => setText(e.target.value)} onKeyDown={handleKeyPress} id="TerminalInput"></textarea>
            </div>
        </div>
    </div>
    );
};

export default Terminal;