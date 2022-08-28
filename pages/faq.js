import {useRouter} from 'next/router'

const Faq = () => {
    const router = useRouter()
    return (
        <div>
            <h1>FAQ Page</h1>

            <button type="button" className="btn btn-success" onClick={()=> router.push('/')}>Go Home</button>
            <button type="button" className="btn btn-info" onClick={()=> router.push('/about')}>Go To About Page</button>
        </div>
    );
}

export default Faq;
