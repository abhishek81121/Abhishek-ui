"use client";
import { MailIcon } from "@/assets/icons/mailicon";
import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { useEffect, useState } from "react";

export default function Home() {
  const [datajson, setData] = useState([]);
  useEffect(() => {
    fetch("/chat/chatforpdf.json").then(async (response) => {
      const temp = await response.json();
      setData(() => temp);
    });
  }, []);
  return (
    <div className="h-screen w-screen bg-gradient-to-tr flex flex-col items-center from-[#051367] to-[#1C0A00]">
      <div className="h-full w-full flex flex-col items-center">
        <div className="h-5/6 lg:w-4/5  overflow-scroll scrollbar-hide rounded-t-2xl">
          {datajson.map((item: any, index) => (
            <div key={index} className="flex items-center p-3 rounded-lg mb-2">
              {index % 2 == 0 ? (
                <Card className="text-white bg-slate-800 w-9/12  left-0">
                  <CardBody>
                    {
                      <>
                        <Avatar
                          src="https://img.freepik.com/free-photo/ai-generated-concept-human_23-2150688375.jpg"
                          size="md"
                        />
                        {item.response}
                      </>
                    }
                  </CardBody>
                </Card>
              ) : (
                <div className="h-full w-full flex items-end justify-end">
                  <Card className="text-white bg-slate-800 max-w-9/12 w-fit right-0">
                    <CardBody className="text-right">
                      <Avatar
                        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                        size="md"
                      />
                      {item.response}
                    </CardBody>
                  </Card>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="h-1/6 lg:w-4/5  flex flex-row gap-x-5 rounded-b-2xl lg:p-3">
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            size="md"
          />
          <Input
            type="text"
            placeholder="Enter Your Message"
            size="lg"
            endContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
      </div>
    </div>
  );
}
