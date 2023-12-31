import React from 'react';
import s from '../footercontent/FooterContent.module.scss'
const MobileFooterContent = () => {
    return (

        <>
                <div className={s.footer_block}>

                    <div className={s.first}>
                        <img src={require('../../../assets/footer_icon.png')} width={66} height={45} draggable={false}/>

                        <p>
                            MTrading execution quality is confirmed by VMT and complies with best execution
                            standards.
                        </p>


                    </div>

                    <div className={s.first}>
                        <img src={require('../../../assets/footer_icon2.png')} width={110} height={48} draggable={false}/>


                        <p>
                            The interests of MTrading clients are protected by the Financial Commission’s
                            Compensation
                            Fund for up to €20 000 per claim.
                        </p>
                    </div>
                </div>


            <div className={s.ul_div}>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/MTradingGlobal" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../../assets/facebook.png')} width={10} height={18} draggable={false} alt="Facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://t.me/MtradingClub" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../../assets/telegram.png')} width={18} height={15} draggable={false} alt="Telegram"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/mtrading" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../../assets/x.png')} width={19} height={16} draggable={false} alt="Twitter"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/mtrading/" target="_blank" rel="noopener noreferrer">
                            <img src={require('../../../assets/linkedin.png')} width={20} height={20} draggable={false} alt="LinkedIn"/>
                        </a>
                    </li>
                </ul>

                <div className={s.line}></div>

                <p className={s.footer_about}>
                    Address: First Floor, First Saint Vincent Bank Ltd. Building, James Street, Kingstown, St.
                    Vincent and the Grenadines. MTrading (ServiceComsvg Ltd.) incorporated under registered number
                    24275 IBC 2017 by the Registrar of International Business Companies, registered by the Financial
                    Services Authority of Saint Vincent and the Grenadines. Legal: This website is administrated by
                    General Brent LP Risk warning: Trading foreign exchange or contracts for differences on margin
                    carries a high level of risk, and may not be suitable for all investors. There is a possibility
                    that you may sustain a loss equal to or greater than your entire investment. Therefore, you
                    should not invest or risk money that you cannot afford to lose. You should ensure you understand
                    all of the risks. Before using ServiceComSvg Ltd services please acknowledge the risks
                    associated with trading. The content of this Website must not be construed as personal advice.
                    ServiceComSvg Ltd. recommends you seek advice from an independent financial advisor. Regional
                    Restrictions: ServiceComsvg ltd. does not provide services to residents of certain
                    jurisdictions, such as: Japan, the United States of America, Canada, Germany, New Zealand, and
                    some other regions. For more information please refer to our FAQ section.</p>
            </div>






</>
    );
};

export default MobileFooterContent;