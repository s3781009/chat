import {
  Card,
  Image,
  Container,
  Row,
  Col,
  Text,
  Spacer,
} from "@nextui-org/react";
import React from "react";

export const RecentMessage = (props: {}) => {
  return (
    <Container>
      <Card
        variant="flat"
        isPressable={true}
        css={{ backgroundColor: "#ffffff", height: "10vh", padding: "0" }}
      >
        <Card.Body>
          <Row align="flex-start" justify="flex-start">
            <Image
              src="https://art.pixilart.com/13e07bd455dcf46.png"
              width={50}
              height={50}
            />
            <Spacer x={1} />
            <Col>
              <Text h4> Some Name</Text>
              <Spacer y={0.2} />
              <Text size="0.9em" color="#63666A">
                {" "}
                This is a message
              </Text>
            </Col>
            <Text size="0.9em" color="#63666A">
              12m
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
