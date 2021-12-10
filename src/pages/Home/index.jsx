
import BasePage from "../../components/BasePage"
import { useGroups } from "../../providers/Groups"
import CardHome from '../../components/CardHome'

const Home = ({authenticated, setAuthenticated}) => {

    const {groups} = useGroups()

    return(
        <BasePage authenticated={authenticated} setAuthenticated={setAuthenticated} >
            {
                groups.map( item => (
                <CardHome 
                    category={item.category} 
                    description={item.description}
                    name={item.name}
                />
            ))
            }
        </BasePage>
    )
}

export default Home
