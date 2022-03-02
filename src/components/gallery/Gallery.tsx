import { useEffect, useState } from 'react';
import './gallery.scss';
import Slider from "react-slick" ;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

export default function Gallery() {
    const teamData = [
        {
            id:0,
            img:"assets/2monke.png",
        },
        {
            id:1,
            img:"assets/9monke-1.png",
        },
        {
            id:2,
            img:"assets/6monke.png",
        },
        {
            id:3,
            img:"assets/2monke.png",
        },
        {
            id:4,
            img:"assets/9monke-1.png",
        },
        {
            id:5,
            img:"assets/6monke.png",
        },
        {
            id:6,
            img:"assets/2monke.png",
        },
        {
            id:7,
            img:"assets/9monke-1.png",
        },
        {
            id:8,
            img:"assets/6monke.png",
        },
        {
            id:9,
            img:"assets/2monke.png",
        },
        {
            id:10,
            img:"assets/9monke-1.png",
        },
        {
            id:11,
            img:"assets/6monke.png",
        },
        {
            id:12,
            img:"assets/2monke.png",
        },
        {
            id:13,
            img:"assets/9monke-1.png",
        },
        {
            id:14,
            img:"assets/6monke.png",
        },
        {
            id:15,
            img:"assets/2monke.png",
        },
        {
            id:16,
            img:"assets/9monke-1.png",
        },
        {
            id:17,
            img:"assets/6monke.png",
        },
    ]
    const [idx, setIdx] = useState(9);
    const [step, setStep] = useState(30)
    const handleClick = (value:string)=>{
        if (value === 'left'){
            if (idx > 0){
                setIdx(idx - 1) 
            }else{
                setIdx(0)
            }
        }
        if (value === 'right'){
            if (idx < 15){
                setIdx(idx + 1) 
            }else{
                setIdx(15)
            }
        }
    }
    const isTabletOrMobile = useMediaQuery({ query: 'screen and (max-width: 768px) and (orientation:portrait)' })
    const isLandOrMobile = useMediaQuery({ query: 'screen and (max-height: 768px) and (orientation:landscape)' })

    useEffect(() => {
        if (isTabletOrMobile){
            setStep(30)
        }

        if (isLandOrMobile){
        }
        if (!isLandOrMobile && !isTabletOrMobile){
            setStep(30)
        }

        let myInterval = setInterval(() => {
            idx === 15 ? setIdx (0) : setIdx (idx + 1)

        }, 5000)
        return ()=> {
            clearInterval(myInterval);
        };
        
    },[isTabletOrMobile, isLandOrMobile, setStep, idx, setIdx]);
    let settings = {
        dot : true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        cssEase:'linear'
    }
    return (
        <div className="gallery" id="gallery">
            <div className="sliderView">
                <div className="sliderList" style={{left: `-${idx * step}vw`}}>
                    {teamData.map((d)=>(
                        <div className="item" >
                                <img src={d.img} alt="" style={{transform: (d.id === idx + 2) ? `translate3d(0px, 0px, -107.672px) rotateX(0deg) rotateY(-40deg)`: (d.id === idx ) ? `translate3d(0px, 0px, -107.672px) rotateX(0deg) rotateY(40deg)`:`translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)`, width:`35vw`}} />
                        </div>
                            
                        ))}
                    </div>
            </div>
            {/* <div className="sliderView">
                    <Slider {...settings}>
                        {teamData.map((d)=>(
                            <div className="card-wrapper">
                                <div className="card">
                                    <div className="card-image">
                                        <img src={d.img} alt="" style={{transform: (d.id === idx) ? `translate3d(0px, 0px, -107.672px) rotateX(0deg) rotateY(-40deg)`: (d.id === idx + 2) ? `translate3d(0px, 0px, -107.672px) rotateX(0deg) rotateY(40deg)`:`translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg)`, width:`35vw`}}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    </div> */}
            <div className="arrowLeft" onClick={()=>{handleClick('left')}}>
                <i className="fas fa-arrow-alt-circle-left"></i>
            </div>
            <div className="arrowRight" onClick={()=>{handleClick('right')}}>
                <i className="fas fa-arrow-alt-circle-right"></i>
            </div>
            <div className="line"></div>
        </div>
    //      <Slider {...settings}>
    //      {teamData.map((d)=>(
    //          <div className="card-wrapper">
    //              <div className="card">
    //                  <div className="card-image">
    //                      <img src={d.img} alt="" />
    //                  </div>
    //              </div>
    //          </div>
    //      ))}
    //  </Slider>
    )
}
