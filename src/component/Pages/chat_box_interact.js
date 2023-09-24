import React, { useEffect, useState, useRef } from 'react';
import OpenAI from 'openai';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
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

import './CSS/chat_box1.css'



function Chat_box_interact() {

    const { Header, Content, Footer } = Layout;

    //第二个参数代表设置属性
    const [inputValue, setInputValue] = useState('');
    //message是chatgpt的回应
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState(''); // 存储用户输入
    const [displayText, setDisplayText] = useState('');
    const [placeholderInterval, setPlaceholderInterval] = useState(null);
    const [buttondisabled, setbuttondisabled] = useState(false)
    const [buttonindex,setbuttonindex]=useState('点击继续生成')

    //初始状态设置为 ''
    //将placeholder的进行展示
    const array = ["送给妈妈的母亲节礼物推荐", "送给爸爸的父亲节礼物推荐", "送给长辈的好礼推荐", "送给好朋友的礼物推荐"];
    const [index, setIndex] = useState(0)
    const [placeholder, setPlaceholder] = useState(array[index])
    const inputRef = useRef(null);
    const location = useLocation();

    //用户从上个页面传过来的数据
    //console.log(location.state.chat_value)


    //模拟后端传入的数据
    const gift_list = [{


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




    useEffect(() => {


        //如果要异步操作，必须用useEffect来包裹
        async function fetchMessage() {
            const openai = new OpenAI({
                apiKey: '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',
                dangerouslyAllowBrowser: true,
            });
            //await 是一个用于等待异步操作完成的关键字，通常与 async 函数一起使用。它只能在 async 函数内部使用。我们需要等待chatgpt返回信息，来进一步操作
            const chatCompletion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [...message, { role: 'user', content: location.state.chat_value }],
            });

            // setMessage(chatCompletion.choices[0].message.content);

            setMessage(chatCompletion.choices[0].message.content);


        }

        fetchMessage();




    }, []); // Empty dependency array to run the effect only once


    function handleClick() {

        //需要将展示的消息置为空
        setMessage('');
        setDisplayText('');

        // Get the input value from the ref
        const inputValueFromRef = inputRef.current.value;

        // Update the input value immediately
        setInputValue(inputValueFromRef);

        // Create a new message with the input value
        const userMessage = { role: 'user', content: inputValueFromRef };

        // Update the message state with the new user message
        setMessages([...messages, userMessage]);

        // Call the OpenAI API with the new message
        async function fetchMessage() {
            const openai = new OpenAI({
                apiKey: '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',
                dangerouslyAllowBrowser: true,
            });

            const chatCompletion = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [...messages, userMessage], // Use the updated messages array
            });

            setMessage(chatCompletion.choices[0].message.content);

            //将按钮停止禁用，并显示合适的文字
            setbuttondisabled(false)
            setbuttonindex('点击继续生成')
             
        }

        fetchMessage();
        

     
    }




    useEffect(() => {


        let index = 0;
        if (message != null) {
       
            setPlaceholderInterval(setInterval(() => {
                if (index < message.length) {
                    setDisplayText(prevText => prevText + message.charAt(index));
                    index++;
                } else {
                    clearInterval(placeholderInterval); // 停止逐字打印
                    //setbuttondisabled(true)
                }
            }, 100)); // 每个字符之间的延迟时间（以毫秒为单位）

            return () => {
                clearInterval(placeholderInterval); // 组件卸载时清除定时器
            };



        }

        //第二个参数代表渲染的次数,每当length改变即发上一次
    }, [message.length])


    const handleClick2 = () => {

        console.log('handle2' + placeholderInterval)
        clearInterval(placeholderInterval)
        

    };




    const handleClick3 = () => {
    
          //setbuttondisabled(false)
    
        let index = 0;

    
        setPlaceholderInterval(setInterval(() => {
            if (index < message.length) {
                setDisplayText(prevText => prevText + message.charAt(index));
                index++;
                //将按钮禁用，并显示合适的文字
                setbuttondisabled(true);
                setbuttonindex('您只能点击一次')
            } else {
                clearInterval(placeholderInterval); // 停止逐字打印
               
            }
        }, 100)); // 每个字符之间的延迟时间（以毫秒为单位）
    
        
          console.log(message)
        
    };



    const handleSubmit = (event) => {
        event.preventDefault(); // 可选，如果需要阻止默认行为的话

        if(event.which==13){



            console.log(event)

        }
      
       
      };
      










    const history_record_yesterday = [{

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
    }]
    return (
        <div>
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
                                history_record_yesterday.map((value) => {
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

                            {/* <Image src={require('./bytedance.ico')} style={{ fontWeight: '600', textAlign: 'center', position: 'absolute', left: '265%', fontSize: '320px' }} /> */}


                            {/* 用于存放机器人和用户的输入 */}
                            <div className="big_box1">



                                {/* 人类 */}

                                {location.state.chat_value && !inputValue && (
                                    <div className='user_input'>
                                        <span>user：</span><span>{location.state.chat_value}</span>
                                    </div>
                                )}




                                {/* Display the input made on this page */}
                                <div className='user_input'>
                                    <span>user:  </span>  {inputValue}

                                </div>


                                {/* 如果机器的生成为空 */}


                                {
                                    !message ? (
                                        <div className='robot_output'>
                                            <span>机器人：</span> <span>文本正在生成中，请稍后....</span>
                                        </div>
                                    ) : (
                                        <div className='robot_output'>
                                            <span>机器人：</span> <span>{displayText}</span>
                                        </div>
                                    )
                                }


                            </div>

                            <div style={{ position: 'absolute', top: '1490%', width: '300px', left: '300%', fontWeight: '800' }}><span >以下是为您推荐的礼物：</span></div>
                            <Button style={{ position: 'absolute', left: '443%', top: '1480%' }}

                                onClick={() => { handleClick2() }}

                            >点击暂停生成</Button>

                            <Button
                                style={{
                                    position: 'absolute',
                                    left: '543%',
                                    top: '1480%',
                                }}
                                disabled={buttondisabled}
                                className={buttondisabled? 'disabled-button' : ''}
                                onClick={() => { handleClick3() }}
                            >
                                {buttonindex}
                            </Button>



                            {
                                message ? (


                                    <div className='external_box'>

                                        {

                                            gift_list.map((value, index) => {

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
                                                                        pathname: `/next/${gift_list[index].unique_id}`,



                                                                    }}

                                                                    state={{ name: gift_list.filter(item => item.unique_id === gift_list[index].unique_id)[0] }}

                                                                >

                                                                    <Button
                                                                        id={gift_list[index].item_number}
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







                                    </div>




                                ) : (

                                    <div className='external_box'>
                                        <span>您的礼物正在准备中....</span>
                                    </div>


                                )
                            }



                            <Form style={{ position: 'absolute' }} >

                                <Form.Input prefix={
                                    <div style={{ display: "flex", alignItems: "center" }}>

                                        <span style={{ marginLeft: "8px", width: '80px', color: '#808080' }}>问一下我</span>
                                    </div>
                                }

                                    suffix={


                                        <Button icon={<IconChevronRight />} aria-label="搜索" style={{ backgroundColor: 'var(--semi-color-fill-0)', height: '70px' }}

                                            onClick={handleClick}

                                        ></Button>}
                                    className="big_box_input"
                                    field="chat_value"
                                    label="chat_value"
                                    noLabel={true}
                                    style={{ position: 'absolute', width: 1200, borderRadius: '0.75em', height: '70px', top: '2801%', marginLeft: '70px' }}
                                    placeholder={`例如：${placeholder}`}
                                    value={inputValue}
                                    ref={inputRef}
                                    onKeyPress={(e)=>{handleSubmit(e)}}
                                    showClear></Form.Input>

                            </Form>





                        </Content>



                    </Layout>


                </Layout>
            </div>
        </div >
    );


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


export default Chat_box_interact;