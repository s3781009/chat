import {
    Grid,
    Container,
    Row,
    Col,
    Text,
    Input,
    Spacer,
    Avatar,
    Dropdown,
} from "@nextui-org/react";
import { User } from "firebase/auth";
import React from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { RecentMessage } from "./RecentMessage";
import { useState } from 'react';
interface Props {
    user: User | null
}
export const Messages: React.FC<Props> = (props) => {

    const [user, _] = useState(props.user);
    return (
        <Grid.Container
            md={5}
            style={{ borderRight: "2px solid #eeeeee", height: "100vh" }}
        >
            <Col>
                <Col
                    style={{
                        height: "8vh",
                        borderBottom: "1px solid #eeeeee",
                        justifyContent: "space-around",
                    }}
                >
                    <Row
                        style={{
                            justifyContent: "space-around",
                            marginTop: "2vh",
                            alignItems: "center",
                        }}
                    >
                        <Dropdown>
                            <Dropdown.Button light>
                                <Text size="1.5rem" weight="bold" style={{ marginTop: "0px" }}>
                                    Messages
                                </Text>
                            </Dropdown.Button>
                            <Dropdown.Menu variant="light" aria-label="Actions">
                                <Dropdown.Item key="name" >{user?.displayName} </Dropdown.Item>
                                <Dropdown.Item key="pm" withDivider>Pm</Dropdown.Item>
                                <Dropdown.Item key="group" >
                                    Group
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Spacer x={1} />
                        <Avatar size="md" icon={<AiOutlinePlus />} color="primary" />
                        <Spacer x={1} />
                    </Row>
                </Col>
                <Spacer y={6} />
                <Container style={{ width: "100%" }}>
                    <Input
                        width="100%"
                        contentLeft={<AiOutlineSearch />}
                        placeholder="Search messages"
                    >
                        {/* <AiOutlineSearch /> */}
                    </Input>
                </Container>
                <Spacer y={1} />
                <RecentMessage />
            </Col>
        </Grid.Container>
    );
};
