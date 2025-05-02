"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <div className="p-0.5 bg-white rounded-lg mr-2">
                <Image
                  src="/Logo.png"
                  alt="Zubix Logo"
                  width={36}
                  height={36}
                  className="h-14 w-14"
                  priority
                />
              </div>
              <span className="ml-2 text-xl font-bold text-white">Zubix</span>
            </Link>
            <p className="mb-4 text-sm">
            Smart Finance, Better Life. Budget, pay bills,
              recharge, and get loans all in one app.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61556759227426"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com/Zubix_App"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/zubix.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/zubixapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="hover:text-primary transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Download App
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/features#budgeting"
                  className="hover:text-primary transition-colors"
                >
                  Budgeting
                </Link>
              </li>
              <li>
                <Link
                  href="/features#bill-payments"
                  className="hover:text-primary transition-colors"
                >
                  Bill Payments
                </Link>
              </li>
              <li>
                <Link
                  href="/features#recharges"
                  className="hover:text-primary transition-colors"
                >
                  Mobile Recharges
                </Link>
              </li>
              <li>
                <Link
                  href="/features#loans"
                  className="hover:text-primary transition-colors"
                >
                  Instant Loans
                </Link>
              </li>
              <li>
                <Link
                  href="/features#security"
                  className="hover:text-primary transition-colors"
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li>
                38, Gayatri Nagar, Hiran Magri Sector - 5,
                <br /> Udaipur, Rajsthan, India - 313001
              </li>
              <li>Email: support@zubixapp.com</li>
              <li>Phone: +91-9509919001</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Sushibh Empires Private Limited. All
            rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <a href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
