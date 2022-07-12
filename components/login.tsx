import React, { useState } from "react";
import { Modal, Input, Row, Checkbox, Button, Text, Link } from "@nextui-org/react";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Auth, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from "next/router";
export const Login = (props: {}) => {
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const auth = getAuth();
    const router = useRouter();
    const handler = () => setVisible(true);

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    const signIn = (auth: Auth, email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Signed in 
                router.push('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMsg(errorMessage);
                console.log(errorCode);
                console.log(errorMessage);
                // ..
            });
    }


    return (
        <div>
            <Link onClick={() => setVisible(true)} underline={true} css={{ color: "#4443FF" }}>log in</Link>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text id="modal-title" size={18}>
                        Welcome to {" "}
                        <Text b size={18}>
                            Chat.IO
                        </Text>
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        onChange={(e) => setEmail(e.target.value)}
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                        contentLeft={<AiOutlineMail fill="currentColor" />}
                    />
                    <Input.Password
                        onChange={(e) => setPassword(e.target.value)}
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Password"
                        contentLeft={<RiLockPasswordLine fill="currentColor" />}
                    />
                    <Row justify="space-between">
                        <Checkbox>
                            <Text size={14}>Remember me</Text>
                        </Checkbox>
                        <Text size={14}>Forgot password?</Text>
                    </Row>
                    <Text color="error">{errorMsg}</Text>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        Close
                    </Button>
                    <Button onPress={() => signIn(auth, email, password)} style={{ backgroundColor: "#4443FF" }} auto >
                        Sign in
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
