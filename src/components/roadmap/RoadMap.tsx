import './roadmap.scss'
import Particles from "react-tsparticles";
import { relative } from 'path';
export default function RoadMap() {
    const particlesInit = (main:any) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container:any) => {
        console.log(container);
      };
    return (
        <div className="roadmap" id ="roadmap">
            <h1>ROADMAP</h1>
            <p>Roadmap for the gradual launch of the P2E monkes game on their sky islands</p>
            <div className="roadmapContent">
                <div className="left">
                    <div className="node">
                        <div className="phase">
                            <h2>0%</h2>
                            </div>
                        <div className="text">
                            <h2>COMPLETED</h2>
                            <p>Launch Twitter Account and Discord Server</p>
                        </div>
                        
                    </div>

                    <div className="node">
                        <div className="phase">
                            <h2>20%</h2>
                            </div>
                        <div className="text">
                            <h2>COMPLETED</h2>
                            <p>Launch Website</p>
                        </div>
                        
                    </div>

                    <div className="node">
                        <div className="phase">
                            <h2>40%</h2>
                            </div>
                        <div className="text">
                            <h2>COMPLETED</h2>
                            <p>Dumb Monkes Mint</p>
                        </div>
                        
                    </div>

                    <div className="node">
                        <div className="phase">
                            <h2>60%</h2>
                            </div>
                        <div className="text">
                            <h2>COMPLETED</h2>
                            <p>Sky Islands Mint</p>
                        </div>
                        
                    </div>

                    <div className="node">
                        <div className="phase">
                            <h2>80%</h2>
                            </div>
                        <div className="text">
                            <h2>COMPLETED</h2>
                            <p>Launch Play-to-Earn Game</p>
                        </div>
                        
                    </div>

                    <div className="node">
                        <div className="phase">
                            <h2>100%</h2>
                            </div>
                        <div className="text">
                            <h2>COMPLETED</h2>
                            <p>Launch Monkes Marketplace</p>
                        </div>
                        
                    </div>
                </div>
                <div className="right">
                </div>
                
            </div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen : {
                      enable : true  
                    },
                    background: {
                    // color: {
                    //     value: "#0d47a1",
                    // },
                    },
                    fpsLimit: 60,
                    interactivity: {
                    events: {
                        onClick: {
                        enable: true,
                        mode: "push",
                        },
                        // onHover: {
                        // enable: true,
                        // mode: "repulse",
                        // },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 4,
                        },
                        push: {
                        quantity: 4,
                        },
                        repulse: {
                        distance: 200,
                        duration: 0.4,
                        },
                    },
                    },
                    particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outMode: "bounce",
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                        enable: true,
                        value_area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        random :{
                        enable: true,
                        minimumValue: 0.1
                        },
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        random: true,
                        value: 3,
                    },
                    },
                    detectRetina: true,
                }}
                width="100%"
                height= "100vh"
                style={{ position:'relative', width:'100%', height:'100vh'}}
                /> 
        </div>
    )
}
