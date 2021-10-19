import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Select,
  Text,
  SimpleGrid,
  GridItem,
  Checkbox,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';

function Details () {
  const colSpan = useBreakpointValue ({base: 2, md: 1});
  return (
    <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Details</Heading>
        <Text>If you already have an account, click here</Text>
      </VStack>

      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input placeholder="John" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Input placeholder="14 Adeoye Street" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>City</FormLabel>
            <Input placeholder="Port Harcourt" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select>
              <option value="usa">United States of America</option>
              <option value="uk">United Kingdom</option>
              <option value="ger">Germany</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <Checkbox defaultChecked>Ship to billing</Checkbox>
        </GridItem>

        <GridItem colSpan={2}>
          <Button size="lg" width="full" variant="primary">Place Order</Button>
        </GridItem>

      </SimpleGrid>
    </VStack>
  );
}

export default Details;
