import { MdMenu } from 'react-icons/md';

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Stack,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react';
import { ConfigIcon, HomeIcon } from '@components/icons';
import { Logo } from '@components/ilustrations';
import { useRouter } from 'next/router';
import { v4 } from 'uuid';

import { MenuItem, MenuProps } from './types';

const menuItems: MenuItem[] = [
  {
    title: 'Minhas Propriedade',
    icon: <HomeIcon />,
    path: '/owner/properties',
    isActive: true,
  },
  {
    title: 'Nova Propriedade',
    icon: <HomeIcon />,
    path: '/owner/new-propertie',
  },
  {
    title: 'Configurações',
    icon: <ConfigIcon />,
    path: '/config',
  },
];

export function Menu({ layoutSize }: MenuProps) {
  const router = useRouter();

  return (
    <Stack spacing={4}>
      {menuItems.map(item => {
        item.isActive = item.path === router.pathname;
        return (
          <Flex
            key={v4()}
            align="flex-end"
            justify={layoutSize === 'md' ? 'center' : 'initial'}
            _hover={{
              cursor: 'pointer',
              bg: item.isActive ? 'none' : 'neutrals.lightest',
            }}
            p={2}
            borderRadius={8}
            w={layoutSize === 'md' ? '50px' : '100%'}
            onClick={() => router.push(item.path)}
          >
            <Box
              position="absolute"
              bg="#1DAEFF"
              left={0}
              w="3px"
              borderTopRightRadius={4}
              borderBottomRightRadius={4}
              h="28px"
              hidden={!item.isActive}
            ></Box>
            <Tooltip label={item.title} hidden={layoutSize !== 'md' && true}>
              <Box
                css={{
                  '& svg': {
                    width: 24,
                    height: 24,
                  },
                  '& svg path': {
                    fill: item.isActive ? '#1DAEFF' : '#DCDADA',
                  },
                }}
                mr={layoutSize === 'md' ? 0 : 4}
              >
                {item.icon}
              </Box>
            </Tooltip>

            <Text
              fontSize={16}
              color="neutrals.darkest"
              hidden={layoutSize === 'md'}
            >
              {item.title}
            </Text>
          </Flex>
        );
      })}
    </Stack>
  );
}

export function MenuMobile({ layoutSize }: MenuProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      hidden={layoutSize !== 'sm' && true}
      w="100vw"
      h="60px"
      justify="center"
      align="center"
      px={4}
      bg="neutrals.white"
      position="relative"
    >
      <Logo w="160px" h="32px" />
      <Icon
        color="neutrals.base"
        fontSize={30}
        p={1}
        borderRadius={4}
        as={MdMenu}
        onClick={onOpen}
        position="absolute"
        left={4}
        _hover={{
          bg: 'neutrals.lightest',
          cursor: 'pointer',
          color: 'neutrals.dark',
        }}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton right={4} top={5} />
          <DrawerHeader mb={8}>
            <Logo w="160px" h="32px" />
          </DrawerHeader>

          <DrawerBody>
            <Menu layoutSize={layoutSize} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
