import React from "react";
import { Button } from "../../../shared";
import { Input } from "../../../shared/ui/Input/Input";
import { useAppDispatch } from "../../../shared/hooks/redux-hook/ReduxHook";
import { addPlayerList } from "../store/AddPlayer";
import { AddPlayerContainer, AddPlayerForm } from "./StyledAddPlayer";

export const AddPlayer = () => {
    const [name, setName] = React.useState<string>('')
    const dispatch = useAppDispatch()

    const handlePlayer = (e: React.FormEvent) => {
        e.preventDefault()
        if (!name) throw console.log('Введите имя игрока');
        dispatch(addPlayerList({
            name,
            scores: 0,
            id: Date.now()
        }))
        setName("")
    }
    
 
    return (
        <AddPlayerContainer>
            <AddPlayerForm onSubmit={handlePlayer} >
                <Input placeholder="Введите имя игрока" onChange={(e) => setName(e.target.value)} value={name || ''}/>
                <Button width={250} activetab={"true"}>Добавить</Button>
            </AddPlayerForm>
        </AddPlayerContainer>
    );
};

