
import {FiX} from 'react-icons/fi'

const Remove= ({type, data}) => {

    const toRemove = () => {
        switch (type) {
            case 'group':
                //chamar provider de desisnscrição de grupo
                break
            case 'habit':
                //chamar provider de deleçãode habito
                break
            case 'goals':
                // chamar provider de deleção de meta de grupo
                break

            default:
                return
        }
    }


    return(
        <FiX onClick={toRemove}/>
    )
}

export default Remove