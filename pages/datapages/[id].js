
// Generates `/datapages/1` and `/datapages/2`
export async function getStaticPaths() {
    
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/`)
        const data = await res.json()

        const paths = data.map(person => {
            return {
                params: {id:person.id.toString()}
            }
        })

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
            
        }
    
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()

    return {
        // Passed to the page component as props
        props: { staff: data},
    }
}

const Features = ({staff}) => {
    return (
        <div>
            <h1>Techstudio Academy Staff</h1>
            <h3><b>Name</b>: {staff.name} </h3>
            <p><b>UserName</b>: {staff.username} </p>
            <p><b>Email</b>: {staff.email} </p>
            <p><b>Address</b>: {staff.address.street} </p>
            <p><b>Phone Number</b>: {staff.phone} </p>
            
        </div>
    );
}

export default Features;
