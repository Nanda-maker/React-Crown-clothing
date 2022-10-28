// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import {
//   //auth,
//   //signInWithGooglePopup,
//   //signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firbase.util";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   //console.log(respose);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in With Google redirect
      </button> */}
    </div>
  );
};

export default Authentication;
