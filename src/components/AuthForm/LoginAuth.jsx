import { useState } from "react";
import { InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const LoginAuth = () => {
  //TO toggle show and hide button for password field
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  //to handle if sign up or login page
  const [isLogin, setIsLogin] = useState(true);

  //to navigate the pages
  const navigate = useNavigate();

  //function to handle auth form
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleAuth = () => {
    if (!inputs.email || !inputs.password) {
      alert("please fill in the form.");
      return;
    }

    navigate("/");
  };
  return (
    <>
      <Input
        size={"sm"}
        placeholder="Email"
        fontSize={"medium"}
        type="email"
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <InputGroup size="md">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement width="4.5rem" pl={6}>
          <Button
            h="1.75rem"
            size="sm"
            onClick={handleClick}
            bg={"transparent"}
            px={0}
          >
            {show ? <VscEye /> : <VscEyeClosed />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button
        w={"full"}
        colorScheme={"blue"}
        size={"sm"}
        fontSize={14}
        onClick={handleAuth}
      >
        Log in
      </Button>
    </>
  );
};

export default LoginAuth;
