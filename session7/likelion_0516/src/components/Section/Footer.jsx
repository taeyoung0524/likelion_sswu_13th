import React from 'react'
import Logo from '../../assets/img/likelion_logo.svg'
import Instar from '../../assets/img/instar.svg'
import Youtube from '../../assets/img/youtube.svg'
import Branch from '../../assets/img/branch.svg'
import Download from '../../assets/img/download.svg'
import Share from '../../assets/img/share.svg'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="left">
                <img src={Logo}/>
                <p>(주)멋쟁이사자처럼 | 대표이사 나성영<br/>
                    서울특별시 종로구 종로3길 17 D타워, 16-17층<br/>
                    사업자 번호 : 264-88-01106<br/>
                    통신판매업 신고번호 : 2022-서울종로-1534<br/>
                    문의처 contact@likelion.net
                </p>
                <div>
                    <div>
                        <img className="instar" src={Instar}/>
                    </div>
                    <div>
                        <img className="youtube" src={Youtube}/>
                    </div>
                    <div>
                        <img className="branch" src={Branch}/>
                    </div>
                </div>

            </div>
            <div className="right">
                <div>
                    <h3>FAMILY BRAND</h3>
                    <p>TECHIT</p>
                    <p>SYLTARE</p>
                    <p>MODERN LION</p>
                    <p>QUADHASH</p>
                </div>
                <div>
                    <h3>POLICY</h3>
                    <p>이용약관</p>
                    <p>개인정보처리방침</p>
                    <div>
                        <p>Nonprofit Report</p>
                        <img src={Download}/>
                    </div>
                    <div>
                        <p>국민권익위원회</p>
                        <img src={Share}/>
                    </div>
                </div>
                <div>
                    <h3>RESOURCE</h3>
                    <div>
                        <p>로고 가이드라인</p>
                        <img src={Download}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer