import { useWeb3React } from '@web3-react/core';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import Timer from '../timer/Timer';
import './mint.scss'
export default function Mint() {
    const [mintShow, setMintShow] = useState(false);
    const [mintHowMany, setMintHowMany] = useState(false);
    const [count, setCount] = useState(1);
    const inputEl = useRef<HTMLInputElement>(null);
    const clickHandle = () => {
        if (inputEl && inputEl.current) {
            inputEl.current.select();
            document.execCommand('copy');
        }
    }
    const clickReturnHandle = () => {
        setMintHowMany(false)
        setMintShow(false)
    }
    const handleCountChange = (value: any) => {
        setCount(value)
    }

    const [loginStatus, setLoginStatus] = useState(false);
    const { connector, library, chainId, account, active } = useWeb3React();
    useEffect(() => {
    }, [connector, library, account, active, chainId]);

    const mintTokens = async () => {
    };

    const [showMint, setShowMint] = useState(false)
    const [mintCount, setMintCount] = useState(1);
    const decreaseHandle = () => {
        if (mintCount > 0) {
            setMintCount(mintCount - 1)
        }

    }
    const increaseHandle = () => {
        if (mintCount < 20) {
            setMintCount(mintCount + 1)
        }
    }
    return (
        <div className="mint">
            <div className="scroll" id="mint"></div>
            <div className="welcome">
                <div className="welcomeContent">
                    { showMint === true? 
                    <div className="wrapper">
                        <h1 className="mintTitle">Purchase Bitboy Crypto Token</h1>
                        <div className="mintCount">
                            <button className="mintDecrease" onClick={decreaseHandle}><i className="fas fa-minus"></i></button>
                            <span className="mintCountValue">{mintCount}</span>
                            <button className="mintIncrease" onClick={increaseHandle} ><i className="fas fa-plus"></i></button>
                            <button className="mintButton" onClick={mintTokens}>
                            <span>Purchase</span>
                        </button>
                        </div>
                        <div className="mintCost">
                            <span>Mint Price : 0.033 ETH per Monke</span>
                    </div>
                </div>:
                    <div className="countDown">
                        <p>December 29th</p>
                        <Timer setShowMint = {setShowMint}/>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

