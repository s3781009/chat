import {
    Text,
    Input,
    Row,
    Spacer,
    useInput,
    Button,
    Link,
} from "@nextui-org/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { signInAnonymous, signInWithGoogle } from "../context/authentication";

const signup: NextPage = (props: {}) => {
    const { value, reset, bindings } = useInput("");
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [name, setName] = useState<string | null>(null);

    const router = useRouter();
    const LoginWithGoogle = () => {

        signInWithGoogle().then(
            () => {
                router.push('/')
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
    }

    const LoginAnonymously = () => {
        signInAnonymous().then(
            () => {
                router.push('/todo')
            }
        ).catch(
            error => {
                console.log(error);
            }
        )
    }

    const validateEmail = (value: string) => {
        return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    };

    const helper = React.useMemo(() => {
        if (!value)
            return {
                text: "",
                color: "",
            };
        const isValid = validateEmail(value);
        return {
            text: isValid ? "Correct email" : "Enter a valid email",
            color: isValid ? "success" : "error",
        };
    }, [value]);

    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div
                style={{
                    width: "50%",
                    height: "100vh",
                    background: "linear-gradient(180deg, #7271FF 0%, #3433FF 100%)",
                    position: "relative",
                }}
            >
                <div style={{ position: "absolute", top: "5vh", left: "10%" }}>
                    {" "}
                    <Text weight={"black"} color="#ffffff" size="4em">
                        Chat.IO
                    </Text>
                    <Spacer y={3} />
                    <div style={{ width: '80%' }}>
                        <Text size={'2em'} color="#ffffff" weight="bold" >
                            A secure messaging app using end to end ecryption with unlimited file transfers
                        </Text>
                    </div>
                </div>
            </div>
            <div
                style={{
                    paddingTop: "5vh",
                    display: "flex",
                    width: "50%",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Text size={'2em'} weight='bold'>Create an Account</Text>
                <Spacer y={2} />
                <Input
                    width="50%"
                    size="lg"
                    clearable
                    bordered
                    label="Name"
                    placeholder="Enter your display name"
                    onChange={(event) => { setName(event.target.value) }}
                />

                <Spacer y={2} />
                <Input
                    {...bindings}
                    clearable
                    shadow={false}
                    onClearClick={reset}
                    //@ts-ignore
                    status={helper.color}
                    //@ts-ignore
                    color={helper.color}
                    //@ts-ignore
                    helperColor={helper.color}
                    helperText={helper.text}
                    type="email"
                    label="Email"
                    placeholder="Enter your email"
                    size="lg"
                    width="50%"
                    onChange={(event) => { setEmail(event.target.value) }}
                />
                <Spacer y={2} />
                <Input.Password
                    size="lg"
                    label="Password"
                    placeholder="Enter a Password"
                    width="50%"
                    onChange={(event) => { setPassword(event.target.value) }}
                />

                <Spacer y={2} />
                <Button />
                <Button
                    color={"error"}
                    css={{ backgroundColor: "#4443FF", width: "50%" }}
                    size="lg"
                >

                    {/* <Text h4 color="#ffffff"> */}
                    {/*     Create an Account */}
                    {/* </Text> */}
                </Button>
                <button style={{ backgroundColor: "#4443FF", width: "30px", height: "100px" }} >Hello</button>
                <Spacer y={2} />
                <Button onPress={() => LoginWithGoogle()} bordered color={"primary"} size="lg" css={{ width: "50%" }}>
                    <AiOutlineGoogle size={40} color="#4443FF" />
                    <Spacer x={1} />
                    <Text color="#4443FF" h4 css={{ color: "#443FF" }}>
                        Sign Up or Login With Google
                    </Text>
                </Button>
                <Spacer y={1} />
                <Row style={{ justifyContent: 'center' }}>
                    <Text color="#949494" >Already have an account? </Text>
                    <Link underline={true} css={{ color: "#4443FF" }}>log in</Link>
                </Row>
            </div>
        </div>
    );
};
export default signup;
