import React from 'react';

class Blog extends React.Component{

    render() {
        return(
            <div className='blog'>
                {this.props.item.count > 0 ? <h1>{this.props.item.name} +{this.props.item.count} </h1> : <h1>{this.props.item.name} </h1>}

                <p>{this.props.item.des}</p>
                <img src={'./img/' + this.props.item.img} onClick={()=>this.props.onCount(this.props.item.id)}/>
            </div>
        )
    }
}
export default Blog;