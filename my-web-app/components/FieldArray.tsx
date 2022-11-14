import {FieldValues, useFieldArray, useForm} from "react-hook-form";
import {useAppDispatch} from "../utils/hooks/storeHooks";

type FieldArrayProps = {
    setInput: any,
    setDelay: any
}

export const FieldArray = (props: FieldArrayProps) => {
    const {control, register, handleSubmit, reset, trigger, setError} = useForm();
    const {fields, append, prepend, remove, swap, move, insert} = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: "test", // unique name for your Field Array
    });
    const dispatch = useAppDispatch()

    return (
        <form className={"form"} onSubmit={handleSubmit((data, event) => {
            const fieldValues: FieldValues[] = data["test"];
            const inputAsArray: string[] = fieldValues.map(fieldValue => fieldValue.value);
            props.setInput(inputAsArray)
            props.setDelay(1000)
        })}>
            <button type={"button"} id={"plus-btn"} style={{width: "50px", height: "50px"}} onClick={() => {
                append({test: 'test'})
            }}>
                +
            </button>
            <button type={"button"} id={"minus-btn"} style={{width: "50px", height: "50px"}} onClick={() => {
                remove(fields.length - 1)
            }}>
                -
            </button>
            {
                fields.map((field, index) => (
                    <input
                        key={field.id} // important to include key with field's id
                        type={"number"}
                        style={{width: "50px"}}
                        {...register(`test.${index}.value`)}
                    />
                ))
            }
            <input type={"submit"} value={"visualize!"}/>
            <button type={"button"} id={"plus-btn"} style={{width: "100px", height: "50px"}} onClick={() => {
                props.setDelay(1000)
            }}>
                continue visualisation
            </button>
            <button type={"button"} id={"plus-btn"} style={{width: "100px", height: "50px"}} onClick={() => {
                props.setDelay(null)
            }}>
                stop visualize
            </button>
        </form>
    );
}