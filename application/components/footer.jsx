import React from "react";
import { Mastercard, Visa } from "@icons-pack/react-simple-icons";
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-white px-28 pt-14 pb-14"> 
      <div className="block md:flex mb-4">

        <div className="others flex-1 block md:flex">
          <div className="mb-4 flex-1" id="contact-tab">
            <h3 className="mb-4">About</h3>
            <ul className="list-none text-sm">
             <Link href="privacyPolicy" prefetch={false} shallow={false}> 
             <li className="font-normal cursor-pointer mb-2">Data Privacy Policy</li>
             </Link>
             <Link href="termsOfUse" prefetch={false} shallow={false}> 
              <li className="font-normal cursor-pointer mb-2">Terms and Conditions</li>
              </Link>
              
            </ul>
          </div>

          <div className="mb-4 flex-1" id="about-tab">
          <h3 className="mb-4">Contact us</h3>
          <ul className="list-none">
          <a href="mailto:info@useoval.com" > 
              <li className="ffont-normal cursor-pointer">info@useoval.com</li>
          </a>
            </ul>
          </div>
        </div>
        <div className="brands mb-4" style={{
            minWidth: '200px'
        }}>
          <div>
            <Mastercard size={32}/>
          </div>
          <div>
            <Visa size={32} />
          </div>
        </div>
      </div>
      <div id="footer-text" className="pt-5 pb-5">
        <p className="text-base">useoval.com is a product of Oval Technologies, a licensed money service business with registration number (M22433377) registered with Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) for the provision of foreign exchange dealing, money transferring and virtual currencies. We are PCI-DSS compliant to ensure security of your data electronically.</p>
      </div>
    </footer>
  );
};

export default Footer;
