import { Button, Heading, Pane, Paragraph, TextInput, TextInputField } from 'evergreen-ui';
import Image from 'next/image';
import React from 'react';

const SimplifyOperations = () => {
  return (
    <Pane className="simplify-operations">
      <Pane
        position="relative"
        borderRadius={15}
        background="#C0D7FF"
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={50}
        width={'100%'}
        height={'580px'}
      >
        <Pane zIndex={5}>
          <Heading
            fontSize="3.5rem"
            lineHeight={'70px'}
            fontWeight={700}
            textAlign="center"
            color="black"
            maxWidth="700px"
          >
            Ready to simplify your financial operations?
          </Heading>
          <Paragraph marginY={10} textAlign="center" fontSize="18px" color="black">
            Open an account today.
          </Paragraph>
          <Pane
            marginY={50}
            borderRadius={15}
            background="white"
            paddingY={8}
            paddingX={10}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <TextInput flex={1} border="none" placeholder="Enter your work mail" />
            <Button
              className="cta-primary"
              type="submit"
              size="large"
              color="white"
              background="black"
              borderRadius={10}
              fontSize={13}
              fontWeight={400}
            >
              Get Started for free
            </Button>
          </Pane>
        </Pane>
        <Pane position="absolute" left={0} zIndex={1}>
          <Image
            style={{
              transform: 'rotate(180deg)',
              opacity: 0.2,
            }}
            alt="background-layer"
            src={require('../../../public/images/general/pattern-bg-1.png')}
          />
        </Pane>
        <Pane position="absolute" right={0} zIndex={1}>
          <Image
            style={{
              opacity: 0.2,
            }}
            alt="background-layer"
            src={require('../../../public/images/general/pattern-bg-1.png')}
          />
        </Pane>
      </Pane>
    </Pane>
  );
};

export default SimplifyOperations;
