import {GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from "firebase/auth";
import {auth, db} from "../Firebase.tsx";
import {useSetAtom} from "jotai/react";
import {authErrorAtom, authLoadingAtom, authStateAtom} from "../../../atoms.ts";
import {useEffect} from "react";
import {useAtom} from "jotai/index";
import {useDishMenu} from "../../dish-menu/hooks/DishMenuHook.tsx";
import {doc, getDoc, setDoc} from "firebase/firestore";

export const useAuth = () => {
    // ここでfirebaseでログイン処理 googleでログイン
    const [loading, setLoading] = useAtom(authLoadingAtom);
    const setAuthState = useSetAtom(authStateAtom)
    const [error, setError] = useAtom(authErrorAtom);
    const {fetchData} = useDishMenu()
    // Firebase Auth状態の監視（一度だけ設定）
    useEffect(() => {
        return onAuthStateChanged(auth, async (user) => {
            if (user) {
                setAuthState({uid: user.uid})
                setLoading(false);

                await fetchData()

                //初回ログインだった場合、usersコレクション内にドキュメント作成
                const userDocRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(userDocRef);
                if (!docSnap.exists()) {
                    await setDoc(userDocRef, {
                        createdAt: new Date()
                    });
                }

            }
        });
    }, [setAuthState, setLoading]);
    const provider = new GoogleAuthProvider();

    const signInGoogle = async () => {
        try {
            setLoading(true)
            setError(null)
            await signInWithPopup(auth, provider)
        } catch (err) {
            console.log(err!.toString())
            setError(err!.toString())
            throw err;

        } finally {
            setLoading(false)
        }

    }

    return {signInGoogle}

}