import React, { Component } from 'react'
import TimelineEvent from './TimelineEvent';
import s from './styles'
import { Icon } from 'semantic-ui-react';

class Timeline extends Component {
    render() {
        const { orientation = 'left', children, style = {}, ...otherProps } = this.props
        // const childrenWithProps = React.Children.map(children, child => React.cloneElement(child, { orientation }))
        const leftOrRight = (orientation === 'right') ? { ...s['containerBefore--right'] } : { ...s['containerBefore--left'] }

        var pileComponent = this.props.list.map((pile) => {
            return <TimelineEvent title={pile.where}
                createdAt={pile.date}
                // icon={<i className="material-icons md-18">textsms</i>}
                iconStyle={{ padding: 2, color: 'red' }}
                icon={<Icon name='translate' size='large' />}
                iconColor="#03a9f4"
                key={pile.date}>
                {pile.what} - {pile.how}
            </TimelineEvent>
        });
        return (
            <div>
                <section style={{ ...s.container, ...style }} {...otherProps}>
                    <div style={{ ...s.containerBefore, ...leftOrRight }} />
                    {pileComponent}
                    <div style={s.containerAfter} />
                </section >
            </div>
        )
    }
}

export default Timeline;