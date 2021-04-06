import Layout from '../components/Layout'; 
import Link from 'next/link';


export default () => { 
    return(
    <Layout title='Blog'>
        <ul>
            <li>
                <Link href='/post?title=React'>
                    <a>React Post</a>
                </Link>

            </li>
        </ul>

    </Layout>
    )
};