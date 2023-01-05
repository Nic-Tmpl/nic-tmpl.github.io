import React, { useState }from 'react';

export const FortuneTeller = () => {

    //default values for initial page load
    const [backgroundImg, setBackgroundImg] = useState('../../public/img/photo8.jpg');
    const [messageOne, setMessageOne] = useState('');
    const [messageTwo, setMessageTwo] = useState('');

    //Variables for insertion into the fortune teller function
    const day = new Date().getDay();
    const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const partOne = ['good', 'bad', daylist[day], 'thiccc', 'non-edible', 'not an NFT', 'fun', 'stressful'];
    const partTwo = ['you', 'we', 'the dogs', 'your friends', 'animals', 'beasts of the sea', 'parents', 'politicians'];
    const partThree = ['are depressed', 'drink', 'need to lighten up', 'are happy',  'share 60% DNA with a banana', 'sleep soundly', 
                        'feel joy', 'live, laugh, love'];
    const imgArray = ['../../public/img/photo1.jpg',
                    '../../public/img//photo2.jpg', 
                    './../../public/img/photo3.jpg',
                    './../../public/img/photo4.jpg',
                    './../../public/img/photo5.jpg',
                    './../../public/img/photo6.jpg',
                    './../../public/img/photo7.jpg',
                    './../../public/img/photo8.jpg' ];

    const fortuneHandler = () => {
        let nums = [];
        const generator = (array) => {
            for (let c = 0; c < 4; c++) {
                array[c] = Math.floor(Math.random() * 8);
            }
        }
        generator(nums);
        setMessageOne(`Today is ${partOne[nums[0]]}`);
        setMessageTwo(`That is why ${partTwo[nums[1]]} ${partThree[nums[2]]}`);
        setBackgroundImg(`${imgArray[nums[3]]}`);
    }

    return (
        <div className='fortune-container'>
            <div className='fortune-box'>
                <img className='background' src={backgroundImg} alt='something relevant' />
                <div className='fortune'>{messageOne}<br />{messageTwo}</div>
            </div>
            <button type="button" onClick={() => fortuneHandler()}>Give Me Fortune</button>
        </div>
    )
}

