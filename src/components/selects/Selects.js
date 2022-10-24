import React from 'react'
import './SelectsStyles.css'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import Maldives3 from '../../assets/maldives3.jpg'
import KeyWest from '../../assets/keywest.jpg'

import Taipei from '../../assets/taipei-101.jpg'
import Taichung from '../../assets/taichung.jpg'
import Taitung from '../../assets/taitung.jpg'
import Tainan from '../../assets/台南_OG圖_shelly.jpg'
import Hualien from '../../assets/hualien.jpg'
import Kaohsiung from '../../assets/koahsuing.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg={Taipei} text='Taipei' />
                <SelectsImg bgImg={Taichung} text='Taichung' />
                <SelectsImg bgImg={Taitung} text='Taitung' />
                <SelectsImg bgImg={Tainan} text='Tainan' />
                <SelectsImg bgImg={Hualien} text='Hualien' />
                <SelectsImg bgImg={Kaohsiung} text='Kaohsiung' />
            </div>

        </div>
    )
}

export default Selects
