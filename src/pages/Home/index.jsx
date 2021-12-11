
import BasePage from "../../components/BasePage"
<<<<<<< HEAD
import { useGroups } from "../../providers/Groups"
import CardGroup from '../../components/CardGroup'
=======
>>>>>>> 0efdb3780981b5e5d055879e9ffe7d6132414f97

const Home = ({authenticated, setAuthenticated}) => {

    return(
        <BasePage authenticated={authenticated} setAuthenticated={setAuthenticated} >
<<<<<<< HEAD
            {
                groups.map( item => (
                <CardGroup 
                    category={item.category} 
                    description={item.description}
                    name={item.name}
                />
            ))
            }
=======
            
>>>>>>> 0efdb3780981b5e5d055879e9ffe7d6132414f97
        </BasePage>
    )
}

export default Home
