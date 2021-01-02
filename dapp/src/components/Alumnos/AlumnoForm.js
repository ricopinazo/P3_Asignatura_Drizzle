import {newContextComponents} from "@drizzle/react-components";

const {ContractData, ContractForm} = newContextComponents;

const AlumnoForm = (props) => {

    const form = (
        <ContractForm
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Asignatura"}
            method={"automatricula"}
        />
    );

    return (
        <ContractData
            drizzle={props.drizzle}
            drizzleState={props.drizzleState}
            contract={"Asignatura"}
            method={"quienSoy"}
            render={datos => (
                <>
                {!datos && form}
                </>
            )}
        />
    );
};

export default AlumnoForm;