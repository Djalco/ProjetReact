import { db } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";
import { doc, updateDoc, setDoc } from "firebase/firestore";

export const firestoreCreateDocument = async (
    collectionName: string,
    docuementID: string,
    data: object
) => {
    try {
        const documentRef = doc(db, collectionName, docuementID);

        await setDoc(documentRef, data)
        return { data: true }
    } catch (error) {
        const firebaseError = error as FirebaseError
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            }
        }
    }
}

export const firestoreUpdateDocument = async (
    collectionName: string,
    docuementID: string,
    data: object
) => {
    try {
        const documentRef = doc(db, collectionName, docuementID);

        await updateDoc(documentRef, data)
        return { data: true }
    } catch (error) {
        const firebaseError = error as FirebaseError
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message
            }
        }
    }
}