import Link from "next/link";

const Links = [
    { name: "Oval privacy policy", link: "" },

  {
    name: "Business account agreement and cardholder agreement",
    link: "business-account-agreement-and-cardholder-agreement",
  },
  {
    name: "Customer account agreement and cardholder agreement",
    link: "customer-account-agreement-and-cardholder-agreement",
  },
  {
    name: "E sign consent and electronic ommunications agreement",
    link: "e-sign-consent-and-electronic-ommunications-agreement",
  },

  {
    name: "Evolve bank trust electronic communication consent",
    link: "evolve-bank-trust-electronic-communication-consent",
  },
  { name: "Oval account agreement", link: "oval-account-agreement" },
  {
    name: "Oval terms of service business",
    link: "oval-terms-of-service-business",
  },
  { name: "Oval terms of service", link: "oval-terms-of-service" },
  {
    name: "Solid platform privacy policy",
    link: "solid-platform-privacy-policy",
  },
  { name: "Solid platform terms of use", link: "solid-platform-terms-of-use" },

  {
    name: "Solid website dashboard terms of use",
    link: "solid-website-dashboard-terms-of-use",
  },




];
function Legal(props) {
  const active = props.active || "";
  return (<div className="container">

    {Links.map((link, index) => (
        <Link  key={'legal-' + index} href={'/legal/' + link.link}>
          <p className={active === link.link ? 'block font-bold mb-2 cursor-pointer' : 'bold mb-2 cursor-pointer'}>
          {link.name}
          </p>
       
        </Link>
    ))}
    <a href="https://www.getevolved.com/privacy-policy/" target="_blank">
      <p className="block cursor-pointer">Evolve Privacy Policy</p>
    </a>
  </div>);
}

export default Legal;

