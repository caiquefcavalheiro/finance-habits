
import BasePage from "../../components/BasePage"
import { useGroups } from "../../providers/Groups"
import CardHome from '../../components/CardHome'

const Home = () => {

    const {groups} = useGroups()

    return(
        <BasePage>
                {groups.map( (item, index) => (
                    <CardHome
                        key={index}
                        category={item.category} 
                        description={item.description}
                        name={item.name}
                    />
                ))}
        </BasePage>
    )
}

export default Home
