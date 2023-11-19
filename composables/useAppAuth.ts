import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const useAppAuth = () => {
  const { auth } = useFirebaseClient();

  const me = async () => {
    const store = useAuthStore();
    if (Object.keys(store.user).length > 0) {
      return store.user;
    } else {
      return null;
    }
  };

  const getAccessToken = async () => {
    const store = useAuthStore();
    if (store.accessToken !== "") {
      return store.accessToken;
    } else {
      return null;
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
            if (credential.idToken) {
              // store.setAccessToken(credential.accessToken);
              //store.accessToken = credential.accessToken;
              store.setUser(result.user.toJSON());
              console.log(credential);
              store.setAccessToken(credential.idToken);
              // store.user = result.user;
              // store.setUid(result.user.uid);
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
          store.user = {};
          store.accessToken = "";
        });
    } catch (error) {
      console.log(error);
      store.user = {};
      store.accessToken = "";
    }
  };

  const logout = async () => {
    const store = useAuthStore();
    console.log("logout comsosable called");
    store.user = {};
    store.accessToken = "";
  };

  return {
    logout,
    loginWithGoogle,
    me,
    getAccessToken,
  };
};
