import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  useColorModeValue,
  List,
  ListItem,
  Button,
  Icon,
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import Image from 'next/image'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoTwitter,
  IoLogoInstagram
} from 'react-icons/io5'


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
          Olá, sou um desenvolvedor fullstack que reside em Aracaju-SE
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Jhonatam Santos
            </Heading>
            <p>desenvolvedor ( WEB / Desktop )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign='center'
          >
            <Box
              borderColor='whiteAlpha.800'
              borderWidth={2}
              borderStyle='solid'
              w='100px'
              h='100px'
              display='inline-block'
              borderRadius='full'
              overflow='hidden'
            >
              <Image
                borderColor='whiteAlpha.800'
                borderWidth={2}
                borderStyle='solid'
                width='100px'
                height='100px'
                src='https://avatars.githubusercontent.com/u/82036601?v=4'
                alt='profile image'
                display='inline-block'
              />
            </Box >
          </Box >
        </Box >

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Sobre mim
          </Heading>
          <Paragraph>
            Estudante do Instituto Federal de Sergipe, descobri no curso de informática minha paixão por desenvolvimento de sistemas.
            Aprendendo a lógica de programação, uma introdução a estrutura de dados, hardware, software e banco de dados,
            tendo java e php como linguagens da grade curricular, mas atualmente me especializando em JavaScript.
            Atualmente estou em busca de uma oportunidade de ingressar no mercado de trabalho e me desenvolver como programador, e profissional.
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
                Meus projetos
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as='h3' variant='section-title'>
            Bio
          </Heading>
          <BioSection>
            <BioYear>2003</BioYear>
            Nacido no município de pão de Açucar-SE.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Ingressei no Instituto Federal de Sergipe (IFS), no curso de Informática, aprendendo o básico de hardware e software,
            com foco em desenvolvimento desktop com java e web com php.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Em fevereiro desse ano me formei e decidi me especializar em JavaScript para desenvolvimento de sistemas.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            Meus hobbies
          </Heading>
          <Paragraph>
           Jogos 2d, League of Legends, praticar artes marciais, programação e ouvir música (estou semper ouvindo músicas).
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as='h3' variant='section-title'>
            Minhas redes sociais
          </Heading>
          <List>
            <ListItem>
              <Link href='https://www.instagram.com/_jhomsantos/' target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoInstagram} />}>
                  @_jhomsantos
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='https://twitter.com/_JhomSantos' target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoTwitter} />}>
                  @_jhomsantos
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container >
    </Layout >
  )
}

export default Home
