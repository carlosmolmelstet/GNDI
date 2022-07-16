import { useEffect, useState } from 'react';

import {
  Box,
  Checkbox,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Select,
  Stack,
  Text,
  Textarea,
  Spinner,
  Flex,
} from '@chakra-ui/react';
import { BoxMenu } from '@components/cardMenu';
import { CalendarIcon } from '@components/icons/CalendarIcon';
import { CardIcon } from '@components/icons/CardIcon';
import { DoctorIcon } from '@components/icons/DoctorIcon';
import { Layout } from '@components/layout';
import { useRouter } from 'next/router';

export default function HotSite() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(false);

    setTimeout(() => {
      setIsLoading(true);
    }, 3000);
  }, [showModal]);

  return (
    <Layout pageTitle="Home">
      <Box p={4}>
        <Heading color="#FF9F00" mb={10}>
          Dr Clinipam
        </Heading>
        <Stack spacing={8}>
          <Box>
            <Text>Quem será atendido?</Text>
            <Select mt={2}>
              <option>Ana Carolina Knop</option>
            </Select>
          </Box>
          <Box>
            <Text>Marque os sistomas que você tem sentido..</Text>
            <Stack spacing={3} mt={2}>
              <Checkbox>Diarréia</Checkbox>
              <Checkbox>Dor Articulares</Checkbox>
              <Checkbox>Dor de cabeça</Checkbox>
              <Checkbox>Dor no corpo</Checkbox>
              <Checkbox>Dor de garganta</Checkbox>
              <Checkbox>Dor no peito</Checkbox>
              <Checkbox>Dor para urinar</Checkbox>
              <Checkbox>Falta de ar</Checkbox>
              <Checkbox>Febre</Checkbox>
              <Checkbox>Lesões na pele</Checkbox>
              <Checkbox>Mal estar</Checkbox>
              <Checkbox>Palpitação</Checkbox>
              <Checkbox>Tontura</Checkbox>
              <Checkbox>Tosse</Checkbox>
              <Checkbox>Vômito</Checkbox>
              <Checkbox>Tosse</Checkbox>
              <Checkbox>Tosse</Checkbox>
            </Stack>
          </Box>
          <Box>
            <Text>Você toma algum medicamento?</Text>
            <Textarea mt={2}></Textarea>
          </Box>
          <Button bg="#FF9F00" onClick={() => setShowModal(true)}>
            Continuar
          </Button>
        </Stack>
      </Box>
      <Flex
        justify="center"
        align="center"
        display={showModal ? 'flex' : 'none'}
        bg="#000000d1"
        h="100%"
        w="100%"
        position="absolute"
        top={0}
      >
        {isLoading ? (
          <Flex direction="column" align="center">
            <Text color="white" fontSize={20} textAlign="center" mb={5}>
              O Medico esta te aguardando no Consultório Virtual
            </Text>
            <Button
              bg="#FF9F00"
              w="100%"
              maxW="300px"
              onClick={() => router.push('/')}
            >
              Entrar
            </Button>
          </Flex>
        ) : (
          <Flex direction="column" align="center">
            <Spinner w="100px" h="100px" color="white" mb={5} />
            <Text color="white" fontSize={20}>
              Aguardando medico...
            </Text>
          </Flex>
        )}
      </Flex>
    </Layout>
  );
}
