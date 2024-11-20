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
        help: <div>commands: about, help, clear</div>, 
        about: <div>Hello, I'm Alex. This is my personal website. It serves 3 main purposes.
        <br></br>   1. Organize links to my social media and other websites I frequent
        <br></br>   2. Host images of stuff I'm working on (currently that page does not exist)
        <br></br>   3. Making websites is fun :p
        <br></br><br></br>Since you got this far, here are some commands you can use to learn more about me: goals, hobbies</div>,
        goals: <div>My goals right now are:
        <br></br>   1. Socialize more
        <br></br>   2. Be less judgemental of myself and others
        <br></br>   3. Be more confrontational and honest with people
        <br></br>   4. Continue to improve at game developement
        <br></br>   5. Allow myself to do things I enjoy without feeling guilty. Making this website is a great example of that.
        </div>,
        hobbies: <div>These days I mostly skate my flatrail, play videogames, sing, play drums and watch a crippling amount of Youtube. 
        <br></br>And of course, I am also learning game developement. Game developement is a hobby that I've had for about 2 years now. I really like how it's a 
        combination of many creative unique skills. I'm not good at sticking to one thing for a long time, so it's nice to be able to switch between
        disciplines and still feel a sense of progress. My two favorite disciplines are game programming and tech art. I only recently started learning tech art 
        and gosh damn is the learning curve crazy. I just have to remind myself that I'm improving at my own pace and it's all gunna click together soon. I'm excited to share pics of my tech art once 
        I feel confident enough to do so.
        </div>,
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
                <textarea placeholder={messages.length ? "" : "use 'help' to get a list of commands"} value={text} onChange={e => setText(e.target.value)} onKeyDown={handleKeyPress} id="TerminalInput"></textarea>
            </div>
        </div>
    </div>
    );
};

export default Terminal;