import {
  Box,
  Center,
  Divider,
  HStack,
  Heading,
  Link,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useState } from 'react'

import ReactGA from 'react-ga4'

import mdxPrism from 'mdx-prism'

import readingTime from 'reading-time'

import { useRouter } from 'next/router'
import Container from '../../components/Container'
import MDXComponents from '../../components/MDXComponents'
import ProjectContainer from '../../components/ProjectContainer'

import { mockData } from '../../data/mockData'

import { FaGithub, FaLink, FaPersonBooth, FaUser } from 'react-icons/fa'
import NextSeoData from '../../components/NextSeoData'
import useUtterances from '../../hook/useUtterances'
import Image from 'next/image'

export default function Post({ project }) {
  const router = useRouter()
  const { slug } = router.query

  const [activeId, setActiveId] = useState()
  const toc = [] // Empty TOC for now

  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

  const { isCommentsLoading } = useUtterances('comments', project.title)

  return (
    <>
      <NextSeoData
        slug={slug}
        metadata={project}
        publishedDate={project.date}
      />

      <Container>
        <Stack>
          <Stack
            mx="auto"
            mt="73px"
            border="1px"
            borderColor={{ base: '#333', md: 'borderColor' }}
            borderRadius="10px"
          >
            <Image
              width={1366}
              height={768}
              objectFit="cover"
              style={{
                borderRadius: '10px',
              }}
              alt=""
              priority
              src={project.imageUrl}
              blurDataURL={project.imageUrl}
            />
          </Stack>

          <Stack pt={4}>
            <Heading
              as="h1"
              color="displayColor"
              fontSize={['3xl', '3xl', '5xl', '5xl']}
            >
              {project.title}
            </Heading>
            <Text color="textPrimary" fontSize={['xs', 'xs', 'sm', 'sm']}>
              {project.summary}
            </Text>
            <HStack spacing={2}>
              {project.githubLink && (
                <>
                  <Text>-</Text>
                  <HStack alignItems="center">
                    <FaGithub fontSize="20px" />
                    <Link
                      fontSize={['xs', 'xs', 'sm', 'sm']}
                      href={project.githubLink}
                      isExternal
                      onClick={() => handleClick(`${project.title}_github`)}
                    >
                      Github
                    </Link>
                  </HStack>
                </>
              )}

              {project.deployLink && (
                <>
                  <Text>-</Text>
                  <HStack>
                    <FaLink fontSize="18px" />
                    <Link
                      fontSize={['xs', 'xs', 'sm', 'sm']}
                      href={project.deployLink}
                      isExternal
                      onClick={() => handleClick(`${project.title}_livesite`)}
                    >
                      Live Site
                    </Link>
                  </HStack>
                </>
              )}
            </HStack>
            <HStack>
              <FaUser fill="#D1D5DB" fontSize="14px" />
              <Text color="#D1D5DB" fontSize={['xs', 'xs', 'sm', 'sm']}>
                {project.category}
              </Text>
            </HStack>
          </Stack>

          <Divider h="0.5px" my={4} bg="textSecondary" />
        </Stack>

        <HStack alignItems="start" pt="23px" spacing="36px">
          <Stack w={{ base: '100%', md: '50rem' }}>
            <ProjectContainer>
              <Text color="textSecondary" fontSize="lg" lineHeight="1.6">
                {project.description}
              </Text>
              <br />
              <Text color="textSecondary" fontSize="md">
                <strong>Technologies used:</strong> {project.techStack}
              </Text>
            </ProjectContainer>
          </Stack>

          <Stack
            pos="sticky"
            top="6rem"
            display={{ base: 'none', md: 'flex' }}
            w="250px"
            h="500px"
          >
            <Text color="displayColor" fontSize="xl" fontWeight="semibold">
              Project Details
            </Text>
            <Text color="textSecondary" fontSize="sm">
              <strong>Category:</strong> {project.category}
            </Text>
            {project.githubLink && (
              <Text color="textSecondary" fontSize="sm">
                <strong>Repository:</strong>{' '}
                {/* eslint-disable-next-line chakra-ui/props-order */}
                <Link
                  href={project.githubLink}
                  color="button1"
                  isExternal
                  onClick={() => handleClick(`${project.title}_github_sidebar`)}
                >
                  View on GitHub
                </Link>
              </Text>
            )}
            {project.deployLink && (
              <Text color="textSecondary" fontSize="sm">
                <strong>Live Demo:</strong>{' '}
                {/* eslint-disable-next-line chakra-ui/props-order */}
                <Link
                  href={project.deployLink}
                  color="button1"
                  isExternal
                  onClick={() => handleClick(`${project.title}_livesite_sidebar`)}
                >
                  Visit Site
                </Link>
              </Text>
            )}
          </Stack>
        </HStack>

        <Stack w="100%" mt="36px" mb="15vh">
          {isCommentsLoading && (
            <Center flexDir="column" pt={8}>
              <Spinner w="56px" h="56px" color="#058d92" thickness="5px" />
              <Text pt={2} color="textSecondary" fontSize="sm">
                Loading comments...
              </Text>
            </Center>
          )}
          <Stack opacity={isCommentsLoading ? 0 : 1}>
            <div id="comments" />
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const paths = mockData.projects.map((project) => ({
    params: { slug: project.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const project = mockData.projects.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
    },
  }
}
