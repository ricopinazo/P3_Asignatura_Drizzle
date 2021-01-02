import {newContextComponents} from "@drizzle/react-components";

import AlumnosHead from "./AlumnosHead";
import AlumnosBody from "./AlumnosBody";
import AlumnoForm from "./AlumnoForm";

const {ContractData} = newContextComponents;

const Alumnos = (props) => (
    <section className="AppAlumnos">
        <h2>Alumnos</h2>

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Asignatura"}
            method={"matriculasLength"}
            render={ml => (
                <>
                    <table>
                        <AlumnosHead/>
                        <AlumnosBody drizzle={props.drizzle}
                                    drizzleState={props.drizzleState}
                                    matriculasLength={ml}/>
                    </table>
                    <AlumnoForm
                        drizzle={props.drizzle}
                        drizzleState={props.drizzleState}
                    />
                </>
            )}
        />
    </section>
);

export default Alumnos;
