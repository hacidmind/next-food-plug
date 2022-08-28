import style from "../styles/About.module.css";
import { useRouter } from 'next/router'
import Image from 'next/image'
import logo from "../public/logo.png"


const About = () => {
    const  router = useRouter()
    return (
        <div>
            <h1 className={style.title}>About Page</h1>
            <Image src={logo} alt="logo" />

            <p className={style.lorem}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, dolorum. Autem aliquam provident necessitatibus. Veritatis culpa recusandae, quia fugit nesciunt architecto aspernatur aliquam similique saepe, ducimus, rem id temporibus corporis.</p>
            <button type="button" className="btn btn-info" onClick={()=>router.push('/')}>Go Home</button>
        </div>
    );
}

export default About;
