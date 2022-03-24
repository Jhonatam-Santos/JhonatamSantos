import NextLink from 'next/link'
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
import { ChevronRightIcon } from '@chakra-ui/icons'
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
          Hello, I&apos;m a full-stack developer in Aracaju-SE
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Jhonatam Santos
            </Heading>
            <p>Developer ( Node.js / React.js / Next.js )</p>
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
              <ProfileImage
                src='https://avatars.githubusercontent.com/u/82036601?v=4'
                alt='Profile image'
                borderRadius='full'
                width='100%'
                height='100%'
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Works
          </Heading>
          <Paragraph>
            Currently studying Node.js, C, C++, C#, JavaScript, React.js and Next.js. I'm looking forward
            for the first wave as a programmer, passionate about programming I have the basis for
            learn any language and technology proposed, I have some projects in
            progress developed in java, php and react. My TCC project in java and react
            is waiting to be used in the state government when completed nominated of
            “maquinaApi” on my github, in partnership with the Federal University of Sergipe, if
            given the opportunity, it will be a pleasure to work with you.
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
                My projects
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
            Born in 2003 in Pão de Açucar, I moved to Aracaju shortly afterwards, where I have lived most of my life.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            I was approved in the computer technician course at the Federal Institute of Sergipe (IFS).
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            I finished my course with a java project (still incomplete) that will be used in the state government soon, in addition to venturing into tools like PHP, Laravel, Node.js, JavaScript, React.js and Next.js. Knowledge of git versioning tools.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as='h3' variant='section-title'>
            I ♥
          </Heading>
          <Paragraph>
            Programação, Jogos, Artes Marciais, Animes, Música e Esporte.
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as='h3' variant='section-title'>
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href='https://www.instagram.com/_jhomsantos/' target='_blank'>
                <Button variant='ghost' colorScheme='teal' leftIcon={<Icon as={IoLogoInstagram} />}>
                  @_jhomsantos
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
