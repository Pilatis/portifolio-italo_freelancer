import { Button, Link } from '@chakra-ui/react';
import React from 'react';
import type { IconType } from 'react-icons';

interface SocialMediaButtonProps {
  name: string;
  href: string;
  icon: IconType;
}

export const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({
  name,
  href,
  icon: IconProps
}) => {
  return (
    <Link href={href} isExternal>
      <Button
        position="static"
        color="white"
        leftIcon={<IconProps color="#3CCF91" size="20px" />}
        size={{ base: 'sm', lg: 'md' }}
        bgColor="whiteAlpha.200"
        _hover={{ bgColor: 'whiteAlpha.100' }}
      >
        {name}
      </Button>
    </Link>
  );
};
