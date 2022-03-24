import NextLink from 'next/Link'
import {
  Link,
  Container,
  Heading,
  Box,
  useColorModeValue,
  chakra,
  SimpleGrid,
  List,
  ListItem,
  Button,
  Icon,
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Image from 'next/image'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icon'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoWhatsapp
} from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  return (
    <Layout>
    <Container>
    <Box
    flexShrink={0}
    mt={{ base: 4, md: 0 }}
    ml={{ md: 6 }}
    align='center'
    >
    </Box>
    <Box
    borderRadius='lg'
    mb={6}
    p={3}
    textAlign='center'
    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    >
    Fotógrafo em Aracaju-SE
    </Box>

    <Box display={{ md: 'flex' }}>
    <Box flexGrow={1}>
    <Heading as='h2' variant='page-title'>
    Danilo Amarante
    </Heading>
    <p>Fotografo ( Editor / Designer )</p>
    </Box>
    <Box
    flexShrink={0}
    mt={{ base: 4, md: 0 }}
    ml={{ md: 6 }}
    textAlign='center'
    >
    <Box
    borderColor="whiteAlpha.800"
    borderWidth={2}
    borderStyle="solid"
    w="100px"
    h="100px"
    display="inline-block"
    borderRadius="full"
    overflow='hidden'
    >
    <ProfileImage
    src="/images/contents/daniloperfil.svg"
    alt="Profile image"
    borderRadius='full'
    width="100%"
    height="100%"
    />
    </Box>
    </Box>
    </Box>

    <Section delay={0.1}>
    <Heading as="h3" variant="section-title">
    Trabalhos
    </Heading>
    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Sed posuere finibus libero, quis dignissim metus eleifend vitae.
    Praesent mattis augue tortor, eu posuere orci vehicula eu. Nullam
    quis turpis eleifend, bibendum dolor et, congue mi. Cras quis condimentum
    mauris. Suspendisse potenti. Mauris et magna tempor, mollis ipsum ac,
    ornare sem. Pellentesque semper tellus augue, eget scelerisque nisi
    elementum ac. Curabitur interdum quis odio sed sollicitudin. Cras
    eget pharetra lorem. Donec vitae bibendum nisl. Nullam dapibus, elit
    sed elementum pharetra, enim augue ornare turpis, in efficitur quam ligula
    nec sem. Nunc nec ornare mauris
    <NextLink href='https://www.instagram.com/d.aphotos/'>
    <Link> Link para os trbalho mais importante</Link>
    </NextLink>
    .
    </Paragraph>
    <Box
    align='center'
    my={4}
    >
    <NextLink href='/works'>
    <Button
    rightIcon={<ChevronRightIcon />}
    colorScheme='teal'
    >
    Meu Portifólio
    </Button>
    </NextLink>
    </Box>
    </Section>
    <Section delay={0.2}>
    <Heading as='h3' variant='section-title'>
    Biografia
    </Heading>
    <BioSection>
    <BioYear>1930</BioYear>
    Nascido em Aracaju-SE de um soldado que veio do futuro e uma mulher comum.
    </BioSection>
    <BioSection>
    <BioYear>2031</BioYear>
    Iniciei meu treinamento para ajudar na invasão da skynet.
    </BioSection>
    <BioSection>
    <BioYear>2134 (presente)</BioYear>
    Encontrei um robo reconfigurado por mim do futuro para me ajudar e até hoje luto contra as máqunas.
    </BioSection>
    </Section>
    <Section delay={0.3}>
    <Heading as="h3" variant="section-title">
    Meus Gostos
    </Heading>
    <Paragraph>
    Edição, Arte, {' '}
    <Link href='https://www.instagram.com/danilloamarante/'>Música</Link>
    ,{' '} e Fotografia
    </Paragraph>
    </Section>
    <Section delay={0.4}>
    <Heading as="h3" variant="section-title">
    Minhas redes
    </Heading>
    <List>
    <ListItem>
    <Link href='https://www.instagram.com/d.aphotos/' target='_blank'>
    <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoInstagram} />}>
    @d.aphotos
    </Button>
    </Link>
    </ListItem>
    <ListItem>
    <Link href='https://api.whatsapp.com/send?phone=5579996724857&text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%20e%20gostaria%20de%20agendar%20meu%20ensaio%21%20%F0%9F%98%81' target='_blank'>
    <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoWhatsapp} />}>
    Meu whatsapp
    </Button>
    </Link>
    </ListItem>
    </List>
    </Section>
    </Container>
    </Layout>
  )
}

export default Home
