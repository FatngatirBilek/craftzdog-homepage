import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListItem,
  // SimpleGrid,
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5'
import { BioSection, BioYear } from '../components/bio'
// import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
// import thumbYouTube from '../public/images/links/youtube.png'
// import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an web developer based in Indonesia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Fathir Bima Shabri
          </Heading>
          <p>Regular Human Being ( Student / Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/Fathir.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Hi, my name is Fathir. I am an Enthusiast Backend Engineer who enjoys working with technology and learning new things in the IT field. Currently, I'm focusing on learning about several Languages such as JS, PHP, Ruby, and also C++ to improve my skills and experience as a developer. I am always interested in learning and continuing to develop myself so that I can provide the best and most effective solutions for every project I work on.
          {/* {' '}
          <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
            Inkdrop
          </Link>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/devaslife"
            passHref
            target="_blank"
          >
            Dev as Life
          </Link>
          &quot; has more than 100k subscribers.
          */}
        </Paragraph>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2007</BioYear>
          Born in Klaten (Central Java), Indonesia.
        </BioSection>
        <BioSection>
          <BioYear>2023 - present</BioYear>
          SMK N 1 KLATEN
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ❤️
        </Heading>
        <Paragraph>
          Art, Music,{' '}
          <Link href="" target="_blank">
            Drawing
          </Link>
          , Playing Piano,{' '}
          <Link href="" target="_blank">
            Photography
          </Link>
          , Code
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/FatngatirBilek" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @FatngatirBilek
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/FatngatirBilek" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @FatngatirBilek
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/fathirbimashabri" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @fathirbimashabri
              </Button>
            </Link>
          </ListItem>
        </List>
      {/*
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;150k subs)
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>
        */}

        <Heading as="h3" variant="section-title">
          Newsletter
        </Heading>
        <p>
          Shoutout to the original creator of this website
        </p>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://github.com/craftzdog"
            scroll={false}
            leftIcon={<EmailIcon />}
            colorScheme="teal"
          >
            Original Creator GitHub
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
