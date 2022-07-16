import { useEffect, useState } from 'react';

import { Flex, Image } from '@chakra-ui/react';
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
    <Layout pageTitle="Carteirinha">
      <Flex justify="center" align="center" mt="150px">
        <Image transform="rotate(90deg)" src="./images/carteirinha.png" />
      </Flex>
    </Layout>
  );
}
