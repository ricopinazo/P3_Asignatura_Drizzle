import {useState} from "react"
import {newContextComponents} from "@drizzle/react-components";

const {ContractData} = newContextComponents;

const CalificacionesEvaluacion = (props) => {

    const [evaluacion, setEvaluacion] = useState(0);

    const option = evaluacionIndex => (
        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract="Asignatura"
            method={"evaluaciones"}
            methodArgs={[evaluacionIndex]}
            render={ev => (
                <option key={evaluacionIndex}> {ev.nombre}</option>
            )}
        />
    );

    const dropdown = (
        <select onChange={event => setEvaluacion(event.target.selectedIndex)}>
            <ContractData
                drizzle={props.drizzle}
                drizzleState={props.drizzleState}
                contract="Asignatura"
                method="evaluacionesLength"
                render={el => Array.from({length: el}, (_, evaluacionIndex) => option(evaluacionIndex))}
            />
        </select>
    )

    const row = (alumnoIndex, evaluacionIndex) => (
        <tr>
            <th>A<sub>{alumnoIndex}</sub></th>

            <ContractData
                drizzle={props.drizzle}
                drizzleState={props.drizzleState}
                contract="Asignatura"
                method="matriculas"
                methodArgs={[alumnoIndex]}
                render={alumnoAddr => (
                    <>
                        <ContractData
                            drizzle={props.drizzle}
                            drizzleState={props.drizzleState}
                            contract="Asignatura"
                            method="datosAlumno"
                            methodArgs={[alumnoAddr]}
                            render={datos => (<td>{datos.nombre}</td>)}
                        />
                        <ContractData
                            drizzle={props.drizzle}
                            drizzleState={props.drizzleState}
                            contract="Asignatura"
                            method="calificaciones"
                            methodArgs={[alumnoAddr, evaluacionIndex]}
                            render={nota => (
                                <td key={"CalificacionesEvaluacion-row-" + alumnoAddr}>
                                    {nota.tipo === "0" && "N.P."}
                                    {nota.tipo === "1" && nota.calificacion / 10}
                                    {nota.tipo === "2" && (nota.calificacion / 10) + "(M.H.)"}
                                </td>
                            )}
                        />
                    </>
                )}
            />
        </tr>
    );

    const table = evaluacionIndex => (
        <table>
            <thead>
                <th>A</th>
                <th>Nombre</th>
                <th>Nota</th>
            </thead>
            <tbody>
                <ContractData
                    drizzle={props.drizzle}
                    drizzleState={props.drizzleState}
                    contract="Asignatura"
                    method="matriculasLength"
                    render={ml => Array.from({length: ml}, (_, alumnoIndex) => row(alumnoIndex, evaluacionIndex))}
                />
            </tbody>
        </table>
    );

    return (
        <>
            {dropdown}
            {table(evaluacion)}
        </>
    )
};

export default CalificacionesEvaluacion;