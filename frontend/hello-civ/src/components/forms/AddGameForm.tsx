import { useState } from "react"

type Pair = {
    name: string,
    position: number
}

type AddGameFormProps = {
    toggleVisible: () => void
}

export default function AddGameForm({toggleVisible}: AddGameFormProps){
    const [resultPairs, setResultPairs] = useState<Array<Pair>>([])

    const handlePairChange = (index: number, field: "name" | "position", value: string | number) => {
        resultPairs.map((pair, id) => index === id ? {...pair, [field]: value} : pair )
    }

    const addPair = () => {
        setResultPairs((prev) => [...prev, {name: "", position: 0}])
    }

    const removePair = (index: number) => {
        setResultPairs(resultPairs.filter((_, i) => index !== i))
    }

    return(
        <div>
            {resultPairs.map((_, key) => {
                return (
                    <div key={key}>
                        <input key={key+"name"} type="string" onChange={e => handlePairChange(key, "name", e.target.value)}></input>
                        <input key={key+"position"} type="number" onChange={e => handlePairChange(key, "position", e.target.value)}></input>
                        <button onClick={e => removePair(key)}>X</button>
                    </div>
                )
                
            })}
            <button onClick={_ => addPair()}>Add player</button>
            <button >Submit game</button>
            <button onClick={toggleVisible}>Close form</button>
        </div>
    )
}