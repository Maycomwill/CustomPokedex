import { useContext } from "react";
import { FormContext, FormContextProps } from "../context/FormsContexts";

export function useForms(): FormContextProps {
  const context = useContext(FormContext);
  return context;
}
