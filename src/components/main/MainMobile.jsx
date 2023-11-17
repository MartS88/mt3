import React from 'react';
import s from './Main.module.scss'
const MainMobile = () => {
    return (
        <>

            <h2>
                Simple and Fascinating
            </h2>


            <div className={s.main_icons}>


                <div className={s.main_icon}>

                    <img src={require('../../assets/settings.png')}  width={50} height={50}   draggable={false}/>

                    <span className={s.icon_title}>

                            Professional Tools
                        </span>

                    <span className={s.about}>
                            Use ready-to-go trading strategies and indicators for confident trading.
                        </span>
                </div>

                <div className={s.main_icon}>

                    <img src={require('../../assets/mobile.png')}  width={40} height={50}   draggable={false}/>

                    <span className={s.icon_title}>

                               Unrestricted Trading
                            </span>

                    <span className={s.about}>
                              Log into the platform and trade from any device.
                            </span>
                </div>

                <div className={s.main_icon}>

                    <img src={require('../../assets/messages-3.png')}  width={60} height={60}   draggable={false}/>

                    <span className={s.icon_title}>

                              Help from a Team of Professionals
                            </span>

                    <span className={s.about}>
                               Get 24/7 support in your native language.
                            </span>
                </div>


                    <div className={s.main_icon}>

                        <img src={require('../../assets/radiio.png')}  width={60} height={61}   draggable={false}/>

                        <span className={s.icon_title}>

                                Fast Withdrawals
                            </span>

                        <span className={s.about}>
                               Withdraw profits immediately.
                            </span>
                    </div>

                    <div className={s.main_icon}>

                        <img src={require('../../assets/dollar-square.png')}  width={60} height={61}   draggable={false}/>

                        <span className={s.icon_title}>

                              Zero Commission
                            </span>

                        <span className={s.about}>
                           Make deposits and withdraw profits without commissions.
                            </span>
                    </div>

                    <div className={s.main_icon}>

                        <img src={require('../../assets/teacher.png')} width={60} height={61}   draggable={false}/>

                        <span className={s.icon_title}>

                             Free Education
                            </span>

                        <span className={s.about}>
                              Learn how to trade profitably in webinars and master classes.
                            </span>
                    </div>

            </div>
            {/*<div className={s.main_icons}>*/}



            {/*<div className={s.main_icon}>*/}

            {/*    <img src={require('../../assets/messages-3.png')}  width={60} height={60}   draggable={false}/>*/}

            {/*    <span className={s.icon_title}>*/}

            {/*              Help from a Team of Professionals*/}
            {/*            </span>*/}

            {/*    <span className={s.about}>*/}
            {/*               Get 24/7 support in your native language.*/}
            {/*            </span>*/}
            {/*</div>*/}

            {/*    <div className={s.main_icon}>*/}

            {/*        <img src={require('../../assets/radiio.png')}  width={60} height={61}   draggable={false}/>*/}

            {/*        <span className={s.icon_title}>*/}

            {/*                Fast Withdrawals*/}
            {/*            </span>*/}

            {/*        <span className={s.about}>*/}
            {/*               Withdraw profits immediately.*/}
            {/*            </span>*/}
            {/*    </div>*/}

            {/*    <div className={s.main_icon}>*/}

            {/*        <img src={require('../../assets/dollar-square.png')}  width={60} height={61}   draggable={false}/>*/}

            {/*        <span className={s.icon_title}>*/}

            {/*              Zero Commission*/}
            {/*            </span>*/}

            {/*        <span className={s.about}>*/}
            {/*              Log into the platform and trade from any device.*/}
            {/*            </span>*/}
            {/*    </div>*/}

            {/*    <div className={s.main_icon}>*/}

            {/*        <img src={require('../../assets/teacher.png')} width={60} height={61}   draggable={false}/>*/}

            {/*        <span className={s.icon_title}>*/}

            {/*             Free Education*/}
            {/*            </span>*/}

            {/*        <span className={s.about}>*/}
            {/*              Learn how to trade profitably in webinars and master classes.*/}
            {/*            </span>*/}
            {/*    </div>*/}

            {/*</div>*/}


        </>
    );
};

export default MainMobile;