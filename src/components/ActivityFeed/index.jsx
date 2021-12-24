// node_modules
import React, { useEffect, useState } from "react";
// components
import ActivityItem from "../ActivityItem";
// helpers
import { getActivitiesApi, postArchiveActivityApi } from "../../helpers/backend_helper";

const ActivityFeed = () => {
    // Local STate
    const [activityFeeds, setActivityFeeds] = useState([]);

    // Hooks
    useEffect(() => {
        handleFetchActivities();
    }, []);

    // Functions
    const handleFetchActivities = () => {
        getActivitiesApi((res) => {
            if (res.success) {
                let arr = [];
                res.data && res.data.forEach((item) => {
                    let found = false;
                    arr.forEach((e, i) => {
                        if(item.direction === 'inbound' && item.from === e.from) {
                            arr[i].count += 1;
                            if(!arr[i].to) arr[i].to = item.to;
                            found = true;
                        } else if(item.direction === 'outbound' && item.to === e.to) {
                            arr[i].count += 1;
                            if(!arr[i].from) arr[i].from = item.from;
                            found = true;
                        }
                    });
                    if(!found) arr.push({...item, count: 1});
                });
                setActivityFeeds(arr);
            }
        });
    }
    const handleArchive = (item) => {
        postArchiveActivityApi(item.id, {is_archived: true}, (res) => {
            if(res.success) {
                handleFetchActivities();
            } else {
                alert('Something went wrong, please try again later!');
            }
        });
    }

    console.log('\nactivityFeeds:', activityFeeds)

    // Renders
    const renderActivities = () => (
        activityFeeds.length ?
            activityFeeds.map((item, index) => (
                <ActivityItem key={index} item={item} onArchive={() => handleArchive} />
            ))
            :
            <div>
                <label>No Activity Found</label>
            </div>
    )

    // Return
    return (
        <div>
            {renderActivities()}
        </div>
    )
}

export default ActivityFeed;
