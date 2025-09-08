import { useState } from 'react'
import { Stack, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react'

import Cards from '../../components/Card'
import Container from '../../components/Container'
import Head from 'next/head'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FaSearch } from 'react-icons/fa'
import { mockData } from '../../data/mockData'

export default function Projects({ projects }) {
  const [query, setQuery] = useState('')
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <Container>
        <Head>
          <title>Projects - Italo Santana</title>
          <meta content="Projects - Italo Santana" name="title" />
          <meta
            content="Computer Science Student passionate about technology and software development."
            name="description"
          />

          <meta content="website" property="og:type" />
          <meta content="https://italosantana.dev/projects" property="og:url" />
          <meta
            content="Projects - Italo Santana"
            property="og:title"
          />
          <meta
            content="Computer Science Student passionate about technology and software development."
            property="og:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img923/3917/IFUVhm.png"
            property="og:image"
          />

          <meta content="summary_large_image" property="twitter:card" />
          <meta
            content="https://italosantana.dev/projects"
            property="twitter:url"
          />
          <meta
            content="Projects - Italo Santana"
            property="twitter:title"
          />
          <meta
            content="Computer Science Student passionate about technology and software development."
            property="twitter:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img923/3917/IFUVhm.png"
            property="twitter:image"
          />
        </Head>
        <Stack
          justifyContent="center"
          my={{ base: '15vh', md: '16vh' }}
          spacing={10}
        >
          <Stack spacing={5}>
            {' '}
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              Projects
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }}>
              I love building projects and practicing my engineering skills,
              here's an archive of things that I've worked on.
            </Text>
            <InputGroup maxW="400px">
              <InputRightElement pointerEvents="none">
                <FaSearch />
              </InputRightElement>
              <Input
                placeholder="Search projects"
                type="text"
                value={query}
                onChange={handleChange}
              />
            </InputGroup>
            <Divider />
          </Stack>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
            {projects
              .filter((e) =>
                e.title.toLowerCase().includes(query.toLowerCase()),
              )
              .map((project) => (
                <Cards
                  key={project.title}
                  desc={project.summary}
                  imageURL={project.imageUrl}
                  tag={project.tags}
                  title={project.title}
                  slug={project.slug}
                />
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      projects: mockData.projects.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      ),
    },
  }
}
