import React from "react";
import { 
  Center,
  Text,
  Button,
  Container 
} from "@chakra-ui/react";

function HomePage() {
  return (
    <>
      <Center 
        minH="100vh" 
        mh="auto"
        bgImage="url('/images/fastMobTracos.png')"
        bgRepeat="no-repeat"
      >
        <Container centerContent>
          <Text 
            as="i" 
            fontSize="179px" 
            fontWeight="bold"
          >
            FastMob
          </Text>
          <Button size="xs" fontSize={26.3}>
            NÃO PERCA TEMPO, BORA ALI
          </Button>
        </Container>
      </Center >      
    </>
      
  )
}

export default HomePage