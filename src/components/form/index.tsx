import React, { ChangeEvent, FormEvent, useState } from "react";
import { DEFAULT_BODY } from "./constants";
import { Contract } from "./interface";
import { DeliveryTypes } from "./interface";
const Form: React.FC<any> = () => {
    // Somos una empresa de repartos y necesitamos
    // diseñar un sistema para que los comercios
    // puedan elegir a que horarios hacer envios

    // Los envios salen desde los comercios, y
    // los comercios eligen las opciones en este formulario
    // para determinar donde y en que horario pueden pasar a buscar el envío
    const [body, setBody] = useState<Contract>(DEFAULT_BODY); // Default body es el valor inicial

    const changeEvent = (e: ChangeEvent<HTMLInputElement>) => {
        setBody({ ...body, receiver: e.target.value }); //Usamos un spread operator para evitar perder valores anteriores
    };

    const enviarDatosAlBack = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(body);
    };
    const change = (ev: ChangeEvent<HTMLSelectElement>) => {
        setBody({ ...body, type: ev.target.value as DeliveryTypes })
    }
    const changeWeight = (eve: ChangeEvent<HTMLInputElement>) => {
        setBody({ ...body, packageWeight: Number(eve.target.value) })
    }
    return (
        <div>
            <form onSubmit={enviarDatosAlBack}>
                <label htmlFor="weight">Weight of package</label>
                <input type="number"
                    placeholder="Set the weight"
                    id="weight"
                    onChange={changeWeight} />
                <label htmlFor="delivery">Tipos de envio gg</label>
                <select id="delivery" value={body.type} onChange={change}>
                    <option value={DeliveryTypes.CASUAL}>CHOLO</option>
                    <option value={DeliveryTypes.EXPRESS}>BRUTO</option>
                    <option value={DeliveryTypes.LATE}>HIJO DE PUTA</option>
                </select>
                <label htmlFor="receiver">
                    Nombre de la persona que despachará el paquete
                </label>
                <input
                    placeholder="Pepito"
                    type="text"
                    id="receiver"
                    onChange={changeEvent}
                />

                <label htmlFor="premiumUser">¿Usuario premium?</label>
                <input
                    type="checkbox"
                    id="premiumUser"
                    onChange={() => setBody({ ...body, premiumUser: !body.premiumUser })}
                />
                <button className="submit" type="submit">
                    someter sexualmente
                </button>
            </form>
        </div>
    );
};

export default Form;
