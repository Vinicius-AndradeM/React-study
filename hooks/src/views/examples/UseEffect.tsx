import { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n: any): number {
    if (n < 0) return -1
    if (n === 0) return 1

    return calcFatorial(n - 1) * n
}


const UseEffect = (props: any) => {
    const [number, setNumber] = useState<string | any>(1)
    const [fatorial, setFatorial] = useState<string | number>(1)

    //Ex #01
    useEffect(function () {
        setFatorial(calcFatorial(number))

    }, [number])


    //Ex #02
    const [status, setStatus] = useState("Ímpar")

    useEffect(function () {
        setStatus(number % 2 === 0 ? "Par" : "Ímpar")        
    }, [number])

    console.log('dsauhduase')
    return (
        <div className="UseEffect">
            <PageTitle title="Hook UseEffect" subtitle="Permite executar efeitos colaterais em componentes funcionais!" />

            <SectionTitle title='Exercício #01'></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>

            <SectionTitle title='Exercício #02'></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{status}</span>
                </div>
            </div>
        </div>

    )
}

export default UseEffect
