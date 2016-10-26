import React from 'react';

require( './Blog-intro-container.css' );
import { usersBlogData } from './../../utils/helpers';
import BlogImage from './Blog-image/Blog-image';
import BlogMeta from './Blog-meta/Blog-meta';

export default class BlogIntroContainer extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            usersBlogData: []
        };
    }

    componentDidMount() {
        this.init();
    }

    init() {
        usersBlogData()
            .then( data => this.setState( { usersBlogData: data.data } ) )
            .bind( this );
    }

    render() {
        return(
            <div></div>
        )
    }
}
