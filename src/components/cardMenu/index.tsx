import { Box, Flex, Icon, Text } from '@chakra-ui/react';

interface BoxMenuProps {
  label: string;
  icon: any;
}

export function BoxMenu({ label, icon }: BoxMenuProps) {
  return (
    <Box>
      <Flex
        border="1px solid #FF9F00"
        borderRadius="20px"
        h="100px"
        w="100px"
        justify="center"
        align="center"
      >
        <Icon as={icon} fontSize="60px" color="#FF9F00" />
      </Flex>
      <Text textAlign="center" mt={2}>
        {label}
      </Text>
    </Box>
  );
}
