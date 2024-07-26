'use client'
import { LampContainer } from "./../components/lamp";
import { motion } from "framer-motion";
import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button"
export default function Home() {
  return (
    <LampContainer className="h-full w-full">
    <motion.h1
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    >
      Build legal contracts <br /> the right way <br/>
      <Button
      href="/login"
      as={Link}
      color="primary"
      size="lg"
      showAnchorIcon
      variant="solid"
    >
    Login
    </Button>
    </motion.h1>
  </LampContainer>
  );
}
