import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="w-screen h-screen flex ">
      {/* #FBF5B7 */}
      {/* left */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-linear-to-b from-slate-800 to-slate-700 shadow-xl">
        <Link href="/" className="flex items-center lg:justify-start">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
          <span className="lg:block text-gray-600 font-bold ml-2">Rupp</span>
        </Link>
        <Menu />
      </div>

      {/* right */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-slate-200 overflow-scroll">
        <Navbar />
        {children}
      </div>

    </div>
  );
}
