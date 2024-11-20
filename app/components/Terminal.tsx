'use client';
import React from 'react';
import MessageLog from './MessageLog';
import { useState } from 'react';

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
        help: <div>commands: help, about, clear</div>, 
        about: <div>Hello, I'm Alex. This is my personal website.</div>,
    }
    
    return (
        <div className="mt-10 TerminalContainer flex flex-col flex-1">
        <div id="TerminalTop"><div className="text-[#7a7a7a]">jando@jandotopia-dot-online: ~</div></div>
        <div id="Terminal" className="flex-1">
            <div className="flex"> 
            </div>
            {messages.map((message, index) => (
                <MessageLog key={index} message={message} content={commandDictionary[message]} />
            ))}
            <div className="flex h-full"> 
                <div className="min-w-[15rem]"><span className="text-[#698763]">jando@jandotopia-dot-online</span>:<span className="text-[#729ec9]">~</span>$</div>
                <textarea value={text} onChange={e => setText(e.target.value)} onKeyDown={handleKeyPress} id="TerminalInput"></textarea>
            </div>
        </div>
    </div>
    );
};

export default Terminal;