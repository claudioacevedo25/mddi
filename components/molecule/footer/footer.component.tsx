import {
  Box,
  Container,
  Stack,
  Image,
  useColorModeValue,
  Button,
  Text,
} from "@chakra-ui/react"
import { WhatsAppWidget } from "react-whatsapp-widget"
import "react-whatsapp-widget/dist/index.css"
import { handleClickScroll } from "@/helpers/handleClickScroll"

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("white", "white.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Image
          alt={"Hero Image"}
          fit={"fill"}
          align={"center"}
          w={"160px"}
          h={"80px"}
          src="/brand.png"
        />
        <Text
          color={"gray.600"}
          fontSize={{ base: "sm", sm: "lg" }}
          as="span"
          textAlign="center"
        >
          Paraguay 128 P.A 3 - B Centro <br />
          CP 5186 - Alta Gracia - Córdoba
        </Text>
        <Stack direction={"row"} spacing={6} py={4}>
          <Button
            bg={useColorModeValue("blue.400", "blue.800")}
            color={useColorModeValue("white", "blue.800")}
            _hover={{
              bg: useColorModeValue("blue.700", "blue.800"),
            }}
            onClick={() => handleClickScroll()}
          >{`Volver arriba`}</Button>
        </Stack>
      </Container>

      <WhatsAppWidget
        phoneNumber="+543516500110"
        companyName="MDDI"
        replyTimeText="Normalmente responde en pocos minutos"
        message={`Hola, ¿cómo estás? Gracias por contactarnos. Por favor dejanos tu consulta y te responderemos a la brevedad.`}
        inputPlaceHolder="Escribe tu mensaje"
        sendButtonText="Enviar consulta"
      />
    </Box>
  )
}
