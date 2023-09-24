import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./CSS/chat_box.css"
import "./CSS/normalize.css";
import "./CSS/main.css";
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
import bytedance from './bytedance.ico'
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
    IconBytedanceLogo

} from "@douyinfe/semi-icons";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Component_front extends Component {
    constructor(props) {
        super(props);

        this.state = {

            placeholder: "送给孩子的儿童节礼物推荐",

            chatValue: ''
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
        this.currentIndex = -1;

    }

    componentDidMount() {


        setInterval(() => {

            const next_index = (this.currentIndex + 1) % this.array.length;

            this.setState({

                placeholder: this.array[next_index]
            })

            this.currentIndex = next_index

        }, 3000)


    }

    componentWillUnmount() {
        // 在组件卸载前清除定时器
        clearInterval(this.interval);
    }


    handleChange = (values) => {

        this.setState({ chatValue: values });

        console.log(values)
    };







    render() {
        const { Header, Content, Footer } = Layout;


        return (
            <div style={{ position: 'relative' }}>
                <Layout style={{ border: "1px solid var(--semi-color-border)" }}>
                    <Header style={{
                        width: '1664px',
                        position: 'fixed',
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
                        bodyStyle={{ height: "830px", marginTop: '25px' }}


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
                            <Nav.Item itemKey={'negative'} text={'非活跃用户'} />
                        </Nav.Sub>
                        <Nav.Footer collapseButton={true} />
                    </Nav>

                    <Layout>
                        <Content style={{
                            position: 'absolute',
                            left: '18%',
                            top: '10%'
                        }}>


                            <span><h1 style={{ fontWeight: '600', color: '#DADAE4', textAlign: 'center', position: 'relative', left: '291%' }}>欢迎来到礼物推荐系统</h1></span>

                            {/* <IconBytedanceLogo style={{ fontWeight: '600', color: '#DADAE4', textAlign: 'center', position: 'absolute', left: '265%', fontSize:'320px' }} /> */}

                            <Image src={require('./bytedance.ico')} style={{ fontWeight: '600', textAlign: 'center', position: 'absolute', left: '265%', fontSize: '320px' }} />

                            <div className="big_box">

                                <button className="big_box_btn">送给谁?<IconChevronRight className="big_box_icon" /></button>

                                <button className="big_box_btn" style={{ right: 0 }}>性别<IconChevronRight className="big_box_icon" /></button>

                                <button className="big_box_btn" style={{ left: 0, bottom: 0 }}>建议<IconChevronRight className="big_box_icon" /></button>

                                <button className="big_box_btn" style={{ right: 0, bottom: 0 }}>特点<IconChevronRight className="big_box_icon" /></button>

                            </div>

                            <Form action="/next" method="POST" style={{ position: 'absolute' }} onSubmit={this.handleSubmit}>

                                <Form.Input prefix={
                                    <div style={{ display: "flex", alignItems: "center" }}>

                                        <span style={{ marginLeft: "8px", width: '80px', color: '#808080' }}>问一下我</span>
                                    </div>
                                }

                                    suffix={

                                        <Link

                                            to={{
                                                pathname: `/chat`,

                                            }}

                                            state={{ chat_value: this.state.chatValue }}

                                        >

                                            <Button icon={<IconChevronRight />} aria-label="搜索" style={{ backgroundColor: 'var(--semi-color-fill-0)', height: '70px' }}

                                            ></Button>  </Link>}
                                    className="big_box_input"
                                    field="chat_value"
                                    label="chat_value"
                                    noLabel={true}
                                    style={{ position: 'absolute', width: 1200, borderRadius: '0.75em', height: '70px', top: '2661%', marginLeft: '70px' }}
                                    placeholder={`例如：${this.state.placeholder}`}
                                    value={this.state.chatValue}
                                    onChange={(values) => { this.handleChange(values) }}

                                    showClear></Form.Input>
                                {/* <input type="button" name="save" value="保存" onClick={}/>    */}
                            </Form>



                        </Content>



                    </Layout>


                </Layout>
            </div>
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



export default Component_front

