import { Grid, Text, Row, Col, Spacer } from "@nextui-org/react";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export const Directory = (props: {}) => {
    return (
        <Grid.Container md={4}>
            <Col
                style={{
                    height: "8vh",
                    borderBottom: "1px solid #eeeeee",
                    justifyContent: "space-around",
                }}
            >
                <Spacer />
                <Row>
                    <Spacer x={1} />
                    <Text size="1.5rem" weight="bold"> Directory</Text>
                    <Spacer x={8} />
                    <BsThreeDotsVertical />
                </Row>
                <Spacer y={5} />
                <Col>Files</Col>
            </Col>
        </Grid.Container>
    );
};
