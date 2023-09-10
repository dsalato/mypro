import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import React from "react";

class App extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            blogs:[
                {
                    id:1,
                    name:'Развлечение',
                    des:'Проведете отличное время',
                    img:'game.jpg',
                    count:0
                },
                {
                    id:2,
                    name:'Здоровье',
                    des:'Проведете время с пользой',
                    img:'healthy.jpg',
                    count:0
                },
                {
                    id:3,
                    name:'Еда',
                    des:'Вкусно покушаете',
                    count:0,
                    img:'food.jpg'
                },
                {
                    id:4,
                    name:'Развлечение',
                    des:'Проведете отличное время',
                    count:0,
                    img:'game.jpg'
                },
                {
                    id:5,
                    name:'Здоровье',
                    des:'Проведете время с пользой',
                    count:0,
                    img:'healthy.jpg'
                },
                {
                    id:6,
                    name:'Еда',
                    des:'Вкусно покушаете',
                    count:0,
                    img:'food.jpg'
                },
            ]
        }
        this.onCount = this.onCount.bind()
    }
    onCount = (id) => {
        const updatedUsers = this.state.blogs.map(blogs => {
            if (blogs.id === id) {
                return { ...blogs, count: blogs.count + 1 };
            }
            return blogs;
        });
        this.setState({ blogs: updatedUsers });
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Main onCount={this.onCount} blogs={this.state.blogs}/>
                <Footer/>
            </div>
        );
    }


}

export default App;
