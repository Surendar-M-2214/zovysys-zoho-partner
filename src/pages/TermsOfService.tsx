import React from "react";

const TERMS_OF_USE = [
  {
    title: "Purpose",
    content:
      "These Terms of Use govern your access to and use of the Zovysys website and services. By visiting or using our site, you agree to follow these terms. We may update these terms periodically, so please check back for any changes.",
  },
  {
    title: "Definitions",
    content:
      "• “Zovysys”, “We”, or “Company” refers to Zovysys.\n• “User” or “You” refers to anyone accessing or using our website or services.\n• “Lead” refers to anyone expressing interest in our services through forms on our website.\n• “Services” refers to the services provided by Zovysys.\n• “Third Party” refers to entities outside of Zovysys, including partners and affiliates.\n• “Website” or “Site” refers to the Zovysys website.\n• “Contact Us” is the form used for inquiries or lead generation.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content, including text, images, graphics, and logos on the website, is owned by Zovysys. You may not copy, modify, or use any content for commercial purposes without permission.",
  },
  {
    title: "Trademarks",
    content:
      "Trademarks, logos, and brand elements on this website are the property of Zovysys and its partners. Users are prohibited from using them in a way that suggests endorsement or affiliation without authorization.",
  },
  {
    title: "Marketing and Communications",
    content:
      "If you provide your contact information, you consent to receive communications from Zovysys regarding services and updates. You may opt out at any time by contacting us.",
  },
  {
    title: "Acceptable Use",
    content:
      "You agree not to misuse the website, including but not limited to:\n- Attempting unauthorized access or interfering with functionality\n- Copying, selling, or distributing content without permission\n- Using automated tools or scripts to disrupt the website\n- Framing or mirroring the site on other platforms",
  },
  {
    title: "Privacy",
    content:
      "Your use of this website is also subject to our Privacy Policy, which explains how we handle your information. Please review the Privacy Policy for details.",
  },
  {
    title: "Changes to Terms",
    content:
      "Zovysys may update or revise these Terms at any time. Continued use of the website constitutes your acceptance of the updated terms.",
  },
  {
    title: "Intellectual Property Concerns",
    content:
      "If you believe that your intellectual property rights have been violated by content on our website, please contact us immediately so we can address the issue.",
  },
  {
    title: "Disclaimer",
    content:
      "The website and its content are provided 'as-is' without warranties of any kind. Zovysys is not responsible for any errors, omissions, or damages resulting from use of the website or links to third-party sites.",
  },
  {
    title: "Contact Information",
    content:
      "For questions or concerns regarding these Terms of Use, you can reach us at:\n\nZovysys\nNo 24, Brahminar Street,\nMangalam Village and Post, Tiruvannamalai,\nTamil Nadu - 606 752,\nIndia",
  },
];

const TermsOfService = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
          Terms of Use
        </h2>
        <div>
          {TERMS_OF_USE.map((section, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {section.title}
              </h3>
              <p className="text-muted-foreground whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
