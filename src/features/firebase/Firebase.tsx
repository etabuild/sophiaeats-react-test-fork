import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {firebaseConfig} from "./firebaseConfig.ts";
import {useAtom} from "jotai/index";
import {dbAtom} from "../../atoms.ts";
export const useFirebase = () => {
    const [db, setDb] = useAtom(dbAtom)
    const app = initializeApp(firebaseConfig)

    const _db = getFirestore(app)
    setDb(_db)

}
