import { MdMenu, MdMoreVert } from 'react-icons/md';

import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export function Header() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box>
        <Flex
          h="60px"
          w="100%"
          bg="#FF9F00"
          align="center"
          justify="space-between"
          px={4}
        >
          <Icon
            as={MdMenu}
            color="white"
            fontSize={34}
            mr={4}
            onClick={onOpen}
          />
          <Icon as={MdMoreVert} color="white" fontSize={34} />
        </Flex>
      </Box>
      <Drawer isOpen={isOpen} placement="right" size="full" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" />

          <DrawerBody bg="#ff9d00">
            <Stack mt={10} spacing={6}>
              <Text
                fontSize={24}
                color="white"
                _hover={{ color: 'FF9F00', cursor: 'pointer' }}
                onClick={() => router.push('/')}
              >
                Home
              </Text>
              <Text
                fontSize={24}
                color="white"
                _hover={{ color: 'FF9F00', cursor: 'pointer' }}
                onClick={() => router.push('/clinepam')}
              >
                Dr. Clinipam
              </Text>
              <Text
                fontSize={24}
                color="white"
                _hover={{ color: 'FF9F00', cursor: 'pointer' }}
                onClick={() => router.push('/carteirinha')}
              >
                Carteirinha
              </Text>
              <Text
                fontSize={24}
                color="white"
                _hover={{ color: 'FF9F00', cursor: 'pointer' }}
                onClick={() => router.push('/calendario')}
              >
                Agendar Consultas
              </Text>
              <Text
                fontSize={24}
                color="white"
                _hover={{ color: 'FF9F00', cursor: 'pointer' }}
              >
                Agendamento de Exames
              </Text>
              <Text
                fontSize={24}
                color="white"
                _hover={{ color: 'FF9F00', cursor: 'pointer' }}
              >
                Rede Credenciada
              </Text>
              <Text
                fontSize={24}
                color="white"
                _hover={{ color: 'FF9F00', cursor: 'pointer' }}
              >
                Boletos
              </Text>
              <Text
                fontSize={24}
                color="white"
                _hover={{ color: 'FF9F00', cursor: 'pointer' }}
              >
                Declaração IR
              </Text>
              <Text
                fontSize={24}
                color="white"
                _hover={{ color: 'FF9F00', cursor: 'pointer' }}
              >
                Coparticipação
              </Text>
              <Text
                fontSize={24}
                color="white"
                _hover={{ color: 'FF9F00', cursor: 'pointer' }}
              >
                Prescrições
              </Text>
              <Text
                fontSize={24}
                color="white"
                _hover={{ color: 'FF9F00', cursor: 'pointer' }}
              >
                Liberações
              </Text>
              <Text
                fontSize={24}
                color="white"
                _hover={{ color: 'FF9F00', cursor: 'pointer' }}
              >
                Receitas Médicas
              </Text>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
