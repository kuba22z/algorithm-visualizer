import {FieldValues, useFieldArray, useForm} from "react-hook-form";
import React, {useEffect, useState} from "react";
import Button from "@mui/material/Button";
import {Box, InputLabel, NativeSelect, TextField} from "@mui/material";
import {AvailableSortingAlgorithm} from "../../utils/constants/sorting";
import {SortingAlgorithmsResponseBody} from "../../utils/types/api/sorting-api/sorting-algorithms";
import {SortingRequest} from "../../utils/sorting/sorting-requests";
import {Nullable} from "../../utils/types/common";

type FieldArrayProps = {
    onSubmit: (visualizerInput: string[]) => void

    selectedAlgorithm: string

    onChangeAlgorithm: (sortingAlgorithm: string) => void

    delay: Nullable<number>

    setDelay: (delay: Nullable<number>) => void
}

export const VisualizerForm = (props: FieldArrayProps) => {
    const [sortingAlgorithms, setSortAlgorithms] = useState<AvailableSortingAlgorithm[]>([])
    const [selectedDelay, setSelectedDelay] = useState<Nullable<number>>(1000)
    const visualizerInput = "visualizerInput";

    const {
        control,
        register,
        handleSubmit,
        reset,
        trigger,
        setError
    } = useForm();
    const {fields, append, prepend, remove, swap, move, insert} = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormContext)
        name: visualizerInput, // unique name for your Field Array
    });

    useEffect(() => {
        SortingRequest.getAvailableAlgorithms().then((body: SortingAlgorithmsResponseBody) => {
            setSortAlgorithms(body.availableSortingAlgorithms)
        })
        append({visualizerInput: visualizerInput})
    }, []);

    return (
        <form className={"form"} onSubmit={handleSubmit((data, event) => {
            const fieldValues: FieldValues[] = data[visualizerInput];
            const inputAsArray: string[] = fieldValues.map(fieldValue => fieldValue.value);
            props.onSubmit(inputAsArray)
            props.setDelay(selectedDelay)
        })}>
            <Box sx={{display: "wrap", minHeight: "60px"}}>
                <InputLabel variant="standard" htmlFor={"plus-btn"}> Add some numbers to be sorted</InputLabel>
                <Button type={"button"} variant={"outlined"} id={"plus-btn"}
                        onClick={() => append({visualizerInput: visualizerInput})}>+</Button>
                <Button variant="outlined" id={"minus-btn"} onClick={() => remove(fields.length - 1)}>-</Button>
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

            <InputLabel variant="standard" htmlFor="select"> Choose an sorting algorithm </InputLabel>
            <div style={{gap: "16px", display: "flex"}}>
                <NativeSelect
                    id="select"
                    defaultValue={AvailableSortingAlgorithm.bubbleSort}
                    sx={{minWidth: "210px"}}
                    onChange={(event) => {
                        props.onChangeAlgorithm(event.target.value)
                    }}
                >
                    {sortingAlgorithms.map((algorithm, index) => <option key={index}
                                                                         value={algorithm}>{algorithm}</option>)}
                </NativeSelect>
                <TextField id="outlined-number"
                           type="number"
                           defaultValue={1000}
                           InputLabelProps={{shrink: true,}}
                           size={"medium"}
                           sx={{width: 150}}
                           label={"set Delay in ms"}
                           onChange={event => {
                               setSelectedDelay(parseInt(event.target.value))
                           }}/>
                <Button type={"submit"} variant="outlined" id={"visualize-btn"}>visualize!</Button>
                <Button id={"continue-btn"} variant={"outlined"}
                        onClick={() => props.setDelay(selectedDelay)}>continue</Button>
                <Button id={"stop-btn"} variant={"outlined"} onClick={() => {
                    props.setDelay(null)
                }}>stop</Button>
            </div>
        </form>
    );
}