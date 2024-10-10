import Image from "next/image";
import Logo from "@/app/assets/Logo.svg";

export default function Home() {
  return (
    <div className="flex gap-8 justify-center items-center">
      <Image
        src={Logo}
        alt="zubix logo"
        className="w-20 md:w-50 aspect-square"
      />
      <div className="font-bold text-xl">
        <div>Zubix - India&apos;s first smart super app will be available</div>
        <div>soon in your service and convenience.</div>
      </div>
    </div>
  );
}