import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

class Induviduals extends Component {

    state = {
        event: null,
    };

    getCurrentEvent = (id) => {
        this.props.events.map(item => {
            if (item.id == id) {
                this.setState({event: item});
            }
        });
    }


    render() {
        var id = this.props.match.params.id;

        if (!this.state.event) {
            this.getCurrentEvent(id);
        }
        console.log(this.state);
        return (
            <div>
                BANTER
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.viewReducer.events,
    };
}

export default connect(mapStateToProps)(Induviduals);