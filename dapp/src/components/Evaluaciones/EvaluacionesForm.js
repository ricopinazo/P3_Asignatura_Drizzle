import {newContextComponents} from "@drizzle/react-components";

const {ContractData, ContractForm} = newContextComponents;

const EvaluacionesForm = (props) => {

    const form = (
        <ContractForm
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract="Asignatura"
            method="creaEvaluacion"
        />
    );

    return (
        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract="Asignatura"
            method="profesor"
            render={profesor => (
                <>
                    {(profesor === props.drizzleState.accounts[0]) && form}
                </>
            )}
        />
    )
};

export default EvaluacionesForm;