'use client';
import React, { useRef } from 'react';
import * as S from './style.css';
import { ArrowBlack, ArrowMain } from '@/_assets/icon';
import { Attendance, AttendanceShadow, BillListShadow, PromiseShadow } from '@/_assets/mainpageimg';
import MyBeeImg from '../_assets/mainpageimg/imgs/whereismybee.png';
import BeeList from '../_assets/mainpageimg/imgs/beelist.png';
import LawDetail from '../_assets/mainpageimg/imgs/lawdetail.png';
import LawList from '../_assets/mainpageimg/imgs/lawlist.png';
import BillPieChart from '../_assets/mainpageimg/imgs/billpiechart.png';
import Summary from '../_assets/mainpageimg/imgs/summary.png';
import Top3 from '../_assets/mainpageimg/imgs/top3.png';
import IconCollection from '../_assets/mainpageimg/imgs/iconCollection.png';
import Pie from '../_assets/mainpageimg/imgs/Pie.png';
import Bill from '../_assets/mainpageimg/imgs/Bill.png';
import IconCollection2 from '../_assets/mainpageimg/imgs/iconCollection2.png';

import { motion } from 'framer-motion';
import Test from '@/_components/LoadingTest/test';
import TextTest from '@/_components/LoadingTest/TextTest/texttest';
import TextSpinnerLoader from '@/_components/LoadingTest/TextSpinner/TextSpinner';
import DotLoading from '@/_components/Bill/Subs/DotLoading/DotLoading';
import Slogan from './Subs/Slogan';
import { width } from '@/_components/Modal/Modal.css';
import Image from 'next/image';
import Link from 'next/link';

export default function MainTest() {
  const scrollToRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={S.mainWrapper}>
        <section>
          {/* <div className={S.test} id="1">
            <TextTest contents=""></TextTest>
          </div> */}

          <div className={S.solganSection}>
            <div className={S.solganWrapper}>
              {/* <p className={S.solganFont}>
                국회의 약속부터 실천까지
                <br />한 꿀통에 담다
              </p> */}
              <Slogan></Slogan>
            </div>

            <div className={S.arrow} onClick={scrollToTop}>
              <button style={{ transform: 'rotate(180deg)' }}>
                <ArrowMain></ArrowMain>
              </button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.7 },
            }}
          >
            <div className={S.solganSubWrapper} ref={scrollToRef}>
              <p className={S.solganSubFont}>
                국가와 지역구를 위해 열심히 일한다는 여의도 꿀벌들,
                <br />
                여러분들은 얼마나 잘 알고 계신가요
                <br />
                이들의 약속과 실천을 여의도꿀통에서 확인해보세요
              </p>
            </div>
          </motion.div>
        </section>

        <section>
          <div className={S.assembleWrapper}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.7 },
              }}
            >
              <div className={S.assembleSub}>
                <p className={S.assembleMainFont}>
                  공약, 출석률
                  <br /> 법안발의현황을
                  <br /> 한눈에
                </p>
                {/* <div style={{ display: 'flex', flexDirection: 'row', width: '70%' }}>
                  

                  <motion.div whileHover={{ scale: 1.1 }}>
                    <img src={Pie.src} width="90%" className={S.shadow1}></img>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <img src={Bill.src} width="90%" className={S.shadow1}></img>
                  </motion.div>
                </div> */}
                <div>
                  <AttendanceShadow></AttendanceShadow>
                  <AttendanceShadow></AttendanceShadow>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.7 },
              }}
            >
              <div className={S.assembleSub}>
                {/* <img src={IconCollection.src} width="45%"></img> */}
                <div className={S.shadowhover}>
                  <img src={IconCollection.src} width="100%" alt="위원회들"></img>
                </div>

                <p className={S.assembleMainFont}>
                  17개 위원회 분야별로
                  <br /> 확인할 수 있어요
                </p>
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.7 },
                }}
              >
                <p className={S.assembleMainFont} style={{ textAlign: 'center' }}>
                  우리 지역 꿀벌은 열심히 하고 있을까요?
                </p>

                <div>
                  <img src={BeeList.src} width="100%"></img>
                </div>
                <Link href={`assemblies/`}>
                  <button style={{ justifyContent: 'center', alignItems: 'center', width: '100%', display: 'flex' }}>
                    <div className={S.btn}>확인하기</div>
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
        <section>
          <div className={S.billWrapper}>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.7 },
              }}
            >
              <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <span className={S.assembleMainFont}>21대 국회에서 발의된 법안의 수 </span>
                <span className={S.billBoldFont}> {'\u00A0'}27,123</span>
                <span className={S.billBoldFont}>개</span>
              </div>
              <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', marginBottom: 160 }}>
                <p className={S.billFont}>이 가운데 통과된 법안은 몇개일까요?</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.7 },
              }}
            >
              <div className={S.assembleSub} style={{ margin: '35% 0px' }}>
                <div>
                  <p className={S.assembleMainFont}>
                    분야별 법안 <br />
                    추진현황을 확인하고
                  </p>
                </div>

                {/* <img className={S.testclay2} src={LawList.src} width="50%"></img> */}
                <div style={{ width: '60%', display: 'flex', flexDirection: 'row', gap: '20px' }}>
                  <img className={S.shadow1} src={BillPieChart.src} width={'50%'}></img>
                  <img className={S.shadow1} src={Top3.src} width={'50%'}></img>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.7 },
              }}
            >
              <div className={S.assembleSub} style={{ marginTop: 50 }}>
                <img
                  className={S.shadow1}
                  src={Summary.src}
                  width="50%"
                  style={{ borderRadius: '12px', padding: 10 }}
                ></img>
                <div>
                  <p className={S.assembleMainFont}>
                    어려운 법률내용은
                    <br />
                    여의도 꿀통이 요약해줘요
                  </p>
                </div>
              </div>
            </motion.div>

            {/* <div>
              <img className={S.testclay2} src={LawList.src} width="50%"></img>
            </div> */}
          </div>
        </section>
      </div>
    </>
  );
}
