import React, { Component } from "react";

// import "./Week4/styles/Album_Final.css"
import "./CSS/chat_box.css"
import {
    Layout,
    Nav,
    Button,
    Avatar,
    Dropdown,
    Col,
    Row,
    Input,
    Image,
    BackTop,
    Radio,
    RadioGroup,
    Select,
    Carousel,
    Form
} from "@douyinfe/semi-ui";
import {
    IconSemiLogo,
    IconBell,
    IconHelpCircle,
    IconSearch,
    IconUserCardPhone,
    IconMailStroked1,
    IconPaperclip,
    IconArrowUp,
    IconDownload,
    IconCart,
    IconChevronRight,
    IconBytedanceLogo,
    IconRefresh

} from "@douyinfe/semi-icons";
import withRouter from "./withRouter"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import axios from 'axios';



class Component1 extends Component {
    constructor(props) {
        super(props);

        this.state = {

            placeholder: "送给孩子的儿童节礼物推荐",

            top_length: 1,

            index: 0
        }


        this.array = ["送给妈妈的母亲节礼物推荐", "送给爸爸的父亲节礼物推荐", "送给长辈的好礼推荐", "送给好朋友的礼物推荐"];

        this.history_record_yesterday = [{

            item_key: 'active1',
            tect: 'teac1'
        },

        {

            item_key: 'active2',
            tect: 'teac2'
        },

        {

            item_key: 'active3',
            tect: 'teac3'
        },

        {

            item_key: 'active4',
            tect: 'teac4'
        },


        ]


        this.gift_list = [{


            'unique_id': 1,//unique integer
            'item_number': 1234,//Integer
            'simple_description': "白色的杯子",//String
            'complex_description': " 这是一件精致而又简洁的容器，其外观充满了纯洁和优雅的特质。这个杯子的整体构造似乎是由无瑕的陶瓷或瓷器制成。杯子的外表线条流畅，充满了现代感，但同时也带有一些传统的元素。",//String
            'price': 123,//Number
            'link': "https://www.exxple.com",//String
            'image_src': 'https://photo.tuchong.com/2312135/ft640/1161245848.webp'

        },

        {


            'unique_id': 2,//unique integer
            'item_number': 1235,//Integer
            'simple_description': "白色的杯子",//String
            'complex_description': " 这是一件精致而又简洁的容器，其外观充满了纯洁和优雅的特质。这个杯子的整体构造似乎是由无瑕的陶瓷或瓷器制成。杯子的外表线条流畅，充满了现代感，但同时也带有一些传统的元素。",//String
            'price': 55,//Number
            'link': "https://www.exxple.com",//String
            'image_src': 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cup_and_Saucer_LACMA_47.35.6a-b_%281_of_3%29.jpg'

        },

        {


            'unique_id': 3,//unique integer
            'item_number': 1236,//Integer
            'simple_description': "白色的杯子",//String
            'complex_description': " 这是一件精致而又简洁的容器，其外观充满了纯洁和优雅的特质。这个杯子的整体构造似乎是由无瑕的陶瓷或瓷器制成。杯子的外表线条流畅，充满了现代感，但同时也带有一些传统的元素。",//String
            'price': 53,//Number
            'link': "https://www.exxple.com",//String
            'image_src': 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cup_and_Saucer_LACMA_47.35.6a-b_%281_of_3%29.jpg'

        },

        {


            'unique_id': 4,//unique integer
            'item_number': 1237,//Integer
            'simple_description': "白色的杯子",//String
            'complex_description': " 这是一件精致而又简洁的容器，其外观充满了纯洁和优雅的特质。这个杯子的整体构造似乎是由无瑕的陶瓷或瓷器制成。杯子的外表线条流畅，充满了现代感，但同时也带有一些传统的元素。",//String
            'price': 235,//Number
            'link': "https://www.exxple.com",//String
            'image_src': 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cup_and_Saucer_LACMA_47.35.6a-b_%281_of_3%29.jpg'

        }
            ,

        {


            'unique_id': 5,//unique integer
            'item_number': 1237,//Integer
            'simple_description': "白色的杯子",//String
            'complex_description': " 这是一件精致而又简洁的容器，其外观充满了纯洁和优雅的特质。这个杯子的整体构造似乎是由无瑕的陶瓷或瓷器制成。杯子的外表线条流畅，充满了现代感，但同时也带有一些传统的元素。",//String
            'price': 235,//Number
            'link': "https://www.exxple.com",//String
            'image_src': 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cup_and_Saucer_LACMA_47.35.6a-b_%281_of_3%29.jpg'

        }
            ,

        {


            'unique_id': 6,//unique integer
            'item_number': 1237,//Integer
            'simple_description': "白色的杯子",//String
            'complex_description': " 这是一件精致而又简洁的容器，其外观充满了纯洁和优雅的特质。这个杯子的整体构造似乎是由无瑕的陶瓷或瓷器制成。杯子的外表线条流畅，充满了现代感，但同时也带有一些传统的元素。",//String
            'price': 235,//Number
            'link': "https://www.exxple.com",//String
            'image_src': 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cup_and_Saucer_LACMA_47.35.6a-b_%281_of_3%29.jpg'

        }
            ,

        {


            'unique_id': 7,//unique integer
            'item_number': 1237,//Integer
            'simple_description': "白色的杯子",//String
            'complex_description': " 这是一件精致而又简洁的容器，其外观充满了纯洁和优雅的特质。这个杯子的整体构造似乎是由无瑕的陶瓷或瓷器制成。杯子的外表线条流畅，充满了现代感，但同时也带有一些传统的元素。",//String
            'price': 235,//Number
            'link': "https://www.exxple.com",//String
            'image_src': 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cup_and_Saucer_LACMA_47.35.6a-b_%281_of_3%29.jpg'

        }
            ,

        {


            'unique_id': 8,//unique integer
            'item_number': 1237,//Integer
            'simple_description': "白色的杯子",//String
            'complex_description': " 这是一件精致而又简洁的容器，其外观充满了纯洁和优雅的特质。这个杯子的整体构造似乎是由无瑕的陶瓷或瓷器制成。杯子的外表线条流畅，充满了现代感，但同时也带有一些传统的元素。",//String
            'price': 235,//Number
            'link': "https://www.exxple.com",//String
            'image_src': 'https://upload.wikimedia.org/wikipedia/commons/d/da/Cup_and_Saucer_LACMA_47.35.6a-b_%281_of_3%29.jpg'

        }



        ]
        this.currentIndex = -1;

    }

