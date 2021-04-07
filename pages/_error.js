import Layout from '../components/Layout'; 
import 'bootstrap/dist/css/bootstrap.css';


export default ({statusCode})=> {
    return(
        <div class="middle" id="main">
            
            <h1 class="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
                <div class="inline-block align-middle">
    	            <h2 class="font-weight-normal lead" id="desc">{statusCode ? `Could not load your user data: Status Code ${statusCode}`
                            : `Couldn't get that page, sorry!`};
                    </h2>
        </div>   
        <style jsx global>{`
        #main { 
            height: 100vh;
        }

        div { 
            display: flex; 
            justify-content: center; 
            align-items : center; 
            align-content : center; 
        }

        `}

            
            
            </style>   
                </div>

    )};