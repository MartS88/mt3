import React, {useEffect, useState} from 'react';
import s from './Header.module.scss'
import Logo from "./logo/Logo";
import {useMediaQuery} from "react-responsive";
import HeaderMobile from "./HeaderMobile";
const Header = () => {
    const isMobile = useMediaQuery({maxWidth: 765});
    const [data, setData] = useState([])
    const fetchData = async () => {


          try {
              const options = {
                  method: 'GET',
                  headers: {
                      accept: 'application/json',
                      'X-API-KEY': 'fJG8GmvxVAZajZQ/Bi0gRmJPHVjND3RWMsqkreP5Ovc='
                  }
              };


              const response = await    fetch('https://openapiv1.coinstats.app/fiats', options)
              const jsonData = await response.json()
              setData(jsonData[8]?.rate)

          }
          catch (error){
              console.error('Error fetching data', error)
          }

    }
    useEffect(() => {
        fetchData();

    }, [])




    return (
        <header>

                {!isMobile ? (
                    <>

            <div className={s.menu_block}>

                <Logo/>

                <div className={s.button_block}>

                    <button className={s.open_account}>Open account</button>

                </div>

            </div>



            <div className={s.header_block_wrapped}>

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

            </div>

            <div className={s.vector_block}>

                <div className={s.up_block}>
                    <div className={s.up_div}>
                        <img src={require('../../assets/flags.png')} width={94} height={91} draggable={false}/>

                        <span>EUR/USD</span>
                    </div>

                    <div className={s.up_div2}>

                        {data && (
                        <span className={s.exchange_result}>
                               {(1 / data)?.toFixed(2) ?? '1.08'}
                        </span>
                        )}

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

                        <span className={s.day}>
                            1 Day
                        </span>
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
                ) : (
                    <>

                        <HeaderMobile/>
                    </>
                )}
        </header>
    );
};

export default Header;