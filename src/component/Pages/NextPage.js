import React, { useState,useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import "./CSS/detailed_box.css"
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




function NextPage() {
  // 使用 useParams 钩子来获取 URL 中的参数
  const { Header, Content, Footer } = Layout;

  const location = useLocation();

 const array = ["送给妈妈的母亲节礼物推荐", "送给爸爸的父亲节礼物推荐", "送给长辈的好礼推荐", "送给好朋友的礼物推荐"];


  const [placeholder, setPlaceholder] = useState(array[0]);
  const [index, setIndex] = useState(0);


  //useEffect 在渲染时是异步执行，并且要等到浏览器将所有变化渲染到屏幕后才会被执行。
  useEffect(() => {
    const inti = array[index];
    const intervalId = setInterval(() => {
      setPlaceholder(inti);
      setIndex((prevIndex) => (prevIndex + 1) % array.length);
    }, 2000);

    // 在组件卸载时清除定时器
    return () => {
      clearInterval(intervalId);
    };

    // 使用空的依赖数组确保副作用仅在组件首次渲染时执行
  });

 

  
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
  },


  ]

  

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



            <span><h1 style={{ fontWeight: '600', color: 'black', textAlign: 'center', left: '12%', position: 'relative' }}>你好，这是关于礼物{`${location.state.name.unique_id}`}的详细描述</h1></span>
            {/* 最外面的大盒子 */}
            <div className='middle_box1'>
              {/* 照片 */}
              <div>
                <a
                  className="middle_box_image_content1"
                  style={{ backgroundImage: `url(${location.state.name.image_src})` , backgroundSize: 'contain'}}
                ></a>
              </div>

              {/* 详细描述 */}

              <div style={{ position: 'relative' }}>
                <span style={{ marginLeft: '52px', paddingLeft: '12px', paddingRight: '40px',position:'absolute',marginTop:'10px' }}>
                  <strong>描述：</strong>{`${location.state.name.complex_description}`}
                </span>
              </div>

              {/* //最下层，套编号和价格·*/}
              <div className="middle_box_bottom">

              <span style={{ marginLeft: '52px', paddingLeft: '12px', paddingRight: '40px',position:'absolute' ,marginTop:'60px',display:'flex'}}>
                  <strong>链接：</strong>{`${location.state.name.link}`}
                  <span style={{position:'relative',left:'154%'}}><strong>价格：</strong>{`${location.state.name.price}`}</span>
                </span>
              </div>


            </div>

            <Input prefix={
                                    <div style={{ display: "flex", alignItems: "center" }}>

                                        <span style={{ marginLeft: "8px", width: '80px', color: '#808080' }}>问一下我</span>
                                    </div>
                                }

                                    suffix={<Button icon={<IconChevronRight />} aria-label="搜索" style={{ backgroundColor: 'var(--semi-color-fill-0)', height: '70px' }}></Button>}

                                    className="big_box_input"
                                    style={{ width: 1200, borderRadius: '0.75em', height: '70px', left: '9%', top: `` }}

                                    //更改为轮换
                                    placeholder={placeholder}
                                    showClear></Input>


          </Content>
        </Layout>




      </Layout>
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
export default NextPage;
