import { useState } from 'react';
export default function Hello({firstName, lastName}) {
    return (
        <p>Привет, {firstName} {lastName}</p>
    )
}