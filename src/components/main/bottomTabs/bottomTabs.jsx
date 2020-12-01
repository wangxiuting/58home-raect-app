import { render } from '@testing-library/react'
import { Link, withRouter } from 'react-router-dom';
import React, { Component } from 'react'
import './bottom.css';
import './bottom.less';
class Bottom extends Component {
    state = {
        current: 0
    }
    render() {
        return (
            <div>
                <ul className='Botton-warper'>
                    <li className='Botton-warper-warp'>
                        <Link to='/main'>
                            <div className="icon" style={{ backgroundPosition: "0rem -.833rem" }}></div>
                            <div className="planet" style={{ color: "#ec564b" }}>
                                首页
                        </div>
                        </Link>
                    </li>
                    <li className='Botton-warper-warp'>
                        <Link to='AllServer'>
                            <div className="icon" style={{ backgroundPosition: "-1.685rem -.833rem" }}></div>
                            <div className="planet" style={{ color: "#ec564b" }}>
                                全部服务
                        </div>
                        </Link>
                    </li>
                    <li className='Botton-warper-warp'>
                        <Link to='/home/news'>
                            <div className="icon" style={{ backgroundPosition: "-2.528rem -.833rem" }}></div>
                            <div className="planet" style={{ color: "#ec564b" }}>
                                消息
                        </div>
                        </Link>
                    </li>
                    <li className='Botton-warper-warp'>
                        <Link to='/home/mine'>
                            <div className="icon" style={{ backgroundPosition: "-3.333rem -.833rem" }}></div>
                            <div className="planet" style={{ color: "#ec564b" }}>
                                我的
                        </div>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Bottom