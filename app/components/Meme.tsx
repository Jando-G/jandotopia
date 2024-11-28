'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react'

const Meme: React.FC = () => {
    const imageUrls = [
        'https://i.imgur.com/LEKQ3Q8.jpeg', 
        'https://i.imgur.com/jbmgdQG.jpeg', 
        'https://i.imgur.com/sKHKgAH.jpeg',
        'https://i.imgur.com/ztDA19p.jpeg',
        'https://i.imgur.com/JKLQGo5.jpeg',
        'https://i.imgur.com/Fi9CbJL.jpeg',
        'https://i.imgur.com/jt5TZrr.png',
        'https://i.imgur.com/VUaF2FT.jpeg',
        'https://i.imgur.com/k5ldDkg.png',
        'https://i.imgur.com/iTAgY0M.png',
        'https://i.imgur.com/rgEYkPc.jpeg',
        'https://i.imgur.com/UC93Tf6.jpeg',
        'https://i.imgur.com/Kg0wWBk.png',

    ]

    const [imageUrl, setImageUrl] = useState('');
    const [imageNumber, setImageNumber] = useState(0);

    useEffect(() => { 
        const randomNumber = Math.floor(Math.random() * imageUrls.length)
        setImageNumber(randomNumber);
        setImageUrl(imageUrls[randomNumber]); 
    }, [imageUrls]);

    return (
            <div className="flex-1 mt-10 flex flex-col items-center justify-center">
                <div className="h-[80%] w-[80%] bg-[#50d71e] relative"><Image fill src={imageUrl ? imageUrl : '/loadingBar.gif'} alt="Random Meme"/></div>
                <div className="text-white"> Meme from my phone no. {imageNumber + 1} / {imageUrls.length}</div>
            </div>
    );
};

export default Meme;