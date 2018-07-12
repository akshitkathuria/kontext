import React from 'react';

import ListItem from './ListItem';

const List = (props) => {
    const twitItems = props.twit.map((twit) => {
        return (
            <ListItem
                onTwitSelect={props.onTwitSelect}
                key={twit.id}
                twit={twit} />
        );
    });

    return (
        <ul >
            {twitItems}
        </ul>
    );
}

export default List;