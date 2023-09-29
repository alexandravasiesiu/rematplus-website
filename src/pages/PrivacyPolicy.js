import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Footer } from '../components/Footer';
import { Navigation } from "../components/Navigation";
import PolicyRo from "../content/policy/Policy.ro";
import PolicyEn from "../content/policy/Policy.en";
import PolicyDe from "../content/policy/Policy.de";
import { useTranslation } from "react-i18next";

const meta = {
    title: '',
    meta: [],
    link: [],
    style: [],
    script: [],
};

export default function PrivacyPolicy() {
    const { i18n } = useTranslation();
    return (
        <React.Fragment>
            <HelmetProvider>
                <Helmet {...meta}></Helmet>
            </HelmetProvider>
            <Navigation />
            <>
            
            {i18n.language === "ro" && <PolicyRo />}
            {i18n.language === "en" && <PolicyEn />}
            {i18n.language === "de" && <PolicyDe />}
           
            <Footer />
            </>
        </React.Fragment>
    );
}