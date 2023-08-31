"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import classNames from "classnames";
import css from "./main.module.scss";
import ReactPlayer from 'react-player';
import dynamic from 'next/dynamic';

//mui
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import { ThemeProvider, createTheme } from "@mui/material";

//material-UI사용자테마 설정
const theme = createTheme({
  //컴포넌트 컬러
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#222",
        },
      },
    },
  },
  //기본 컬러, 포커싱됐을때의 색상 정의
  palette: {
    primary: {
      main: "#222",
    },
  },
  //font 정의
  typography: {
    fontSize: 14,
  },
});

/**
 * datePicker
 */
interface DatePickerProps {
  labelStart: string;
  labelEnd: string;
  dayValue: Dayjs | null; //시작날짜
  //dayEndValue: Dayjs | null; //종료날짜
  setDayValue: (date: Dayjs | null) => void;
  setDayEndValue: (date: Dayjs | null) => void;
  minDate: Dayjs | null;
}

function BasicDatePicker({
  labelStart,
  labelEnd,
  dayValue,
  //dayEndValue,
  setDayValue,
  setDayEndValue, //종료날짜
}: DatePickerProps) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          format="YYYY/MM/DD"
          className={css.datePicker}
          label={labelStart}
          defaultValue={dayValue}
          minDate = {dayValue}
        />
        <DatePicker
          format="YYYY/MM/DD"
          className={css.datePicker}
          label={labelEnd}
          defaultValue={dayValue}
          minDate = {dayValue}
          onChange={(dayValue) => setDayEndValue(dayValue)}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

/**
 * TimePicker
 */
interface TimePickerProps {
  timeValue: Dayjs | null;
  timeLabelStart: string;
  setTimeValue: (date: Dayjs | null) => void;
}

function TimeDatePicker({ timeValue, timeLabelStart, setTimeValue }: TimePickerProps) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          className={classNames(css.datePicker, css.timeScroll)}
          label={timeLabelStart}
          defaultValue={timeValue}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}

/**
 * reactPlayer시도중
 */
const DynamicReactPlayer = dynamic(
  () => import('react-player'),
  { ssr: false }
);
function VideoPlayer() {
  return (
    <DynamicReactPlayer
      url={'imgs/videos/backgroundVideo.mp4'}
      width={'100%'}
      height={'100%'}
      playing={true}
      muted={true}
      controls={false}
      loop={true}
      className = {css.videoWrap}
    />
  )
}


export default function Home() {
  const [dayValue, setDayValue] = useState<Dayjs | null>(null);
  const [dayEndValue, setDayEndValue] = useState<Dayjs | null>(null);
  const [timeValue, setTimeValue] = useState<Dayjs | null>(null);

  useEffect(() => {
    const now = dayjs();
    setDayValue(now);
    setDayEndValue(now);
  }, []);

  
  return (
    <>
      <div className={css.mainWrap}>
        <main className={classNames(css.main, "contentWrap")}>
          {/* header */}
          <header
            className={classNames(css.header, "flex", "items-center", "justify-between")}>
            <h1 className={css.logo}>PET LOGO</h1>
            <button className={css.roundedBtn} type="button">
              LOGIN
            </button>
          </header>

          {/* 검색영역란 */}
          <article className={classNames(css.introHeader, "text-center")}>
            <Image src={"/imgs/mainLogo.png"} width={60} height={60} alt="개놀자로고"/>
            <h2 className="md:text-3xl text-2xl font-bold mb-[7px]">반려동물 케어의 모든것</h2>
            <h3 className="mb-[40px]">우리 아이에게 꼭 맞는 케어 서비스를 이용해 보세요</h3>

            <div className={css.introBody}>
              <form action="e.preventDefault()">
                <fieldset className={classNames(css.fieldset, "flex", "items-center")}>
                  <legend className="a11yHidden">지역 입력</legend>
                  <label
                    htmlFor="location"
                    className={classNames(css.labelTxt, "flex-none")}
                  >
                    위치
                  </label>
                  <input
                    id="location"
                    className={css.inputArea}
                    type="text"
                    placeholder="지역을 입력해주세요"
                  />
                </fieldset>

                <fieldset className={classNames(css.fieldset, "flex", "items-center")}>
                  <legend className="a11yHidden">날짜 입력</legend>
                  <label
                    htmlFor="date"
                    className={classNames(css.labelTxt, "flex-none")}
                  >
                    예약
                  </label>
                  <BasicDatePicker
                    labelStart={"시작날짜"}
                    labelEnd={"종료날짜"}
                    minDate={dayValue ? dayValue.startOf('day') : null}
                    dayValue={dayValue}
                    setDayEndValue={setDayEndValue}
                    setDayValue={setDayValue}
                  />
                  <TimeDatePicker
                    timeValue= {timeValue}
                    timeLabelStart={"예약시간"}
                    setTimeValue={setTimeValue}
                  />
                </fieldset>

                <fieldset className={classNames(css.fieldset, "flex", "items-center")}>
                  <legend className="a11yHidden">서비스 체크</legend>
                  <label className={classNames(css.labelTxt, "flex-none")}>
                    서비스
                  </label>
                  <div className={css.serviceWrap}>
                    <div className={css.serviceType}>
                      <input
                        className="a11yHidden"
                        type="checkbox"
                        name=""
                        id="hoteling"
                      />
                      <label htmlFor="hoteling">호텔링</label>
                    </div>
                    <div className={css.serviceType}>
                      <input
                        className="a11yHidden"
                        type="checkbox"
                        name=""
                        id="playRoom"
                      />
                      <label htmlFor="playRoom">놀이방</label>
                    </div>
                    <div className={css.serviceType}>
                      <input
                        className="a11yHidden"
                        type="checkbox"
                        name=""
                        id="both"
                      />
                      <label htmlFor="both">호텔링 + 놀이방</label>
                    </div>
                  </div>
                </fieldset>

                <fieldset className={classNames(css.fieldset, "flex", "items-center")}>
                  <label
                    htmlFor="weight"
                    className={classNames(css.labelTxt, "flex-none")}
                  >
                    몸무게
                  </label>
                  <select id="weight" name="몸무게">
                    <option value="전체" defaultValue='전체'>
                      전체
                    </option>
                    <option value="1kg~5kg">1kg이상~5kg미만</option>
                    <option value="5kg~10kg">5kg이상~10kg미만</option>
                    <option value="10kg~15kg">10kg이상~15kg미만</option>
                  </select>
                </fieldset>
              </form>
            </div>
            <button type="button" className={css.searchBtn}>
              검색
            </button>
          </article>
        </main>

        <div className={css.playerWrapper}>
          <VideoPlayer/>
        </div>

        {/* <div className={css.bottomBar}>
          <span className="a11yHidden">하단 막대바</span>
        </div>
        <div className={css.dogImg}>
          <Image src={"/imgs/daengdaenge.png"} width={500} height={500} alt="강아지이미지"/>
        </div> */}
      </div>
    </>
  );
}
