import react from "react";
import { useNavigate } from 'react-router-dom'

const estiloBotao = {
    padding: '10pc 20px',
    fontsize:'10px',
    cursor:'pointer',
    borderRadius:'5px',
    border:'1px solid #ccc'
    backgroundColor:'#007bff',
    color:'#ffffff'
}
export default BotaoNavegacao({ rota, texto }){
    const navigate = useNavigate(),
    return(
        <button onClick={() => navigate(rota)} style={estiloBotao}>
        { texto }
        </button>
    );
}