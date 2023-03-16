import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Image,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react"
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { ReactNode } from "react"
import { WhatsAppWidget } from "react-whatsapp-widget"
import "react-whatsapp-widget/dist/index.css"

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
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
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={"#"}>Contact</Link>
        </Stack>
      </Container>

      {/* <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>2023 - Maxi Pezzotta</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box> */}
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
