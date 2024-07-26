'use client'
import { MailIcon } from "@/assets/icons/mailicon";
import { Button } from "@nextui-org/button";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Input} from "@nextui-org/input";
import { Passwordicon } from "@/assets/icons/passwordIcon";
import {Link} from "@nextui-org/link";
import { Checkbox } from "@nextui-org/checkbox";
import { useEffect, useState } from "react";
import { UserCredentials } from "@/types";
import { useRouter } from "next/navigation";
export default function Home(){
    const[email,setEmail]= useState('')
    const[password,setPassword]=useState('');
    const router=useRouter()
      useEffect(()=>{
      fetch('/credentials/credentials.json').then(async (response)=>{
        const respdata=await response.json()
        respdata.map((data : UserCredentials,index : number)=>{
            if(localStorage.getItem(data.username))
            {
                localStorage.removeItem(data.username)
                
            }localStorage.setItem(data.username,data.password)
        })    
      })
      },[]);
      async function handleLoginAttempt(){
        if(localStorage.getItem(email)===password)
        {
            router.push('/home');
        }else{
          setEmail(()=>"")
          setPassword(()=>'')
          /*TODO : Implement the correct ui features to show that the auth has failed and they need to provide correct credentials */
        }

      }
    return <div className="h-full w-full  flex justify-center items-center bg-gradient-to-tr from-[#051367] to-[#1C0A00] ">
        <div className="lg:w-2/5 w-4/5 bg-black  border-slate-600 rounded-xl p-10 flex flex-col justify-between">
        <Input
          type="email"
          label="&nbsp;Email"
          placeholder="you@example.com"
          labelPlacement="outside"
          size="lg"
          isClearable
          onChange={(event)=>{setEmail(event.target.value)}}
          value={email}
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
         <div className="h-5"></div>
        <div className="text-right">
        <Checkbox defaultSelected size="md">Remember Me</Checkbox>
        </div>
        <div className="h-5"></div>
        <Button color="primary" size="lg" onClick={()=>{handleLoginAttempt()}}>
        Login
        </Button>  
        <div className="h-10"></div>
        <div className="text-right">
            <Link href="/signUp">Sign Up&nbsp;&rarr;</Link>
        </div>
        </div>
        
    </div>
}