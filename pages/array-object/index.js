import React, { useState } from 'react';

const data = [
    {
        product_name: 'computer',
        id: 1,
        sub_category: [
            {
                sub_cat_name: 'laptop',
                sub_cat_id: 100
            },
            {
                sub_cat_name: 'asus',
                sub_cat_id: 101
            },
            {
                sub_cat_name: 'dell',
                sub_cat_id: 102
            },
        ]
    },
    {
        product_name: 'mobile',
        id: 2,
        sub_category: [
            {
                sub_cat_name: 'apple',
                sub_cat_id: 200
            }, 
        ]
    },
    {
        product_name: 'bike',
        id: 3,
        sub_category: [
            {
                sub_cat_name: 'tvs',
                sub_cat_id: 300
            },
            {
                sub_cat_name: 'hero',
                sub_cat_id: 301
            },
        ]
    },
]

const Index = () => {
    const [enteredId, setEnteredId] = useState('');
    const [searchResult, setSearchResult] = useState('');

    const handleInputChange = (e) => {
        setEnteredId(e.target.value);
    };

    const handleEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchItem();
        }
    };

    const searchItem = () => {
        const id = parseInt(enteredId);
        for (const item of data) {
            if (item.id === id) {
                setSearchResult(item.product_name);
                return;
            }
            for (const subItem of item.sub_category) {
                if (subItem.sub_cat_id === id) {
                    setSearchResult(subItem.sub_cat_name);
                    return;
                }
            }
        }
        setSearchResult('Not found');
    };

    return (
        <>
            <div>
                <input
                    type='number'
                    placeholder='Enter id'
                    value={enteredId}
                    onChange={handleInputChange}
                    onKeyPress={handleEnterKeyPress}
                />
            </div>
            <div>
                {searchResult && <p>{searchResult}</p>}
            </div>
        </>
    );
};

export default Index;