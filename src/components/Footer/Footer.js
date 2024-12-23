import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Footer Container */}
      <div className="max-w-screen-xl mx-auto px-4 py-6 sm:py-8 md:py-10 lg:py-12 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center md:text-left">
          {/* Logo Section */}
          <div className="space-y-2 flex flex-col items-center md:items-start">
            <h1 className="text-lg font-bold">BioMedVibe</h1>
            <p className="text-sm text-gray-300">
              Transforming health through holistic solutions.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold">Contact</h4>
            <p className="text-sm">Strada Sănătății, Nr. 10, Oraș, Județ</p>
            <p className="text-sm">
              <strong>Telefon:</strong>{" "}
              <a
                href="tel:+1234567890"
                className="text-primary hover:underline"
              >
                +1234567890
              </a>
            </p>
            <p className="text-sm">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@medicalagency.com"
                className="text-primary hover:underline"
              >
                contact@medicalagency.com
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div className="space-y-2 flex flex-col items-center">
            <h4 className="text-lg font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#facebook"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#instagram"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#linkedin"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#youtube"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 py-2 sm:py-4 text-center text-sm">
        <p>© {new Date().getFullYear()} BioMedVibe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
