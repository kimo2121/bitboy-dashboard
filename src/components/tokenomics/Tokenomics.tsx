import "./tokenomics.scss";
export default function Tokenomics() {
  return (
    <div className="tokenomics" id="tokenomics">
      <div className="tokenomicsContent">
        <div className="wrapper">
          <div className="left">
            <h1>Tokenomics</h1>
            <p>
              Liquidity Locked Ownership Renounced
              <br />
              <a
                href="
              https://thebittimes.com/token-BITBOY-BSC-0xe23e05edccbfde83e8f510ac4d6a3aba89789e15.html
              "
                target="_blank"
              >
                0xe23E05EDccBfdE83e8f510AC4D6a3abA89789e15
              </a>
            </p>

            <p>
              There is a 10% tax applied to all token sales. 5% is distributed
              to the BitSquad BITBOY token holders. The other 5% is added to a
              locked liquidity pool to increase the price floor.
            </p>
          </div>
          <div className="right">
            <div className="item">
              <h2>120</h2>
              <p>Total Supply</p>
            </div>
            <div className="item">
              <h2>90</h2>
              <p>Market cap</p>
            </div>
            <div className="item">
              <h2>50</h2>
              <p>Reflections paid</p>
            </div>
            <div className="item">
              <h2>100</h2>
              <p>Number of holders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
