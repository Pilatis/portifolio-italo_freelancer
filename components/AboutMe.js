import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from '@chakra-ui/react'

import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga4'

export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleHover = (event) => {
    ReactGA.event({
      category: 'hover',
      action: event,
    })
  }
  const MoreInfo = ({ text, content, noSpaceBefore, noSpaceAfter }) => {
    return (
      <>
        {!noSpaceBefore && ' '}
        {isLargerThan800 ? (
          <Popover isLazy placement="right" trigger="hover">
            <PopoverTrigger>
              <chakra.span
                color="button1"
                cursor="help"
                onMouseOver={() => handleHover(`about_${text}`)}
              >
                {text}
              </chakra.span>
            </PopoverTrigger>
            <PopoverContent color="white" bg="secondary" borderColor="button1">
              <PopoverArrow bg="button1" />
              <PopoverBody color="textPrimary" fontSize="sm">
                {content}
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : (
          <Text as="span" color="button1">
            {text}
          </Text>
        )}
        {!noSpaceAfter && ' '}
      </>
    )
  }

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Heading fontFamily="Ubuntu" fontSize="2xl">
              ⚡ About Me
            </Heading>
            <Stack spacing={2}>
              <Text
                color="textSecondary"
                fontSize={{ base: '14px', md: '16px' }}
                whiteSpace="pre-line"
              >
                Computer Science Student | Focused on Data, ML & BI | Curious, Collaborative and Exploring New Technologies
              </Text>
              <Text
                color="textSecondary"
                fontSize={{ base: '14px', md: '16px' }}
                whiteSpace="pre-line"
              >
              Computer Science student with experience in data analysis, Machine Learning, and BI projects. I'm interested in exploring different areas of technology and continuously learning, collaborating with multidisciplinary teams to deliver data solutions with real impact. Experience in{' '}
              <MoreInfo
                content="Python is a versatile programming language widely used for data science, machine learning, and automation."
                text="Python"
                noSpaceAfter
              />
              ,{' '}
              <MoreInfo
                content="SQL (Structured Query Language) is used for managing and querying relational databases."
                text="SQL"
                noSpaceBefore
                noSpaceAfter
              />
              ,{' '}
              <MoreInfo
                content="Apache Spark is a unified analytics engine for large-scale data processing."
                text="Spark"
                noSpaceBefore
                noSpaceAfter
              />
              ,{' '}
              <MoreInfo
                content="Apache Airflow is a platform to programmatically author, schedule, and monitor workflows."
                text="Airflow"
                noSpaceBefore
                noSpaceAfter
              />
              ,{' '}
              <MoreInfo
                content="Power BI is a business analytics tool that provides interactive visualizations and business intelligence capabilities."
                text="Power BI"
                noSpaceBefore
                noSpaceAfter
              />
              {' '}and{' '}
              <MoreInfo
                content="Scalable data pipelines are automated processes that efficiently move and transform large volumes of data from various sources to destinations for analysis."
                text="scalable data pipelines"
                noSpaceBefore
                noSpaceAfter
              />
              , applying engineering best practices and{' '}
              <MoreInfo
                content="Exploratory Data Analysis (EDA) is an approach to analyzing datasets to summarize their main characteristics, often with visual methods."
                text="exploratory data analysis (EDA)"
                noSpaceBefore
              />
              . <br />
              <br />
              Motivated to join rotation programs that offer practical learning and technical and leadership development, contributing to data-driven decision-making.
              </Text>
            </Stack>
          </Stack>
        </SlideUpWhenVisible>
        {/*<SlideUpWhenVisible>
          <Flex align="center" justify="center">
            <Box
              pos="relative"
              maxW={{ base: '300px', lg: '350px' }}
              maxH={{ base: '300px', lg: '350px' }}
            >
              <Image
                pos="absolute"
                zIndex={3}
                top="0px"
                right={{ base: '-32px', lg: '-64px' }}
                w={{ base: '100px', lg: '150px' }}
                alt=""
                filter="invert(0.1)"
                src="https://svgsilh.com/svg/26432.svg"
              />
              <Image
                w={{ base: '300px', lg: '350px' }}
                h={{ base: '300px', lg: '350px' }}
                borderRadius="50%"
                alt="Italo Santana"
                src="https://i.imgur.com/jk8NmSx.jpeg"
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>*/}
      </SimpleGrid>
    </>
  )
}
