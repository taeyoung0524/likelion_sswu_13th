import React from 'react'
import Img01 from '../../assets/img/section03_1.png'
import Img02 from '../../assets/img/section03_2.png'
import Img03 from '../../assets/img/section03_3.png'

const Section03 = () => {
    return (
        <div className='Section03_wrap'>
            <div>
                <img src={Img01} alt="section03_1"/>
                <div>
                    <p className="tage">VISION</p>
                    <h2>IT 교육 기회를 제공하여<br/> 꿈꾸던 가능성을 열어준다.</h2>
                    <p>Open up the possibility of dreaming by providing IT education opportunities.</p>
                </div>
            </div>
            <div>
                <div className="right">
                    <p className="tage" >VISION</p>
                    <h2>IT 기술로 IT 교육의 <br/>문제를 <br/>해결한다.</h2>
                    <p>Solve IT education problems using IT technology.</p>
                </div>
                <img src={Img02} alt="section03_2"/>
            </div>
            <div>
                <img src={Img03} alt="section03_3"/>
                <div>
                    <p className="tage">VISION</p>
                    <h2>지속 성장이 가능한 <br/>IT 커뮤니티를 구축한다.</h2>
                    <p>Establish an IT community that can sustain growth.</p>
                </div>
            </div>
        </div>
    )
}

export default Section03