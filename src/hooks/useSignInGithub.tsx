import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase";

export const useSignInGithub = () => {
  async function signInWithGithub() {
    try{
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error){
      throw new Error('Missing information from Github Account');
    }
  }
  return {signInWithGithub}
}