import React from 'react';
import { HiPhoneIncoming, HiPhoneOutgoing } from 'react-icons/hi';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { MdPhoneMissed } from 'react-icons/md';

import { getAmPmByDate, getDateFromDate, getTimeByDate } from '../../helpers/date_helpers';

const ActivityItem = ({ item, onArchive }) => {
    // Local State
    const inboundNumber = item.direction === 'inbound' ? item.from : item.to;
    const inboundName = item.direction === 'inbound' ? item.to : item.from;

    // Renders
    const renderCallIcon = () => (
        item.direction === 'inbound' ?
            item.callType === 'missed' ?
                <MdPhoneMissed className='call-icon' />
                :
                <HiPhoneIncoming className='call-icon' />
            :
            <HiPhoneOutgoing className='call-icon' />
    );
    const renderCount = () => (
        item.count > 1 && <div className='count'>
            <label className='count-label'>{item.count}</label>
        </div>
    )

    // Return
    return (
        <>
            <label className='dots'>
                {getDateFromDate(item.created_at)}
            </label>
            <button className='activity-item'>
                {renderCallIcon()}
                <div div className='d-flex flex-column'>
                    <div className='d-flex flex-row'>
                        <label className='title'>{inboundNumber}</label>
                        {renderCount()}
                    </div>
                    <label className='subtitle mt-1'>{inboundName}</label>
                </div>
                <div className='m-auto' />
                <HiOutlineDotsVertical className='dots-icon' />
                <label className='subtitle'>{getTimeByDate(item.created_at)}</label>
                <label className='am-pm'>{getAmPmByDate(item.created_at)}</label>
            </button>
        </>
    )
}

export default ActivityItem;
