import * as React from 'react';
import { Html, Button,Font, Preview, Section,Row,Heading,Text} from "@react-email/components";

interface VerificationEmailProps {
  firstName: string;
  otp: string;
}

export function VerificationEmail({ firstName, otp }: VerificationEmailProps) {

  return (
    <Html lang="en" dir="ltr">
      <head>
        <title>Welcome to Reflow</title>
        <Font
        fontFamily='Roboto'
        fallbackFontFamily="Verdana"
        webFont={{
          url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap',
          format: 'woff2',
        }}
        fontWeight={400}
        fontStyle='normal'
        />
        </head>
        <Preview>Welcome to reflow</Preview>
        <Section>
          <Row>
            <Heading as="h2">Hello {firstName}</Heading>
          </Row>
          <Row>
            <Text>Thank you for signing up. We are excited to have you on board as we embark on this journey together to make sensor data analysis simple, efficient, and insightful.</Text>
          </Row>
        </Section>
    </Html>
  );
}

export default VerificationEmail;
