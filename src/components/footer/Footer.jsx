import React from 'react';
import s from './Footer.module.scss'
import 'react-phone-input-2/lib/bootstrap.css'
import {useMediaQuery} from "react-responsive";
import FooterForm from "./footerform/FooterForm";
import FooterContent from "./footercontent/FooterContent";
import MobileFooterForm from "./mobilefooterform/MobileFooterForm";
import MobileFooterContent from "./mobilefootercontent/MobileFooterContent";

const Footer = () => {

    const isMobile = useMediaQuery({maxWidth: 765});


    return (
        <footer>
            {!isMobile ? (

                <>

                    <FooterForm/>
                    <FooterContent/>


                </>


            ) : (
                <>
                    <MobileFooterForm />
                    <MobileFooterContent/>

                </>
            )}

        </footer>
    )
        ;
};

export default Footer;