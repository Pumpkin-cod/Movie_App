/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import axios from 'axios'
import ReviewCard from './ReviewCard'

export default class Review extends Component {

    constructor(props) {
        super(props)
        this.state = {
            reviews: []
        }
    }

    getReviews = async () => {
        try {
            await axios.get("https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=3AnqdqcAh9BPx7gOJCbX7qsohsT8hRjO")
                .then(resp => {
                    console.log(resp.data.results)
                    this.setState({ reviews: resp.data.results })
                })
                .catch(err => console.log(err))
        } catch (err) {
            console.log(err)
        }

    }

    componentDidMount() {
        this.getReviews()

    }


    render() {
        return (
            <div className='w-full flex flex-row flex-wrap'>
                {this.state.reviews.length < 1 ? 'No Reviews' : ''}

                {
                    this.state.reviews && this.state.reviews.map((review, index) => {
                        return <ReviewCard review={review} index={index} />
                    })
                }
            </div>
        )
    }
}