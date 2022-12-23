import {FieldValues, useFieldArray, useForm} from "react-hook-form";
import {useAppDispatch} from "../utils/hooks/storeHooks";
import React from "react";
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";

type FieldArrayProps = {
    setInput: any,
    setDelay: any
}

export const VisualizerForm = (props: FieldArrayProps) => {
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
            {
                fields.map((field, index) => (
                    <TextField
                        id="outlined-number"
                        key={field.id}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        size={"medium"}
                        sx={{
                            width: 80,
                        }}
                        {...register(`test.${index}.value`)}
                    />
                ))
            }
            <br/>
            <Button variant={"outlined"} id={"plus-btn"} onClick={() => append({test: 'test'})}>+</Button>
            <Button variant="outlined" id={"minus-btn"} onClick={() => remove(fields.length - 1)}>-</Button>

            <Button type={"submit"} variant="outlined" id={"visualize-btn"}>visualize!</Button>
            <Button id={"continue-btn"} variant={"outlined"} onClick={() => props.setDelay(1000)}>continue</Button>
            <Button id={"stop-btn"} variant={"outlined"} onClick={() => props.setDelay(null)}>stop</Button>
        </form>
    );
}