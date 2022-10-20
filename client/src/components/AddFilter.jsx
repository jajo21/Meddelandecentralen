import React, { useContext } from 'react'
import ConnectionContext from '../contexts/ConnectionContext'
import { getRoomName } from '../services/room';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import './css/addfilter.css'


function AddFilter({ showAddFilter, setShowAddFilter }) {
    const { rooms, setPostFilter, postFilter } = useContext(ConnectionContext);
    return (
        <>
            {postFilter ?
                <div className='filter-header'>
                    <FontAwesomeIcon icon={faFilter} /> {getRoomName(rooms, postFilter)}
                </div>
                :
                <div className='filter-header'>
                    <FontAwesomeIcon icon={faFilter} /> Inget filter
                </div>
            }

            {showAddFilter &&
                <div className='filter-menu'>
                    <h3>Filter</h3>
                    <div className='room' onClick={() => {
                        setShowAddFilter(prevState => !prevState)
                        setPostFilter(null);
                    }}
                    >Inget filter
                    </div>

                    {rooms.length > 0 && rooms.map(room => {
                        return (
                            <div className='room' key={room.id} onClick={() => {
                                setShowAddFilter(prevState => !prevState)
                                setPostFilter(room.id);
                            }}>{room.name}</div>
                        )
                    })}
                </div>
            }
        </>
    )
}

export default AddFilter