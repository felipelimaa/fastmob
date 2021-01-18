import React from "react";
import Head from "next/head";

import { 
  Center,
  Text
} from "@chakra-ui/react"

function HomePage() {
  return (
    <>
      <Head>
        <title> FastMoB :: Mobilidade por Rotas</title>
      </Head>
      <Center 
        minH="100vh" 
        mh="auto"
        bgImage="url('/images/fastMobTracos.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Text  as="i" fontSize="179px" fontWeight="bold">FastMob</Text>
      </Center >
    </>
      
  )
}

export default HomePage