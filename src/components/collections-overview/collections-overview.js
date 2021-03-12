import React, { useContext } from 'react';
import './collections-overview.scss';
import CollectionPreview from '../collection-preview/collection-preview';
import CollectionsContext from '../../contexts/collections/collections.context';

const CollectionsOverview = () => {
    const collectionsMap = useContext(CollectionsContext);
    const collections = Object.keys(collectionsMap).map((key) => collectionsMap[key]);

    return (
        <div className="collections-overview">
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
};

export default CollectionsOverview;