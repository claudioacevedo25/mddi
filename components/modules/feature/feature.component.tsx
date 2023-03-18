import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react"
import {
  IoSearchSharp,
  IoBusinessSharp,
  IoConstruct,
  IoCogSharp,
} from "react-icons/io5"
import { ReactElement } from "react"

interface FeatureProps {
  text: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  )
}

export const SplitWithImage = () => {
  return (
    <Container maxW={"5xl"} py={12} id="ourHistory">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.200"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.400", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Sobre nosotros
          </Text>
          <Heading>Soluciones pensadas a medida para su negocio</Heading>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoBusinessSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Diseño mecánico y estructural"}
            />
            <Feature
              icon={<Icon as={IoConstruct} color={"green.500"} w={5} h={5} />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Relevamiento en campo"}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Cálculo y dimensionamiento de equipos"}
            />
            <Feature
              icon={<Icon as={IoCogSharp} color={"blue.500"} w={5} h={5} />}
              iconBg={useColorModeValue("blue.100", "blue.900")}
              text={"Instalaciones industriales eficientemente diseñadas"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src="/working.jpg"
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  )
}
