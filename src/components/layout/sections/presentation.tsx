import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Image,
  SlideFade,
  Stack,
  Text
} from '@chakra-ui/react';
import { SlideFadeCustom } from '../../common/slide-fade-custom';
import { useMedium } from '../../../hook/use-medium';
import { socialMediasData } from '../../../data/social-medias-data';
import { SocialMediaButton } from '../../common/social-media-button';
import type { SocialMediaDataType } from '../../../types/social-media-data';

export const Presentation = () => {
  const isMedium = useMedium();

  return (
    <Stack
      alignItems="flex-start"
      justifyContent="flex-start"
      w="100%"
      spacing={{ base: 8, md: 10 }}
    >
      <SlideFadeCustom>
        <Box width="100%" pos="relative">
          <Image
            pos="absolute"
            zIndex={0}
            top={{ base: '0', md: '-15' }}
            left={{ base: '-4', md: '-10' }}
            w={{ base: '70px', md: '150px' }}
            alt=""
            bgColor="transparent"
            filter="invert(0.1)"
            src="https://svgsilh.com/svg/26432.svg"
          ></Image>
          <Text
            pos="relative"
            zIndex={1}
            color="button1"
            bgColor="transparent"
            fontSize="display2"
            fontWeight="medium"
          >
            Hey there!, I'm-
          </Text>
        </Box>
        <Heading
          pos="relative"
          zIndex={1}
          bgColor="transparent"
          color="displayColor"
          fontSize="display"
          lineHeight={'95%'}
          letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
        >
          Italo Santana
        </Heading>

        <SlideFadeCustom enter={{ duration: 0.4, delay: 0.8 }}>
          <Heading
            color="textSecondary"
            fontSize="display2"
            fontWeight="medium"
            letterSpacing="-1.6px"
            whiteSpace="pre-wrap"
            mt={8}
          >
            <Box as="span" color="displayColor">
              Early career data engineer.
            </Box>
            {isMedium
              ? '\nStudying Computer Science.'
              : ' Studying Computer Science.'}
          </Heading>
        </SlideFadeCustom>

        <SlideFadeCustom enter={{ duration: 0.4, delay: 0.9 }}>
          <Stack textAlign="left" pt={10}>
            <Text color="textSecondary" fontSize="display3">
              🚀 Currently specializing in Frontend (React / Next.js)
            </Text>
            <Text color="textSecondary" fontSize="display3">
              ⚡ Frontend Engineer at Pabbl
            </Text>
          </Stack>
        </SlideFadeCustom>

        <SlideFadeCustom enter={{ duration: 0.4, delay: 1.0 }}>
          <HStack spacing={{ base: '10px', md: '17px' }} pt={5}>
            {socialMediasData.map((item: SocialMediaDataType) => (
              <SocialMediaButton
                key={item.id}
                name={item.name}
                href={item.href}
                icon={item.icon}
              />
            ))}
          </HStack>
        </SlideFadeCustom>
      </SlideFadeCustom>
    </Stack>
  );
};
