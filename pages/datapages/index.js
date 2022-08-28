import Link from 'next/link';
import styles from "../../styles/Feature.module.css";
// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

const Staff = ({data}) => {
    return (
        <div>
            <h1>Techstudio Staff</h1>
            {
                data.map(person => (
                    <Link href={`/datapages/${person.id}`} key={person.id}>
                    
                            <a className={styles.person}>
                        <h3>{person.name}</h3>
                        <div><b>Email</b>: {person.email} </div>
                                </a>
                            </Link>
                       
                ))
            }
        </div>
    );
}

export default Staff;




