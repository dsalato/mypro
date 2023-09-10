import React from 'react';
import Blogs from "./Blogs";

class Main extends React.Component{
    render() {
        return(
            <main>
                <div className='container'>
                    <div className='main'>
                        <div className='main_content'>
                            <Blogs onCount={this.props.onCount} blogs={this.props.blogs}/>
                        </div>
                        <div className='main_users'>Пользователи</div>
                    </div>
                </div>

            </main>
        )
    }
}
export default Main;