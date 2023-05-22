import { useContext } from "react";
import { SnackContext } from "../contexts/SnackContext";

export const useSnacks = () => {
    return useContext(SnackContext);
}