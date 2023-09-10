import React from 'react';
import Blog from "./Blog";


class Blogs extends React.Component{

    render() {
        return(
            <div className='blogs'>
                {this.props.blogs.map(el=>(
                    <Blog onCount={this.props.onCount} key={el.id} item={el}/>
                ))}
            </div>
        )
    }
}
export default Blogs;