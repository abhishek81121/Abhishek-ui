"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen bg-gradient-to-tr flex flex-col items-center from-[#051367] to-[#1C0A00]">
      <div className="h-16"></div>
      <div className="h-2/6 w-4/5 flex flex-row">
        <div className="h-full  relative w-1/2 ">
          <span className="text-3xl font-extrabold text-white">
            Upload Your Documentcolor="danger"
          </span>
          <br />
          <br />
          <span className="text-slate-400">
            {" "}
            Select the file you want to upload
          </span>
          <br />
          <br />
          <Input className="" type="file"></Input>
          <br />
          <br />
          <Button
            color="primary"
            onClick={() => {
              router.push("/home/chat");
            }}
            size="lg"
          >
            Chat
          </Button>
        </div>
        <div className="h-full w-1/2 relative">
          <Button
            size="lg"
            className="absolute bottom-0 right-0"
            onClick={() => router.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
