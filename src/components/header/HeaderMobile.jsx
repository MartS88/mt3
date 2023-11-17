import React from 'react';
import MobileLogo from "./mobilelogo/MobileLogo";
import s from "./Header.module.scss";


const HeaderMobile = () => {
    return (
        <>
            <div className={s.menu_block}>
                <MobileLogo/>

                <div className={s.button_block}>

                    <button className={s.open_account}>Open account</button>

                </div>
            </div>

            <div className={s.header_block}>

                <h1>
                    Trade EUR/USD
                </h1>

                <span>
                            Through the Olymp Trade online trading platform.
                        </span>

                <button className={s.start_now_button}>
                    Start now
                </button>
            </div>
                <div className={s.background}>
                    <img src={require('../../assets/bg_mobile.png')} />
                </div>

            <div className={s.vector_block}>

                <div className={s.up_block}>
                    <div className={s.up_div}>
                        <img src={require('../../assets/mobileFlags.png')} width={40} height={40} draggable={false}/>

                        <span>EUR/USD</span>
                    </div>

                    <div className={s.up_div2}>
                        <span className={s.exchange_result}>
                            $1.07
                        </span>

                        <span className={s.currency}>
                            for 1 EUR
                        </span>
                    </div>
                </div>



                <div className={s.down_block}>

                    <div className={s.chat_area_block}>
                        <span className={s.chat_area}>
                            Chat Area:
                        </span>

                        <div className={s.day}>
                           <span>1 Day</span>

                        </div>
                    </div>

                    <div className={s.img_block}>
                        <img src={require('../../assets/vector.png')} draggable={false} />
                    </div>


                    <div className={s.time_block}>
                        <div className={s.time_block_div}>
                            <span className={s.time}>
                                    12:45
                            </span>

                            <span className={s.date}>
                                    07/11
                            </span>
                        </div>

                        <div className={s.time_block_div}>
                            <span className={s.time}>
                                    12:45
                            </span>

                            <span className={s.date}>
                                    08/11
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderMobile;