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
  const MoreInfo = ({ text, content }) => {
    return (
      <>
        {' '}
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
        )}{' '}
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
            <Text
              color="textSecondary"
              fontSize={{ base: '14px', md: '16px' }}
              whiteSpace="pre-line"
            >
              Hey! I'm Italo Santana, a Computer Science student at the beginning of my career with experience in freelance projects involving data ingestion, transformation, and visualization. <br />
              <br /> I have a strong interest in{' '}
              <MoreInfo
                content="Data Engineering involves designing and building systems for collecting, storing, and processing data at scale."
                text="Data Engineering"
              />
              and I'm currently exploring{' '}
              <MoreInfo
                content="Machine Learning Engineering focuses on deploying ML models in production environments and building ML pipelines."
                text="Machine Learning Engineering"
              />
              with a focus on solutions using{' '}
              <MoreInfo
                content="Python, SQL, Spark, Airflow, and cloud computing platforms like AWS and Azure."
                text="Python, SQL, Spark, Airflow, and cloud computing (AWS & Azure)"
              />
              <br />
              <br />
              Currently, I'm working on developing{' '}
              <MoreInfo
                content="Data pipelines are automated processes that move and transform data from various sources to destinations for analysis."
                text="robust and scalable data pipelines"
              />
              aimed at improving data quality and availability to support decision-making processes.
              <br />
              <br />
              I believe that data can transform decisions into results, and I'm ready to be part of this transformation! 🚀
            </Text>
          </Stack>
        </SlideUpWhenVisible>
        <SlideUpWhenVisible>
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
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}
