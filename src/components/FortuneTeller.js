import React, { useState }from 'react';

export const FortuneTeller = ({ lightTheme }) => {

    //default values for initial page load
    const [backgroundImg, setBackgroundImg] = useState('img/photo8.jpg');
    const [messageOne, setMessageOne] = useState('');
    const [messageTwo, setMessageTwo] = useState('');

    //Variables for insertion into the fortune teller function
    const day = new Date().getDay();
    const daylist = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const partOne = ['good', 'bad', daylist[day], 'thiccc', 'non-edible', 'not an NFT', 'fun', 'stressful'];
    const partTwo = ['you', 'we', 'the dogs', 'your friends', 'animals', 'beasts of the sea', 'parents', 'politicians'];
    const partThree = ['are depressed', 'drink', 'need to lighten up', 'are happy',  'share 60% DNA with a banana', 'sleep soundly', 
                        'feel joy', 'live, laugh, love'];
    const imgArray = ['img/photo1.jpg',
                    'img/photo2.jpg', 
                    'img/photo3.jpg',
                    'img/photo4.jpg',
                    'img/photo5.jpg',
                    'img/photo6.jpg',
                    'img/photo7.jpg',
                    'img/photo8.jpg' ];

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
            <h1>Fortune Teller</h1>
            <div className='fortune-box'>
                <img className='background-img' src={backgroundImg} alt='something relevant' />
                <div className='fortune'>{messageOne}<br />{messageTwo}</div>
            </div>
            <div className='btn-box'>
                <div className='border-wrap'>
                    <button id="fortuneButton" type="button" onClick={() => fortuneHandler()}>Give Me Fortune</button>
                </div>
            </div>
        </div>
    )
}

