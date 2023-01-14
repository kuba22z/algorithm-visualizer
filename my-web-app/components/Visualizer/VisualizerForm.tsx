import {FieldValues, useFieldArray, useForm} from "react-hook-form";
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {Box, InputLabel, NativeSelect, TextField} from "@mui/material";
import {AvailableSortingAlgorithm} from "../../utils/constants/sorting";
import {SortingAlgorithmsResponseBody} from "../../utils/types/api/sorting-api/sorting-algorithms";
import {SortingRequest} from "../../utils/sorting/sorting-requests";

type FieldArrayProps = {
    onSubmit: (visualizerInput: string[]) => void
    onContinueVisualization: () => void
    onStopVisualization: () => void

    onChangeAlgorithm: (sortingAlgorithm: string) => void

    selectedAlgorithm: string
}

export const VisualizerForm = (props: FieldArrayProps) => {
    const [sortingAlgorithms, setSortAlgorithms] = useState<AvailableSortingAlgorithm[]>([])
    const {control, register, handleSubmit, reset, trigger, setError} = useForm();
    const visualizerInput = "visualizerInput";
    const {fields, append, prepend, remove, swap, move, insert} = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: visualizerInput, // unique name for your Field Array
    });

    useEffect(() => {
        SortingRequest.getAvailableAlgorithms().then((body: SortingAlgorithmsResponseBody) => {
            setSortAlgorithms(body.availableSortingAlgorithms)
        })
    }, []);

    return (
        <form className={"form"} onSubmit={handleSubmit((data, event) => {
            const fieldValues: FieldValues[] = data[visualizerInput];
            const inputAsArray: string[] = fieldValues.map(fieldValue => fieldValue.value);
            props.onSubmit(inputAsArray)
        })}>
            <Box sx={{display: "wrap", minHeight: "60px"}}>
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
                                width: 80
                            }}
                            {...register(`visualizerInput.${index}.value`)}
                        />
                    ))
                }
            </Box>
            <br/>
            <InputLabel variant="standard" htmlFor="select"> Choose an sorting algorithm </InputLabel>
            <NativeSelect
                id="select"
                defaultValue={AvailableSortingAlgorithm.bubbleSort}
                sx={{minWidth: "150px"}}
                onChange={(event) => {
                    props.onChangeAlgorithm(event.target.value)
                }}
            >
                {sortingAlgorithms.map((algorithm, index) => <option key={index}
                                                                     value={algorithm}>{algorithm}</option>)}
            </NativeSelect>
            <Button type={"button"} variant={"outlined"} id={"plus-btn"}
                    onClick={() => append({visualizerInput: visualizerInput})}>+</Button>
            <Button variant="outlined" id={"minus-btn"} onClick={() => remove(fields.length - 1)}>-</Button>
            <Button type={"submit"} variant="outlined" id={"visualize-btn"}>visualize!</Button>
            <Button id={"continue-btn"} variant={"outlined"}
                    onClick={props.onContinueVisualization}>continue</Button>
            <Button id={"stop-btn"} variant={"outlined"} onClick={props.onStopVisualization}>stop</Button>
        </form>
    );
}