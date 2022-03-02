import './uniswapPankcake.scss'

export default function UniswapPankcake() {
    return (
        <div className = "uniswapPankcake">
            <img className="uniBg" src="assets/Uniswap-vs-Pancakeswap.jpg" alt="" />
            <div className="uniswapPankcakeContent">
                    <div className="left">
                        <h2>UNISWAP</h2>
                        <a href="https://uniswap.org/"><img src="assets/uni.png" alt="" /></a>
                    </div>
                    <div className="right">
                    <a href="https://pancakeswap.finance/"><img src="assets/pank.png" alt="" /></a>
                    <h2>PANCAKESWAP</h2>
                    </div>
            </div>
            <div className="text">
            <p >Join the fastest growing crypto community by becoming a BitBoy Crypto Token holder.</p>
            <div className="links">
                <a href="https://uniswap.org/">Uniswap </a>
                <a href="https://pancakeswap.finance/">Pancakeswap</a>
            </div>
            
            
            </div>
            
            <h1>VS</h1>
        </div>
    )
}
