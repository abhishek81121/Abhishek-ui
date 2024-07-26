'use client'
import { MailIcon } from "@/assets/icons/mailicon";
import { Button } from "@nextui-org/button";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import { Passwordicon } from "@/assets/icons/passwordIcon";
import {Link} from "@nextui-org/link";
import { Checkbox } from "@nextui-org/checkbox";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Home(){
    const[email,setEmail]= useState('')
    const[password,setPassword]=useState('');
    const[emailInvalid,setEmailInvalid]=useState(false)
    const router=useRouter();
    async function signUpAttempt(){
      if(localStorage.getItem(email)==null)
      {
      
      localStorage.setItem(email,password)
      router.push('/login')
      }
      else{
        setEmailInvalid(true)
        setEmail('')
        setPassword('')

      }
      // fetch('/credentials/credentials.json').then(async (response)=>{
      //   console.log(await response.json())
      // })
    }
    return <div className="h-full w-full  flex justify-center items-center bg-gradient-to-tr from-[#051367] to-[#1C0A00] ">
        <div className="lg:w-2/5 w-4/5 bg-black border-2 border-slate-600 rounded-xl p-10 flex flex-col justify-between">
        <Input
          type="email"
          label="&nbsp;Email"
          placeholder="you@example.com"
          labelPlacement="outside"
          size="lg"
          onChange={(event)=>{setEmail(event.target.value)}}
          value={email}
          isInvalid={emailInvalid}
          isClearable
          isRequired
          startContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
        <div className="h-10"></div>
        <Input
          type="password"
          label="&nbsp;Password"
          placeholder="**********"
          labelPlacement="outside"
          onChange={(event)=>{setPassword(event.target.value)}}
          size="lg"
          value={password}
          isClearable
          isRequired
          startContent={
            <Passwordicon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
         <div className="h-10"></div>
        <Button color="primary" size="lg" onClick={()=>{
          signUpAttempt();
        }}>
        Sign Up
        </Button>  
        <div className="h-10"></div>
        <div className="text-right">
            <Link href="/login">Login&nbsp;&rarr;</Link>
        </div>
        </div>
        
    </div>
}