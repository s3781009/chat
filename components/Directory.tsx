import { Grid, Container, Text, Row, Col, Spacer } from '@nextui-org/react';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

export const Directory = (props: {}) => {
    return (
        <Grid.Container md={4}>
            <Col style={{ height: '8vh', borderBottom: '1px solid #eeeeee', justifyContent: 'space-around' }} >
                <Spacer />
                <Row >
                    <Spacer x={1} />
                    <Text h3> Directory</Text>
                    <Spacer x={8} />
                    <BsThreeDotsVertical />
                </Row>
            </Col>
        </Grid.Container>

    )
}
