/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const ReviewCard = ({ review, index }) => {
    return (
        <div className=" flex flex-row p-4">
            <div className="bg-white w-96 gap-6 shadow-lg rounded-lg overflow-hidden h-96 ">
                <img
                    src="https://ichef.bbci.co.uk/childrens-responsive-ichef-live/r/400/1.5x/cbbc/bp-film-review-title.jpg"
                    alt=""
                    className="w-full h-40 object-cover"
                />
                <div className="p-4">
                    <h4 className="text-xl font-bold mb-2">{review.display_title}</h4>
                    <h5 className="text-lg mb-2">{review.headline}</h5>
                    <h5 className="text-gray-500 mb-2">{review.byline}</h5>
                    <h5 className="text-gray-500">Critics Picks: {review.critics_pick}</h5>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;

