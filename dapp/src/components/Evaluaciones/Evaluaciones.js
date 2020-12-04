import {newContextComponents} from "@drizzle/react-components";

import EvaluacionesHead from "./EvaluacionesHead";
import EvaluacionesBody from "./EvaluacionesBody";

const {ContractData} = newContextComponents;

const Evaluaciones = (props) => (
    <section className="AppEvaluaciones">
        <h2>Evaluaciones</h2>

        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Asignatura"}
            method={"evaluacionesLength"}
            render={el => (
                <table>
                    <EvaluacionesHead/>
                    <EvaluacionesBody drizzle={props.drizzle}
                                      drizzleState={props.drizzleState}
                                      evaluacionesLength={el}/>
                </table>
            )}
        />

    </section>
);

export default Evaluaciones;
