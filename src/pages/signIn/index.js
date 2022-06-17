import React, { useEffect } from "react";
import styled from "styled-components";
import bgSignIn from "~/assets/signinbg.jpg";
import logo from "~/assets/logo.gif";
import logoGoogle from "~/assets/google.svg";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { authentication, providerGoogle } from "~/components/firebase/config";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "~/redux-toolkit/global/globalSlice";
import { toast } from "react-toastify";
const StyledSignIn = styled.div`
  background-image: url(${bgSignIn});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const SignIn = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.global);
  console.log("user login:", user);

  const dispatch = useDispatch();

  const handleSignInWithGoogle = () => {
    signInWithPopup(authentication, providerGoogle)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        toast.success(`Login successfully, hello ${user.displayName}`);
        dispatch(setUser(user));
      })
      .catch((err) => {
        const errMsg = err.message;
        toast.error("Something went wrong!!", errMsg);
      });
  };
  useEffect(() => {
    user && navigate("/");
  }, [navigate, user]);
  return (
    <StyledSignIn className="relative w-full h-screen">
      <div className="flex items-center w-full py-6">
        <div
          onClick={() => navigate("/")}
          className="relative w-[200px] cursor-pointer "
        >
          <img className="object-cover w-full" src={logo} alt="" />
        </div>
      </div>
      <div className="absolute flex flex-col justify-center w-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ">
        {/* <h3 className="text-3xl font-medium text-center text-white">
          Welcome to my website
        </h3> */}
        <div className="flex justify-center w-full mt-10">
          <div className="px-10 gap-y-5 sx:py-10 sx:px-5 py-10 flex flex-col  bg-black rounded-lg max-w-[400px] w-[350px] ">
            <h3 className="mb-5 text-3xl font-semibold text-center text-white">
              Sign In
            </h3>
            <button
              onClick={handleSignInWithGoogle}
              id="loginGoogle"
              className="flex justify-center  items-center bg-white text-black p-3 gap-3 rounded-md cursor-pointer hover:brightness-90 disabled:!brightness-75 disabled:!cursor-default transition duration-300 w-full"
            >
              <img className="w-6 h-6" src={logoGoogle} alt="" />
              <span className="text-lg text-black">Sign In With Google</span>
            </button>
          </div>
        </div>
      </div>
    </StyledSignIn>
  );
};

export default SignIn;
