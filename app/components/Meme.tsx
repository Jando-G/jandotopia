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
        

    ]

    const [imageUrl, setImageUrl] = useState('');
    const [imageNumber, setImageNumber] = useState(0);

    useEffect(() => { 
        const randomNumber = Math.floor(Math.random() * imageUrls.length)
        setImageNumber(randomNumber);
        setImageUrl(imageUrls[randomNumber]); 
    }, []);

    return (
            <div className="flex-1 mt-10 flex flex-col items-center justify-center">
                <Image width= {600} height = {600} src={imageUrl ? imageUrl : '/loadingBar.gif'} alt="Random Meme"/>
                <div className="text-white"> Meme from my phone no. {imageNumber + 1} / {imageUrls.length}</div>
            </div>
    );
};

export default Meme;