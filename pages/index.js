import React from "react";

import { 
  Box, 
  Text, 
  Container 
} from "@chakra-ui/react"

function HomePage() {
  return (
    <>
      <Container maxW="xl" centerContent>
        <Box h="100%">
          <Text  as="i" fontSize="179px" fontWeight="bold">FastMob</Text>
        </Box >
      </Container>
    </>
      
  )
}

export default HomePage