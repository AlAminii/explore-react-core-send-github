export default function Friend({friend} ){
    const {name, email} = friend;
    return(
        <div>
            <h1>Name: {name}</h1>
            <h1>Email: {email}</h1>
        </div>
    )
}