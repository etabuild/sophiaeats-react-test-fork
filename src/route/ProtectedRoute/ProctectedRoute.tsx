import {AuthFallback} from "../AuthFallback/AuthFallback.tsx";
import {useAtomValue} from "jotai/index";
import {authLoadingAtom, authStateAtom} from "../../atoms.ts";
import logo from "../../assets/logo/sophiaeats_logo.svg"
import styles from "./ProtectedRoute.module.css"
export const ProtectedRoute: React.FC<{
    children: React.ReactNode;
    fallback?: React.ReactNode;
}> = ({ children, fallback = <AuthFallback /> }) => {

    const loading = useAtomValue(authLoadingAtom)
    const user = useAtomValue(authStateAtom)
    if (loading || !user.uid) {
        return (
           <>
               <img className={styles.logo} src={logo} alt="logo" />

               <p>ログイン処理中</p>
           </>
        );
    }

    return user.uid ? <>{children}</> : <>{fallback}</>;
};