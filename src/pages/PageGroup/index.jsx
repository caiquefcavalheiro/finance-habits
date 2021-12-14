import { useEffect } from "react"

import CardSearch from "../../components/CardSearch"
import {useGroups} from '../../providers/Groups'

const PageGroup = () => {

    const {groupList, allGroups} = useGroups()

    useEffect(() => {
        allGroups()
    },[])

    return(
        <>
        
        <main>
            {
                groupList.map( item => (
                    <CardSearch
                        item={item}
                        key={item.id}
                    />
                ))
            }

        </main>
        </>
    )
}

export default PageGroup