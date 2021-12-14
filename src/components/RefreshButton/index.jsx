import { FiRefreshCw } from 'react-icons/fi';
import { useHabits } from '../../providers/Habit';
import api from '../../services/api';

const RefreshButton = ({type, data}) => {
    // type deve ser habits ou goals
    const {id} = data;
    const token = localStorage.getItem("@financeHabits:token");
    const {toGetHabits} = useHabits();

    const handleRefresh = () => {
        // console.log(data)
        api.patch(
            `/${type}/${id}/`,
            { how_much_achieved: 0, achieved: false },
            {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            }
        ).then(res => console.log(res.data));
        
        toGetHabits();
    }

    return (
        <FiRefreshCw color='#0090Ad' onClick={handleRefresh} style={{cursor: 'pointer'}}/>
    )
}

export default RefreshButton