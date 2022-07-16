import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { BoxMenu } from '@components/cardMenu';
import { CalendarIcon } from '@components/icons/CalendarIcon';
import { CardIcon } from '@components/icons/CardIcon';
import { DoctorIcon } from '@components/icons/DoctorIcon';
import { Layout } from '@components/layout';
import { useRouter } from 'next/router';

export default function HotSite() {
  const router = useRouter();

  return (
    <Layout pageTitle="Home">
      <Image src="./images/banner.png" />
      <Flex h="40px" w="100%" bg="#FEF7E4" align="center" color="black" px={4}>
        <Text as="span" color="#FF9F00" fontWeight={700} mr={2}>
          CPF:
        </Text>
        079.798.039-30
      </Flex>
      <Box w="100%" p={4} mt={4}>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={4}
          alignItems="center"
          justifyContent="center"
        >
          <GridItem
            display="flex"
            justifyContent="center"
            onClick={() => router.push('/clinepam')}
          >
            <BoxMenu label="Dr. ClinePam" icon={DoctorIcon} />
          </GridItem>
          <GridItem
            onClick={() => router.push('/carteirinha')}
            display="flex"
            justifyContent="center"
          >
            <BoxMenu label="Carteirinha" icon={CardIcon} />
          </GridItem>
          <GridItem
            onClick={() => router.push('/calendario')}
            display="flex"
            justifyContent="center"
          >
            <BoxMenu label="Agendar " icon={CalendarIcon} />
          </GridItem>
        </Grid>
      </Box>
    </Layout>
  );
}
