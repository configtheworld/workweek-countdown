import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const useAppAuth = () => {
  const { auth } = useFirebaseClient();

  const me = async () => {
    const store = useAuthStore();
    if (store.uid !== "") {
      return store.user;
    } else {
      return null;
    }
  };

  const userToken = async () => {
    const store = useAuthStore();
    if (store.accessToken !== "") {
      return store.accessToken;
    } else {
      return "";
    }
  };

  const isAuth = async () => {
    const store = useAuthStore();
    if (store.uid === "") {
      return false;
    } else {
      return true;
    }
  };

  const loginWithGoogle = async () => {
    const store = useAuthStore();

    try {
      const auth = getAuth();
      await signInWithPopup(auth, new GoogleAuthProvider())
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          if (credential !== null) {
            if (credential.accessToken) {
              store.setAccessToken(credential.accessToken);
              //store.accessToken = credential.accessToken;
              store.setUser(result.user.toJSON());
              // store.user = result.user;
              store.setUid(result.user.uid);
              // store.uid = result.user.uid;
            }
          }
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    } catch (error) {
      console.log(error);
      store.uid = "";
      store.user = {};
    }
  };

  const logout = async () => {
    const store = useAuthStore();
    console.log("logout comsosable called");
    // remove user from pinia
    store.uid = "";
    store.user = {};
  };

  return {
    logout,
    loginWithGoogle,
    me,
    userToken,
    isAuth,
  };
};
