import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ConsultationEmailProps {
  name: String;
  company: String;
  email: String;
  phone: String;
  problems: String;
}

const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

export const ConsultationEmail = (data: ConsultationEmailProps) => {
  const previewText = `Request consultation from ${data.name}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Container style={container}>
          <Section>
            <Img
              style={{ display: "inline-block" }}
              src={`${baseUrl}/logo.png`}
              width="96"
              height="30"
              alt="PatternX"
            />
            <b>PatternX</b>
          </Section>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={heading}>
                This is the information of the person needing advice:
              </Text>
              <Text style={review}>
                - <b>Name</b>: {data.name} <br />- <b>Company</b>:{" "}
                {data.company} <br />- <b>Email</b>: {data.email} <br />-{" "}
                <b>Phone</b>: {data.phone} <br />- <b>problems</b>:{" "}
                {data.problems} <br />
              </Text>

              <Text style={note}>
                This is an automated email from PatternX site.
              </Text>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section>
            <Row>
              <Text style={footer}>
                © {new Date().getFullYear()} PatternX. All Rights Reserved.
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ConsultationEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
};

const heading = {
  fontSize: "24px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const note = {
  fontSize: "14px",
  lineHeight: "1.2",
  color: "#484848",
};

const review = {
  ontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
  padding: "24px",
  backgroundColor: "#f2f3f3",
  borderRadius: "4px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};
