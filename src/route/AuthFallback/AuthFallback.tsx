import {authErrorAtom} from "../../atoms.ts";
import {useAtomValue} from "jotai/index";
import {useAuth} from "../../features/firebase/auth/Auth.tsx";

export const AuthFallback = () => {
    const error = useAtomValue(authErrorAtom)
    const signInGoogle = useAuth()
    return (
        <>
            {error &&
                <div>
                    <p>ログインに失敗しました</p>
                    <p>エラー：{error}</p>
                </div>

            }
            <div>
                <button onClick={()=> signInGoogle}>Googleでログイン</button>
            </div>
        </>
    );
};