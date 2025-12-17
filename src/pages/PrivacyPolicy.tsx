import React from "react";

const PRIVACY_POLICY = [
  {
    title: "Zovysys is committed to protecting your privacy.",
    content:
      "This Privacy Policy describes our policies and procedures on the collection, use, and disclosure of information when you interact with our website, services, or any other sites and services that link to this Privacy Policy.",
  },
  {
    title: "Consent",
    content:
      "By using our website, you consent to this Privacy Policy and agree to its terms.",
  },
  {
    title: "Information Collection, Use, and Sharing",
    content:
      "When you interact with our website, we may collect information you provide voluntarily, such as your name, email address, phone number, or any other information submitted through forms or communication. Your information will primarily be used to provide our services and respond to your inquiries. We will not disclose your personal information to third parties without your consent, except where required by law.",
  },
  {
    title: "Use of Information",
    content:
      "We may use your information to:\n- Provide and improve our services\n- Contact you with updates, offers, or general information (only if you have opted in)\n- Analyze trends and usage to enhance your experience",
  },
  {
    title: "Data Security",
    content:
      "We take reasonable measures to protect your information. While we strive to safeguard your data, please note that no online transmission can be guaranteed to be completely secure.",
  },
  {
    title: "Links to Other Websites",
    content:
      "Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external sites, and we encourage you to review their privacy policies.",
  },
  {
    title: "Changes to this Privacy Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page, so please review it periodically.",
  },
];

const PrivacyPolicy = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
          Privacy Policy
        </h2>
        <div>
          {PRIVACY_POLICY.map((section, index) => (
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

export default PrivacyPolicy;
