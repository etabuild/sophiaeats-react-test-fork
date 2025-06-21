import {AuthFallback} from "../AuthFallback/AuthFallback.tsx";
import {useAtomValue} from "jotai/index";
import {authLoadingAtom, authStateAtom} from "../../atoms.ts";

export const ProtectedRoute: React.FC<{
    children: React.ReactNode;
    fallback?: React.ReactNode;
}> = ({ children, fallback = <AuthFallback /> }) => {

    const loading = useAtomValue(authLoadingAtom)
    const user = useAtomValue(authStateAtom)
    if (loading) {
        return (
           <>
               <p>ログイン処理中</p>
           </>
        );
    }

    return user.uid ? <>{children}</> : <>{fallback}</>;
};