    componentDidMount() {

        const inti = this.array[this.state.index]

        this.setState({

            top_length: this.gift_list.length * 11.25
        })

        this.interval = setInterval(() => {

            this.setState({

                placeholder: inti,

                index: (this.state.index + 1) % this.array.length

            })

        }, 2000)


       

    }

    componentWillUnmount() {
        // 在组件卸载前清除定时器
        clearInterval(this.interval);
    }






    render() {
        const { Header, Content, Footer } = Layout;



        return (
            <div style={{ position: 'relative' }}>
                <Layout style={{ border: "1px solid var(--semi-color-border)" }}>
                    <Header style={{
                        left: '264px'

                    }}>
                        <div>
                            <Nav mode="horizontal" defaultSelectedKeys={['Home']}>


                                <Nav.Footer>

                                    <Button
                                        theme="borderless"
                                        icon={<IconBell size="large" />}
                                        style={styles.Button}
                                    />
                                    <Button
                                        theme="borderless"
                                        icon={<IconHelpCircle size="large" />}
                                        style={styles.Button}
                                    />

                                    {/* 头像 */}
                                    <Dropdown
                                        position="bottomRight"
                                        render={
                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    <span>详情</span>
                                                </Dropdown.Item>
                                                <Dropdown.Item>退出</Dropdown.Item>
                                            </Dropdown.Menu>
                                        }
                                        style={{ width: "100px" }}
                                    >
                                        <Avatar size="small" color='light-blue' style={{ margin: 4 }}>XZ</Avatar>

                                    </Dropdown>
                                </Nav.Footer>
                            </Nav>
                        </div>
                    </Header>

                    <Nav
                        bodyStyle={{ height: "1030px", marginTop: '25px' }}


                    >

                        <Nav.Sub itemKey={'yesterday'} text="昨天" >
                            {
                                this.history_record_yesterday.map((value) => {
                                    //必须要有返回值
                                    return (
                                        <Nav.Item itemKey={value.item_key} text={value.tect} />
                                    )
                                })
                            }
                        </Nav.Sub>

                        <Nav.Sub itemKey={'7days'} text="7天前" >
                            <Nav.Item itemKey={'notice'} text={'任务设置'} />
                            <Nav.Item itemKey={'query'} text={'任务查询'} />
                            <Nav.Item itemKey={'info'} text={'信息录入'} />
                        </Nav.Sub>
                        <Nav.Sub itemKey={'1month'} text="1月前" >
                            <Nav.Item itemKey={'active'} text={'活跃用户'} />
                            <Nav.Item itemKey={'negative'} text={'非活跃用户'} />
                        </Nav.Sub>
                        <Nav.Sub itemKey={'eailer'} text="更早" >
                            <Nav.Item itemKey={'active'} text={'活跃用户'} />
                            <Nav.Item it-emKey={'negative'} text={'非活跃用户'} />
                        </Nav.Sub>
                        <Nav.Footer collapseButton={true} />
                    </Nav>

                    <Layout>
                        <Content style={{
                            position: 'absolute',
                            left: '18%',
                            top: '10%'
                        }}>


                            <span><h1 style={{ fontWeight: '600', color: 'black', textAlign: 'center', left: '240%' }}>你好，这是我给你推荐的礼物</h1></span>

                            {/* <IconBytedanceLogo style={{ fontWeight: '600', color: '#DADAE4', textAlign: 'center', position: 'absolute', left: '265%', fontSize:'320px' }} /> */}

                            <div className="middle_box_father">


                                {
                                    this.gift_list.map((value, index) => {

                                        return (

                                            <React.Fragment>

                                                {/* //每一个盒子 */}
                                                <div className="middle_box">
                                                    <div className="middle_box_top_layer">
                                                        <a
                                                            className="middle_box_image_content"
                                                            style={{ backgroundImage: `url(${value.image_src})`, backgroundSize: 'contain' }}
                                                        ></a>
                                                    </div>

                                                    <Footer style={{ position: 'relative', top: '64%' }}>
                                                        {/* //上层盒子套描述·*/}
                                                        <div className="down_box_description">
                                                            <span style={{ marginLeft: '16px' }}>描述:{`${value.simple_description}`}</span>
                                                        </div>

                                                        {/* //中层盒子套了；链接 */}
                                                        <div className="middle_box_link">
                                                            <span style={{ marginLeft: '16px' }}>
                                                                链接: <a style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>{value.link}</a>
                                                            </span>
                                                        </div>

                                                        {/* //最下层，套编号和价格·*/}
                                                        <div className="middle_box_bottom">
                                                            <span style={{ marginLeft: '16px' }}>编号:{`${value.unique_id}`}</span>
                                                            {/* 上下为0.左右为16px·*/}
                                                            <span style={{ margin: '0 16px' }}>价格:{`${value.price}`}</span>
                                                        </div>



                                                        <Link
                                                            to={{
                                                                pathname: `/next/${this.gift_list[index].unique_id}`,



                                                            }}

                                                            state={{ name: this.gift_list.filter(item => item.unique_id === this.gift_list[index].unique_id)[0] }}

                                                        >

                                                            <Button
                                                                id={this.gift_list[index].item_number}
                                                                style={{ position: 'relative', left: '41%', marginTop: '30px' }}
                                                            // onClick={() => { this.handleclick(this.gift_list[index].unique_id) }}
                                                            >按钮
                                                            </Button>

                                                        </Link>


                                                    </Footer>



                                                </div>

                                            </React.Fragment>


                                        )

                                    })
                                }



                                <Input prefix={
                                    <div style={{ display: "flex", alignItems: "center" }}>

                                        <span style={{ marginLeft: "8px", width: '80px', color: '#808080' }}>问一下我</span>
                                    </div>
                                }

                                    suffix={<Button icon={<IconChevronRight />} aria-label="搜索" style={{ backgroundColor: 'var(--semi-color-fill-0)', height: '70px' }}></Button>}

                                    className="big_box_input"
                                    style={{ width: 1200, borderRadius: '0.75em', height: '70px', left: '9%', top: `${this.state.top_length}px` }}

                                    //更改为轮换
                                    placeholder={`例如：${this.array[this.state.index]}`}
                                    showClear></Input>


                            </div>





                        </Content>



                    </Layout>


                </Layout>
            </div >
        );
    }
}

const styles = {

    Logo: {

        width: '60px',
        height: '36px',
        fontSize: 36


    },

    Span: {

        color: 'var(--semi-color-text-0)',
        fontWeight: '600',
        marginLeft: '-20px'

    },

    Button: {


        color: 'var(--semi-color-text-2)',
        marginRight: '12px'
    },

    Input_suffix: {


        display: "flex",

        alignItems: "center",

        marginLeft: "8px"
    },

    Image: {

        color: "black",
        width: '100',
        height: '100'
    },

    A_Label: {

        display: 'float',

        textDecoration: 'none',

        marginLeft: '20px',

        color: 'black',

        fontSize: '18px'


    },

    Input: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }


}


export default withRouter(Component1)

