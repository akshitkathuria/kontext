import React from 'react';

const ListItem = ({ twit, onTwitSelect }) => {
    return (
        <li onClick={() => onTwitSelect(twit)} className="list-group-item">
            <div>
                <div>
                    <div>{twit.text}</div>
                </div>
            </div>
        </li>
    );
};

export default ListItem;