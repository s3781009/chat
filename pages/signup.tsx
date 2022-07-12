import {
    Text,
    Input,
    Row,
    Spacer,
    useInput,
    Button,
    Link,
} from "@nextui-org/react";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineGoogle } from "react-icons/ai";
import { signInAnonymous, signInWithGoogle } from "../context/authentication";
import { getAuth, createUserWithEmailAndPassword, Auth } from "firebase/auth";
import { Login } from "../components/login";
import { MoonLoader, PulseLoader } from "react-spinners";
import { Alert, Snackbar } from "@mui/material";


const signup: NextPage = (props: {}) => {
    const { value, reset, bindings } = useInput("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [openSnackBar, setOpenSnackBar] = React.useState(false);

    const auth = getAuth();
    const router = useRouter();

    const LoginWithGoogle = () => {
        setLoading(true);
        signInWithGoogle().then(
            () => {
                router.push('/')
            }
        ).catch(
            error => {
                console.log(error);
                setLoading(false);
            }
        )
    }

    const createUser = (auth: Auth, email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                router.push('/');
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                setOpenSnackBar(true);
                console.log(errorCode);
                console.log(errorMessage);
                // ..
            });
    }

    const LoginAnonymously = () => {
        signInAnonymous().then(
            () => {
                router.push('/')
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
        <>{loading ? <div style={{ position: 'absolute', top: '50%', left: '50%' }}><MoonLoader color="#4443FF" /> </div> :
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
                    <Button
                        color={"error"}
                        style={{ backgroundColor: "#4443FF", width: '50%' }}
                        size="lg"
                        onPress={() => createUser(auth, email, password)}
                    >
                        <Text h4 color="#ffffff">
                            Create an Account
                        </Text>
                    </Button>
                    <Spacer y={2} />
                    <Button onPress={() => LoginWithGoogle()} bordered color={"primary"} size="lg" css={{ width: "50%" }}>
                        <AiOutlineGoogle size={40} color="#4443FF" />
                        <Spacer x={1} />
                        <Text color="#4443FF" h4 css={{ color: "#443FF" }}>
                            Sign Up or Login With Google
                        </Text>
                    </Button>
                    <Snackbar
                        open={openSnackBar}
                        autoHideDuration={6000}
                        color='#B00020'
                        sx={{ width: '50%' }}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    >
                        <Alert severity="error" sx={{ width: '100%' }}>
                            {error}
                        </Alert>
                    </Snackbar>
                    <Spacer y={1} />
                    <Row style={{ justifyContent: 'center' }}>
                        <Text color="#949494" >Already have an account? </Text>
                        <Login />
                    </Row>
                </div>
            </div>
        }
        </>
    );
};
export default signup;
