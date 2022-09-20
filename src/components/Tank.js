import React from 'react';
import Logo from '../assets/login.png';
import '../style/tanks.css';
import { AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { useRef, useEffect, useState } from 'react';
import TankLogo from '../assets/tank.png';
import PressureTxLogo from '../assets/pressure.png';
import pressureRotateRightLogo from '../assets/pressureRotateRight.png';
import pressureRotateLeftLogo from '../assets/pressureRotateLeft.png';
import ValvuLogo from '../assets/valvu.png';
import ValvuRotateRightLogo from '../assets/valvuRotateRight.png';
import ValvuRotateLeftLogo from '../assets/valvuRotateLeft.png';

const Tank = () => {
    const areas = ['A1', 'A2', 'B1', 'B1G', "B5", 'B9', 'C2', 'C3', 'C5', 'C10', 'C11', 'C12', 'C13', 'C14', 'D9', 'D10', 'D11', 'D13'];
    const canvas = useRef();
    const canvasParent = useRef();
    const [ height, setHeight ] = useState();
    let ctx = null;
 
    useEffect(() => {
      const canvasEle = canvas.current;
      canvasEle.width = canvasParent.current.clientWidth;
      canvasEle.height = canvasParent.current.clientHeight;
      setHeight(canvasParent.current.clientHeight);
   
      ctx = canvasEle.getContext("2d");
    }, []);
   
    useEffect(() => {
        ctx.font = "20px Bold";
        ctx.fillText("INLET", 320, canvasParent.current.clientHeight / 2 + 30);
        //pompu line
        ctx.beginPath();
        ctx.moveTo(600, 100);
        ctx.lineTo(600, canvasParent.current.clientHeight / 2);
        ctx.lineTo(350, canvasParent.current.clientHeight / 2);
        ctx.lineTo(350, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(610, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(610, 100);
        ctx.lineTo(600, 100);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 0.5;
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(650, 100);
        ctx.lineTo(650, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(500, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(500, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(510, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(510, canvasParent.current.clientHeight / 2 + 60);
        ctx.lineTo(1100, canvasParent.current.clientHeight / 2 + 60);
        ctx.lineTo(1100, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(1110, canvasParent.current.clientHeight / 2 + 300);
        ctx.lineTo(1110, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(660, canvasParent.current.clientHeight / 2 + 50);
        ctx.lineTo(660, 100);
        ctx.lineTo(650, 100);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'rgba(214,214,214,0.8)';
        ctx.fill();
        ctx.stroke();

        //water direction
        ctx.beginPath();
        ctx.moveTo(350, canvasParent.current.clientHeight / 2);
        ctx.lineTo(380, canvasParent.current.clientHeight / 2);
        ctx.lineTo(380, canvasParent.current.clientHeight / 2 - 5);
        ctx.lineTo(400, canvasParent.current.clientHeight / 2 + 5);
        ctx.lineTo(380, canvasParent.current.clientHeight / 2 + 15);
        ctx.lineTo(380, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(350, canvasParent.current.clientHeight / 2 + 10);
        ctx.lineTo(350, canvasParent.current.clientHeight / 2);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();

        output({x: 502, y: canvasParent.current.clientHeight / 2 + 295});
        output({x: 1102, y: canvasParent.current.clientHeight / 2 + 295});
        followRight({x: 700, y: canvasParent.current.clientHeight / 2 + 45});
        followRight({x: 900, y: canvasParent.current.clientHeight / 2 + 45});
        followRight({x: 500, y: canvasParent.current.clientHeight / 2 - 5});
        followLeft({x: 600, y: canvasParent.current.clientHeight / 2 + 45});
        followUp({x: 595, y: 430});
        followUp({x: 595, y: 230});
        followDown({x: 645, y: 410});
        followDown({x: 645, y: 210});

        //tank status pointer
        ctx.beginPath();
        ctx.moveTo(600, 275);
        ctx.lineTo(480, 275);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(500, 715);
        ctx.lineTo(450, 715);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(574, 375);
        ctx.lineTo(480, 375);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(1112, 715);
        ctx.lineTo(1166, 715);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(683, 130);
        ctx.lineTo(733, 130);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(660, 230);
        ctx.lineTo(730, 230);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(660, 275);
        ctx.lineTo(730, 275);
        ctx.strokeStyle = 'black';
        ctx.lineStyle = 1;
        ctx.stroke();
    }, []);

    const output = position => {
        ctx.beginPath();
        ctx.moveTo(position.x, position.y);
        ctx.lineTo(position.x, position.y + 40);
        ctx.lineTo(position.x - 7, position.y + 40);
        ctx.lineTo(position.x + 4, position.y + 50);
        ctx.lineTo(position.x + 14, position.y + 40);
        ctx.lineTo(position.x + 7, position.y + 40);
        ctx.lineTo(position.x + 7, position.y);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.stroke();
    }

    const followRight = position => {
        ctx.beginPath();
        ctx.moveTo(position.x, position.y);
        ctx.lineTo(position.x, position.y + 20);
        ctx.lineTo(position.x + 20, position.y + 10);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
    }

    const followLeft = position => {
        ctx.beginPath();
        ctx.moveTo(position.x, position.y);
        ctx.lineTo(position.x, position.y + 20);
        ctx.lineTo(position.x - 20, position.y + 10);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
    }

    const followUp = position => {
        ctx.beginPath();
        ctx.moveTo(position.x, position.y);
        ctx.lineTo(position.x + 20, position.y);
        ctx.lineTo(position.x + 10, position.y - 20);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
    }

    const followDown = position => {
        ctx.beginPath();
        ctx.moveTo(position.x, position.y);
        ctx.lineTo(position.x + 20, position.y);
        ctx.lineTo(position.x + 10, position.y + 20);
        ctx.strokeStyle = 'white';
        ctx.fillStyle = 'blue';
        ctx.fill();
        ctx.stroke();
    }

    return (
        <div className="container-fluid tank" style={{ paddingLeft: "1px", paddingRight: "1px", overflow: "hidden" }}>
            <header style={{ backgroundColor: "#e0e0e0"}}>
                <div className="container-fluid" style={{ paddingLeft: "1px", paddingRight: "1px" }}>
                    <div className="row">
                        <div className="col-md-10 d-flex">
                            <img src={Logo} width="100" height="75" alt="Not found img" />
                            <div className="container-fluid">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <h3><i>B1-1 ZONE ESR AND DMA</i></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 d-flex justify-content-center">
                            <div style={{ fontSize: '12px', fontWeight: 'bold' }}>
                                <div className='time border-left'>Thursday, September 1, <br/> 2022 11:49:30 PM</div>
                                <div className="username border-left">User: DESKTOP-TEDB6</div>
                                <div className='logout'>
                                    <button className="btn-login"><AiOutlineLogin /> Login</button>
                                    <button className="btn-logout"><AiOutlineLogout /> Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="areas-list d-flex">
                <button className="btn-menu">MENU</button>
                <button className="btn-menu">ANALYTICS</button>
                {
                    areas.map((item, index) => {
                        return (
                            <button className="btn-area" key={index}>{ item }</button>
                        )
                    })
                }
                <button className="btn-menu">DMA</button>
            </div>
            <div className="tank-status" ref={canvasParent}>
                <canvas ref={canvas} ></canvas>
                <img src={TankLogo} alt="not found" style={{ top: 85, left: 506 }} width="200" height="250" />
                <img src={pressureRotateRightLogo} alt="not found" style={{ top: 260, left: 595 }} width="41" height="30" />
                <img src={pressureRotateRightLogo} alt="not found" style={{ top: 700, left: 496 }} width="41" height="30" />
                <img src={pressureRotateLeftLogo} alt="not found" style={{ top: 360, left: 574 }} width="41" height="30" />
                <img src={pressureRotateLeftLogo} alt="not found" style={{ top: 700, left: 1074 }} width="41" height="30" />
                <img src={ValvuRotateRightLogo} alt="not found" style={{ top: 600, left: 1095 }} width="41" height="30" />
                <img src={ValvuRotateLeftLogo} alt="not found" style={{ top: 600, left: 474 }} width="41" height="30" />
                <h3>ESR-1</h3>
                <div className="valvu-status" style={{ top: '110px', left: '733px'}}>
                    <div className="valvu-status-title">A2 IN LT-1</div>
                    <div className="valvu-status-value">
                        <span>0.00</span>
                        <span>%</span>
                    </div>
                </div>
                <div className="valvu-status" style={{ top: '210px', left: '733px'}}>
                    <div className="valvu-status-title">A2 D0 S0 CA-1</div>
                    <div className="valvu-status-value">
                        <span>-1.25</span>
                        <span>ppm</span>
                    </div>
                </div>
                <div className="valvu-status" style={{ top: '260px', left: '733px'}}>
                    <div className="valvu-status-title">A2 D1 S0 MCMP-1</div>
                    <div className="valvu-status-value">
                        <span>0.00</span>
                        <span>bar</span>
                    </div>
                </div>
                <div className="valvu-status" style={{ top: '700px', left: '1166px'}}>
                    <div className="valvu-status-title">MFM_A2_D3_S0_MFM_2_DN300</div>
                    <div className="valvu-status-value">
                        <span>350.79</span>
                        <span>m3/hr</span>
                    </div>
                    <div className="valvu-status-value">
                        <span>4085.3</span>
                        <span>m3</span>
                        <span>Today</span>
                    </div>
                    <div className="valvu-status-value">
                        <span>2195.2</span>
                        <span>m3</span>
                        <span>Prev.day</span>
                    </div>
                </div>
                <div className="valvu-status" style={{ top: '260px', left: '280px'}}>
                    <div className="valvu-status-title">A2 IN MFM-1</div>
                    <div className="valvu-status-value">
                        <span>0.00</span>
                        <span>m3/hr</span>
                    </div>
                    <div className="valvu-status-value">
                        <span>0.0</span>
                        <span>bar</span>
                    </div>
                </div>
                <div className="valvu-status" style={{ top: '360px', left: '280px'}}>
                    <div className="valvu-status-title">A2 IN PT-1</div>
                    <div className="valvu-status-value">
                        <span>0.00</span>
                        <span>bar</span>
                    </div>
                </div>
                <div className="valvu-status" style={{ top: '700px', left: '250px'}}>
                    <div className="valvu-status-title">MFM_A2_D3_S0_MFM_2_DN300</div>
                    <div className="valvu-status-value">
                        <span>-0.10</span>
                        <span>m3/hr</span>
                    </div>
                    <div className="valvu-status-value">
                        <span>0.15</span>
                        <span>m3</span>
                        <span>Today</span>
                    </div>
                    <div className="valvu-status-value">
                        <span>2839.0</span>
                        <span>m3</span>
                        <span>Prev.day</span>
                    </div>
                </div>

                <div className="valvu-name" style={{ top: height / 2 + 80 + "px", left: "400px" }}>
                    A2 D3 S0 ASV-1 DN300
                </div>
                <div className="valvu-name" style={{ top: height / 2 + 80 + "px", left: "1000px" }}>
                    A2 D3 S0 ASV-2 DN300
                </div>
                <button style={{top: height / 2 + 350 + "px", left: "425px"}}>DMA-1</button>
                <button style={{top: height / 2 + 350 + "px", left: "1025px"}}>DMA-2</button>
            </div>
        </div>
    )
}

export default Tank;