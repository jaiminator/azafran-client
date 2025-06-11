type User = {
    id: number,
    name?: string
}

interface Humano extends User {
    age: number
}

const Title = () => {

    const user1: Humano = {
        id: 1,
        name: "sas",
        age: 33
    }

    return (
        <>
            <h4>{user1.id}</h4>
            <h4>{user1.name}</h4>
            <h4>{user1.age}</h4>
        </>
    )
}

export { Title }