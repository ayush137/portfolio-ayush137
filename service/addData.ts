import { toast } from "react-toastify";
import firebase_app from "../utils/db/index";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
export default async function addData(
  colllection: string,
  id: string,
  data: any
) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, colllection, id), data, {
      merge: true,
    });
    toast("Thanks for the digital handshake!", {
      type: "success",
    });
  } catch (e) {
    error = e;
    toast("Something went wrong!", {
      type: "error",
    });
    error = true;
  }

  return { result, error };
}
