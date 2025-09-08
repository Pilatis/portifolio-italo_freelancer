import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'

import { mockData } from '../data/mockData'

export default function Index({ introduction, projects, contactMe }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Italo Santana - Computer Science Student</title>
          <meta content="Italo Santana - Computer Science Student" name="title" />
          <meta content="italosantana, italo santana website" name="keywords" />
          <meta
            content="Computer Science Student passionate about technology and software development."
            name="description"
          />

          <meta content="website" property="og:type" />
          <meta content="https://italosantana.dev" property="og:url" />
          <meta
            content="Italo Santana - Computer Science Student"
            property="og:title"
          />
          <meta
            content="Computer Science Student passionate about technology and software development."
            property="og:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png"
            property="og:image"
          />

          <meta content="summary_large_image" property="twitter:card" />
          <meta content="https://italosantana.dev/" property="twitter:url" />
          <meta
            content="Italo Santana - Computer Science Student"
            property="twitter:title"
          />
          <meta
            content="Computer Science Student passionate about technology and software development."
            property="twitter:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png"
            property="twitter:image"
          />
        </Head>

        <Stack
          as="main"
          alignItems="flex-start"
          justifyContent="center"
          mt={{ base: '15vh', md: '20vh' }}
          pb="144px"
          spacing={{ base: '100px', md: '144px' }}
        >
          <Introduction introduction={introduction} />
          <AboutMe />
          <FeaturedProjects projects={projects} />
          <ContactMe contactMe={contactMe} />
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      introduction: mockData.introduction,
      projects: mockData.projects,
      contactMe: mockData.contactMe,
    },
  }
}
