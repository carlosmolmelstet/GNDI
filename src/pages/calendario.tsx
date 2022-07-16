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

export default function Carteirinha() {
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
    <Layout pageTitle="Agendar">
      <Flex bg="#FF9F00" justify="space-around" px={4} py={2}>
        <Text color="white">PRÓXIMOS</Text>
        <Text color="#ffffff83">HISTÓRICO</Text>
      </Flex>
      <Flex px={4} direction="column">
        <Stack mt={10}>
          <Box borderLeft="1px solid #FF9F00" px={3} py={1}>
            <Text fontWeight={700}>17/08/2001</Text>
            <Text fontWeight={500} color="#7c7c7c">
              Dr. Jose - Clínico Geral
            </Text>
          </Box>
        </Stack>
        <Button w="100%" mt="100px" bg="#FF9F00">
          Adicionar
        </Button>
      </Flex>
    </Layout>
  );
}
