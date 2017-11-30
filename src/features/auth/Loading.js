import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react';

import '../feature.css';


class Loading extends Component {
    render() {
        return (
            <div className="loader">
                <Loader
                    active
                    inline='centered'
                    size="large"
                />
            </div>
        )
    }
}

export default Loading;