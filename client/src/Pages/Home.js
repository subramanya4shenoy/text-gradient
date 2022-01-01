import React, { useEffect, useState } from 'react'
import CodeBox from '../component/macro/CodeBox';
import TextView from '../component/macro/TextView'
import ShuffleButton from '../component/micro/ShuffleButton';
import gradient from '../gardients.json';
import quote from '../quote.json';

function Home() {

    let len = gradient.length;
    let quotelem = quote.length;

    const [selectedGradient, setselectedGradient] = useState()
    const [selectedQuote, setquote] = useState()
    const [styleCSS, setstyleCSS] = useState('');

    const shuffleGradient = () => {
        let randomLength = Math.floor(Math.random() * len);
        setselectedGradient(gradient[randomLength]);
        console.log(gradient[randomLength]);
        let cssString = "background-color: "+gradient[randomLength].colors[0]+"; \nbackground-image: linear-gradient(45deg, "+ [...gradient[randomLength].colors] +");\nbackground-size: 100%;\n-webkit-background-clip: text;\n-moz-background-clip: text;\n-webkit-text-fill-color: transparent;\n-moz-text-fill-color: transparent;'"
        setstyleCSS(cssString);
    }

    const shuffleQuote = () => {setquote(quote[Math.floor(Math.random() * quotelem)]); }

    useEffect(() => {
        shuffleQuote();
        shuffleGradient();
    }, [])


    // const styleString =
    //         "background-color: " + selectedGradient.colors[0]+ ";\
    //         background-image: linear-gradient(45deg,"+ selectedGradient.colors +");\
    //         background-size: 100%;\
    //         -webkit-background-clip: text;\
    //         -moz-background-clip: text;\
    //         -webkit-text-fill-color: transparent;\
    //         -moz-text-fill-color: transparent;"

    return (
        <div className='desktop:max-w-6xl w-screen desktop:mx-auto'>
            <div className='flex flex-nowrap w-full h-screen dark:text-white'>
                <div className='w-1/2 self-center'>
                    {(selectedGradient) && 
                    (<TextView className='text-4xl leading-relaxed px-10 ubuntu transition ease-in duration-700 ' 
                                selectedGradient={selectedGradient} 
                                randomText={selectedQuote}
                                />)}
                    <div className='flex w-full p-10'>
                        <ShuffleButton text="Shuffle Gradient" handleClick={() => shuffleGradient()}/>
                        <ShuffleButton text="Shuffle Font" handleClick={() => shuffleQuote()}/>
                    </div>
                </div>
                <div className='w-1/2 self-center desktop:ml-10'>
                    Gradient name - <span className='capitalize text-xl roboto'>{selectedGradient?.name}</span>
                    <CodeBox css={styleCSS}/>
                     <div className='absolute bottom-0 right-0 w-1/2 z-50 mx-auto -mt-28 pointer-events-none overflow-hidden'>
                         <iframe className="overflow-hidden" src='https://my.spline.design/noisedisplacecopy-d225e306cbce9953001808f16cc1f798/' frameborder='0' width='100%' height='100%'></iframe>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                gardient selection
            </div>
        </div>
    )
}

export default Home
