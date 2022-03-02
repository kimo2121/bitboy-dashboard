import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./faq.scss";

export default function Faq() {
  const faqData = [
    {
      id: 0,
      quetion: "1. What is BitBoy Crypto Token?",
      answer:
        "BITBOY is a decentralized community social token launched on the Ethereum and Binance Smart Chain networks.",
    },
    {
      id: 1,
      quetion: "2. Where do I buy BITBOY?",
      answer: `You can buy BBITBOY on Pancakeswap exchanges by searching BITBOY's`,
      contract: "0xe23E05EDccBfdE83e8f510AC4D6a3abA89789e15",
    },
    {
      id: 2,
      quetion: "3. How do I add the BITBOY to trust wallet?",
      answer: "Information in correct order",
    },
    {
      id: 3,
      quetion: '4. How do I fix "INSUFFICIENT OUTPUT AMOUNT" on Pancakeswap?',
      answer:
        "Click on the gear icon in the top right corner and make sure the slippage is set to at least 12%.",
    },
    {
      id: 4,
      quetion: "5.  Who owns the BITBOY contract?",
      answer: `BITBOY is a token native to the Binance Smart Chain. Liquidity is burned and the token is decentralized. The contract is
      renounced, there is no ownership.`,
    },
  ];
  const [faqId, setFaqId] = useState(-1);
  const handleClick = (id: number) => {
    if (faqId !== -1) {
      if (faqId === id) {
        setFaqId(-1);
      } else {
        setFaqId(id);
      }
    } else {
      setFaqId(id);
    }
  };
  const isTabletOrMobile = useMediaQuery({
    query: "screen and (max-width: 768px) and (orientation:portrait)",
  });
  const isLandOrMobile = useMediaQuery({
    query: "screen and (max-height: 768px) and (orientation:landscape)",
  });
  const [h, setH] = useState(5);
  useEffect(() => {
    if (isTabletOrMobile) {
      setH(3);
    }

    if (isLandOrMobile) {
      setH(3.5);
    }
    if (!isLandOrMobile && !isTabletOrMobile) {
      setH(5);
    }
  }, [setH, isTabletOrMobile, isLandOrMobile]);

  return (
    <div className="faq" id="faq">
      <div className="faqTitle">
        <h1>FAQ's</h1>
      </div>
      <div className="faqContent">
        <div className="faqWrapper">
          {faqData.map((d) => (
            <div
              className="line"
              onClick={() => {
                handleClick(d.id);
              }}
              key={d.id}
              style={{ height: d.id === faqId ? `${h * 2}rem` : `${h}rem` }}
            >
              <div
                className="question"
                style={{ color: d.id === faqId ? "#E74444" : "#000" }}
              >
                <p>{d.quetion}</p>
                <div className="show">
                  {d.id === faqId ? (
                    <i className="fas fa-chevron-up"></i>
                  ) : (
                    <i className="fas fa-chevron-down"></i>
                  )}
                </div>
              </div>
              <div className="divLine"></div>
              <p className="answer">
                {d.answer}
                <a
                  href="https://thebittimes.com/token-BITBOY-BSC-0xe23e05edccbfde83e8f510ac4d6a3aba89789e15.html"
                  target="_blank"
                >
                  {d?.contract}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
