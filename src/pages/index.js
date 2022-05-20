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
  IoLogoInstagram,
  IoLogoGithub,
  TiDeviceLaptop
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
          Olá, sou um desenvolvedor java júnior
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Jhonatam Santos
            </Heading>
            <p>desenvolvedor ( Java / Spring Boot )</p>
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
            Sou um desenvolvedor java formado em técnico de informática pelo Insituto Federal de Sergipe (IFS), 
            em busca do meu desenvolvimento como programador e da primeira vaga de trabalho.
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
            Competências
          </Heading>
          <List>
            <ListItem>
              <Paragraph>
                Java
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Lógica de programação
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Programação orientada a objetos (POO)
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Estrutura de dados
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Git / GitHub
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                REST API
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                SQL
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Spring Boot
              </Paragraph>
            </ListItem>
            <ListItem>
              <Paragraph>
                Spring Security
              </Paragraph>
            </ListItem>
          </List>
        </Section>
        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            Bio
          </Heading>
          <BioSection>
            <BioYear>2003</BioYear>
            Nacido no município de Pão de Açucar-SE.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
              Inicio do meu curso de Técnico de Informática no IFS, onde aprendi sobre lógica de programação, e estrutura de dados básica em Java.
            </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Em fevereiro de 2022 me formei.
          </BioSection>
        </Section>
        <Section delay={0.4}>
          <Heading as='h3' variant='section-title'>
            Meus hobbies
          </Heading>
          <Paragraph>
           Jogos 2d, League of Legends, praticar artes marciais, programação e ouvir música (estou semper ouvindo músicas).
          </Paragraph>
        </Section>
        <Section delay={0.5}>
          <Heading as='h3' variant='section-title'>
            Minhas redes sociais
          </Heading>
          <List>
            <ListItem>
              <Link href='https://www.instagram.com/_jhomsantos/' target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoInstagram} />}>
                  Instagram
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='https://twitter.com/_JhomSantos' target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoTwitter} />}>
                  Twitter
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='https://github.com/Jhonatam-Santos' target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoGithub} />}>
                  GitHub
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='https://dev.to/jhonatamsantos' target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={TiDeviceLaptop} />}>
                  Dev.to
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
