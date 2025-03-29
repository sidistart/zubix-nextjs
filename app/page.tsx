import Image from "next/image";
import Logo from "@/app/assets/background.png";
import Icon from "@/app/assets/icons.png";
import Instagram from "@/app/assets/instagram.png";
import Email from "@/app/assets/email.png";
import Linkedin from "@/app/assets/linkedin.png";
import Facebook from "@/app/assets/facebook.png";
// import Twitter from "@/app/assets/twitter.png";
import Link from "next/link";

export const metadata = {
  title: 'Zubix',
  description: 'Zubix - The super app',
  viewport: 'width=device-width, initial-scale=1',
  other: {
    'fast2sms': 'NRU4XhNSXXlgTT6uehUZPxE1WaVvw7Qk',
  }
}

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex h-screen w-full z-10 relative">
          <Image alt="bg" src={Logo} fill />
          <div className="z-10 flex flex-col items-center gap-4 justify-center w-full">
            <p className="text-2xl font-medium text-white sm:text-4xl">
              Site Under Maintenance
            </p>
            <div className="relative w-2/6 sm:w-2/12 h-[16%] my-6">
              <Image alt="bg" src={Icon} fill />
            </div>
            <p className="text-white text-center w-2/3 font-medium">
              Sorry for the inconvenience. We are currently working on this
              site. Our website is coming soon. Enter your e-mail below and
              we’ll notice you when it&apos;s ready. In the meantime, check our
              facebook and twitter accounts.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="bg-white/40 rounded-lg text-sm placeholder:text-[#293D69] flex-none order-0 grow-0 px-4 py-2 placeholder-gray-500 focus:outline-none  sm:w-3/4"
              />
              <div className="w-2/5 flex-none order-1 grow-0 flex items-center justify-center bg-[#08374E] rounded-lg text-white h-full">
                Get Notified !
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 mb-10 mt-4">
              <Link href="mailto:siddharth@zubixapp.com">
                <Image alt="icon" src={Email} width={40} height={40} />
              </Link>

              <Link href="https://www.instagram.com/zubix.app/">
                <Image alt="icon" src={Instagram} width={40} height={40} />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61556759227426">
                <Image alt="icon" src={Facebook} width={40} height={40} />
              </Link>
              {/* <Image alt="icon" src={Twitter} width={40} height={40} /> */}
              <Link href="https://www.linkedin.com/company/zubixapp/">
                <Image alt="icon" src={Linkedin} width={40} height={40} />
              </Link>
            </div>
            <p className="text-white text-center">
              @ 2025 Sushibh Empires Private Limited. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-20 sm:mt-0 justify-center z-10 h-screen w-full gap-14 relative">
          {/* <div className="w-full relative h-full">
      
        <div className="absolute w-[244.73px] h-[193.66px] left-[-105.38px] top-[0] bg-gradient-to-t from-[#252E48] to-[#252E48] rounded-[30px] rotate-[-30deg]"></div>
        <div className="absolute w-[193.52px] h-[153.14px] left-[838px] top-[19.76px] bg-gradient-to-t from-[#CFC1FF] to-[#CFC1FF] rounded-[30px] rotate-[-30deg]"></div>
        <div className="absolute w-[202.58px] h-[205.69px] left-[231.95px] top-[649.16px] bg-gradient-to-r from-[rgba(0,219,234,0.5)] to-[rgba(13,158,255,0.5)] blur-[5.7px] rounded-[30px] rotate-[42.25deg]"></div>
        <div className="absolute w-[232.5px] h-[231.24px] left-[1048.35px] top-[996.87px] bg-gradient-to-r from-[#9063FF] to-[#734DE5] rounded-[30px] rotate-[-36.81deg]"></div>
        <div className="absolute w-[304px] h-[304px] left-[1067px] top-[373px] bg-gradient-to-r from-[#97C42C] to-[#A7D930] rounded-full"></div>
        </div> */}

          <p className="font-semibold text-5xl ">About Us</p>
          <p className="w-2/3 text-[#181818] text-xl leading-10">
            At Zubix, we are dedicated to revolutionizing the way you manage
            your everyday needs. Founded by a team of passionate innovators, we
            are building the world’s best smart super app designed for the young
            generation. Our platform seamlessly integrates daily essential needs
            into a all in one user-friendly interface. With a focus on
            continuous research and development, we aim to empower our users
            with the tools they need to enhance their lifestyles. Join us on
            this exciting journey as we redefine convenience and connectivity
            for the modern world.
          </p>
        </div>
      </div>
    </>
  );
}
