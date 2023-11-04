import {
  GoogleAuthProvider,
  getIdToken,
  inMemoryPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";

export const useAuth = () => {
  const { auth } = useFirebaseClient();

  const setUser = (user: any) => {};

  const setCookie = (cookie: any) => {
    cookie.value = cookie;
  };

  //   const me = async () => {
  //     if (!authUser.value) {
  //       try {
  //         const data = await $fetch("/api/auth/me", {
  //           headers: useRequestHeaders(["cookie"]) as HeadersInit,
  //         });

  //       } catch (error) {
  //         setCookie(null);
  //       }
  //     }

  //     return authUser;
  //   };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await setPersistence(auth, inMemoryPersistence);
      const result = await signInWithPopup(auth, provider);
      const firebaseIdToken = await getIdToken(result.user);

      // send firebaseIdToken to server
      const data = await $fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ firebaseIdToken }),
      });
    } catch (error) {
      console.log(error);
      setCookie(null);
    }

    return authUser;
  };

  //   const logout = async () => {
  //     { data } = await $fetch("/api/auth/logout", {
  //       method: "POST",
  //     });

  //     setUser(serverData.value.user);
  //   };

  return {
    logout,
    loginWithGoogle,
    me,
  };
};
