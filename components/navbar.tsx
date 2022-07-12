import React from "react";
import {
    Container,
    Col,
    Grid,
    Avatar,
    Spacer,
    Button,
    Dropdown,
} from "@nextui-org/react";
import { AiOutlineHome, AiOutlineCalendar } from "react-icons/ai";
import { BiChat } from "react-icons/bi";
import { useRouter } from "next/router";
import { logOut } from '../context/authentication';
interface Props {
    photo?: string
}
export const Navbar: React.FC<Props> = (props) => {
    const router = useRouter();

    const handleLogout = () => {
        logOut();
        router.push('/signup');
    }
    return (
        <Grid.Container
            justify="flex-end"
            md={1}
            style={{
                boxShadow: "0px 0px 24px rgba(0, 0, 0, 0.08)",
                height: "100vh",
            }}
        >
            <Col>
                <Spacer y={2} />
                <Container>
                    <Dropdown>
                        <Dropdown.Trigger>
                            <Avatar
                                size="xl"
                                squared
                                src={props.photo}
                            />
                        </Dropdown.Trigger>
                        <Dropdown.Menu variant="light" aria-label="Actions">
                            <Dropdown.Item key="account" >Account</Dropdown.Item>
                            <Dropdown.Item key="group" >Privacy</Dropdown.Item>
                            <Dropdown.Item color="error" key="logout" withDivider >
                                <div onClick={() => handleLogout()}>Logout</div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
                <Spacer y={3} />
                <Button css={{ backgroundColor: "white" }} auto>
                    <AiOutlineHome size={30} color="black" />
                </Button>

                <Spacer y={1} />
                <Button css={{ backgroundColor: "white" }} auto>
                    <BiChat size={30} color="black" />
                </Button>
                <Spacer y={1} />
                <Button css={{ backgroundColor: "white" }} auto>
                    <AiOutlineCalendar size={30} color="black" />
                </Button>
            </Col>
        </Grid.Container >
    );
};
