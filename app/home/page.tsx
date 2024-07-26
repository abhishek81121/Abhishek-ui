"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-tr from-[#051367] to-[#1C0A00] ">
      <div className="sm:w-1/2 w-4/5 h-3/4 flex flex-col gap-y-3">
        <div className="h-1/3 w-full flex flex-row gap-x-3">
          <div className="h-full lg:w-1/2 relative w-0 ">
            <Image
              className=" rounded-lg"
              alt=""
              src="/images/imagepdf.png"
              fill={true}
            />
          </div>
          <div className="h-full lg:w-1/2 w-full p-3 bg-black rounded-2xl">
            <span className="text-white text-xl">Upload PDF File</span>
            <br />
            <br />
            <span className="text-white pt-3">
              Easily Upload Your Legal Contract And Review
            </span>
            <br />
            <Button
              className="bg-white text-black mt-3"
              onClick={() => {
                router.push("/home/upload");
              }}
            >
              {" "}
              Upload
            </Button>
          </div>
        </div>
        <div className="h-1/3  w-full flex flex-row gap-x-3">
          <div className="h-full lg:w-1/2 relative w-0">
            <Image
              className=" rounded-lg"
              alt=""
              src="/images/imageconstruct.png"
              fill={true}
            />
          </div>
          <div className="h-full  lg:w-1/2 w-full p-3 bg-black rounded-2xl">
            <span className="text-white text-xl">Construct Legal Contract</span>
            <br />
            <br />
            <span className="text-white pt-3">Construct a Legal document</span>
            <br />
            <Button
              className="bg-white text-black mt-3"
              onClick={() => {
                router.push("/home/infoLegal");
              }}
            >
              {" "}
              Construct
            </Button>
          </div>
        </div>
        <div className="h-1/3 w-full flex flex-row gap-x-3">
          <div className="h-full lg:w-1/2 relative w-0">
            <Image
              className="rounded-lg"
              alt=""
              src="/images/imagelawer.png"
              fill={true}
            />
          </div>
          <div className="h-full lg:w-1/2 w-full p-3 bg-black rounded-2xl">
            <span className="text-white text-xl">Legal Advisor</span>
            <br />
            <br />
            <span className="text-white pt-3">
              Immediate Advice From Our Automated Advisor
            </span>
            <br />
            <Button
              className="bg-white text-black mt-3"
              onClick={() => {
                router.push("/home/chat");
              }}
            >
              Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
