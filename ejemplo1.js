/* React Developer Tools */
/* React Component */
/* Class Component */
class Titulo extends React.Component {
    render() {
        return (
            <React.Fragment>{/* Fragment */}
                <h1>Hello World!</h1> {/* JSX */}
                <h3>4Geeks Academy</h3> {/* JSX */}
            </React.Fragment>
        )
    }
}

/* Function Component */
function Titulo() {
    return (
        <> {/* Fragment */}
            <h1>Hello World!</h1>
            <h3>4Geeks Academy</h3>
        </>
    )
}


/* Implementacion de un Componente de Clase o Funcional */
<>
    <Titulo />
    <Titulo></Titulo>
</>

/* 

let props = {
    className: 'text-primary',
    name: 'Luis'
}

*/

class Saludo extends React.Component {
    render() {
        return (
            <h1 className={this.props.className}>Hola, {this.props.name}</h1>
        )
    }
}

<>
    <Saludo className="text-primary" name="Luis" />
    <Saludo className="text-danger" name="Sebastian" />
    <Saludo className="text-warning" name="Catalina" />
</>


function Saludo(props) {
    return (
        <h1 className={props.className}>Hola, {props.name}</h1>
    )
}


<>
    <Saludo className="text-primary" name="Luis" />
    <Saludo className="text-danger" name="Sebastian" />
    <Saludo className="text-warning" name="Catalina" />
</>


class Heading extends React.Component {

    //name = "Luis"; 

    constructor() {
        this.state = {
            name: 'Luis',
            lastname: 'Doe',
            age: undefined,
            address: 'Av. Vendetta'
        }
    }

    update() {
        this.setState({ name: 'John', lastname: 'Doe' });
    }

    render() {
        return (
            <h1>{this.state.name}</h1>
        )
    }
}


function Heading() {

    //let name = "Luis";

    const [state, setState] = useState({
        name: 'Luis',
        lastname: 'Doe',
        age: undefined,
        address: 'Av. Vendetta',
        name: 'Pedro'
    })

    const [name, setName] = useState("Luis");
    const [lastname, setLastname] = useState("Doe");

    const [notas, setNotas] = useState([1, 2, 3])


    const update = () => {
        //setState({ age: 4000 });
        setState((state) => {
            return { ...state, age: 4000 }
        })
        setName("Pedro");
        setLastname("Perez");
        setNotas((notas) => {
            return [...notas, 4, 5]
        })

        setNotas((notas) => {
            return notas.concat(4, 5)
        })
    }

    return (
        <>
            <h1>{state.name}</h1>
            <h1>{state.lastname}</h1>
            <h1>{notas[0]}</h1>
        </>
    )
}

<>
    <Heading /> {/* <h1>Luis</h1> */}
    <Heading /> {/* <h1>Luis</h1> */}
</>


function List() {
    const [names, setNames] = useState(["Hugo", "Paco", "Luis", "Donald"]);
    return (
        <>
            <ul>
                {
                    names.map((name, index) => {
                        return (
                            <li key={index}>{name}</li>
                        )
                    })
                }
            </ul>
        </>
    )
}