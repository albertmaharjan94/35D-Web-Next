"use client";

import { useState } from "react";

export default function Page() {
    return (
        <div>
            <ParentComponent/>
        </div>
    );
}
function ParentComponent() {
    const count = 1;
    const [number, setNumber] = useState(0)
    const title = 1
    return (
        <div>
            <button onClick={() => setNumber(number + 1)}>Increment</button>
            <ChildComponent count={count} number={number} title={title}/>
        </div>
    )
}

function ChildComponent({ count, number, title }: 
        { count: number, number: number, title: number }) {
    return (
        <div>{count} {number}
            <GrandChildComponent title={title}/>
        </div>
    )
}
interface Props{
    title: number;
}
function GrandChildComponent({title}: Props) {
    return (
        <div>{title}</div>
    )
}