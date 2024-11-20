import React from 'react';

interface MessageProp{
    message: string;
    content: JSX.Element;
}

const MessageLog: React.FC<MessageProp> = ({message, content}) => {
    return (
        <div>
            <div className="flex  w-full">
                <div className="min-w-[15rem]"><span className="text-[#698763]">jando@jandotopia-dot-online</span>:<span className="text-[#729ec9]">~</span>$ {message}</div>  
            </div>
            {content}
        </div>
    );
};

export default MessageLog;