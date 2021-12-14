import { useEffect } from "react"

import CardSearch from "../../components/CardSearch"
import {useGroups} from '../../providers/Groups'
import { DisplayContainer } from "../../components/DisplayContainer"
import { SubHeader } from '../../components/SubHeader'

const PageGroup = () => {

    const {groupList, allGroups} = useGroups()

    useEffect(() => {
        allGroups()
    },[])

    return(
        <DisplayContainer type={'row'}>
            
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
        </DisplayContainer>
    )
}

export default PageGroup