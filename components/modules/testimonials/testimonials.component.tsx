import {
  Box,
  Heading,
  Stack,
  Container,
  useColorModeValue,
  Link,
  Image,
} from "@chakra-ui/react"

const TESTIMONIALS = [
  {
    id: 1,
    src: "/holcim.png",
    href: "https://www.holcim.com.ar",
  },
  {
    id: 2,
    src: "/edasa.png",
    href: "https://www.koandina.com",
  },
  {
    id: 3,
    src: "/saintGobain.png",
    href: "https://www.saint-gobain.ar/es",
  },
  {
    id: 4,
    src: "/porta.png",
    href: "https://portahnos.com.ar",
  },
  {
    id: 5,
    src: "/saxum.jpeg",
    href: "https://saxuming.net",
  },
  {
    id: 5,
    src: "/vidmar.png",
    href: "https://vidmargroup.com/es",
  },
]

const TestimonialContent = ({ href, src }: { src: string; href: string }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow="lg"
      p={6}
      rounded="xl"
      align="center"
      justifyContent="center"
      _hover={{
        boxShadow: "xl",
      }}
    >
      <Link href={href} isExternal>
        <Image boxSize="150px" alt={src} src={src} objectFit="contain" />
      </Link>
    </Stack>
  )
}

export const WithSpeechBubbles = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")} id="testimonials">
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Quienes confiaron en nosotros</Heading>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {TESTIMONIALS.map(({ id, href, src }) => (
            <Box key={id}>
              <TestimonialContent href={href} src={src} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
