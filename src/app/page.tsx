"use client"
import Image from "next/image";
import classNames from "classnames";
import css from "./main.module.scss";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { ThemeProvider, createTheme } from "@mui/material";

//material-UI사용자테마 설정
const theme = createTheme({
  palette : {
    primary: {
      main: '#222',
    },
  }
})


interface DatePickerProps {
  labelStart: string,
  labelEnd: string
}

function BasicDatePicker({labelStart, labelEnd}:DatePickerProps) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className={css.datePicker} label={labelStart} defaultValue={dayjs('2023-04-17')} />
        <DatePicker
          className={css.datePicker}
          label={labelEnd}
          defaultValue={dayjs('2023-04-17')}
          // value={value}
          // onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
    </ThemeProvider>
  )
}


export default function Home() {
  return (
    <>
      <div className={css.mainWrap}>
        <main className={classNames(css.main, "contentWrap")}>
          {/* header */}
          <header className={classNames(css.header,"flex","items-center","justify-between")}>
            <h1 className={css.logo}>PET LOGO</h1>
            <button className={css.roundedBtn} type="button">
              LOGIN
            </button>
          </header>

          {/* 검색영역란 */}
          <article className={classNames(css.introHeader, "text-center")}>
            <Image src={"/imgs/mainLogo.png"} width={60} height={60} alt="개놀자로고"/>
            <h2 className="text-3xl font-bold mb-[7px]">반려동물 케어의 모든것</h2>
            <h3 className="mb-[40px]">우리 아이에게 꼭 맞는 케어 서비스를 이용해 보세요</h3>

            <div className={css.introBody}>
              <form action="e.preventDefault()">
                <fieldset className={classNames(css.fieldset, "flex", "items-center")}>
                  <legend className="a11yHidden">지역 입력</legend>
                  <label htmlFor="location" className={classNames(css.labelTxt, "flex-none")}>위치</label>
                  <input
                    id="location"
                    className={css.inputArea}
                    type="text"
                    placeholder="지역을 입력해주세요"
                  />
                </fieldset>

                <fieldset className={classNames(css.fieldset, "flex", "items-center")}>
                  <legend className="a11yHidden">날짜 입력</legend>
                  <label htmlFor="date" className={classNames(css.labelTxt, "flex-none")}>날짜</label>
                  <BasicDatePicker labelStart={'시작날짜'} labelEnd={'종료날짜'} />
                </fieldset>

                <fieldset className={classNames(css.fieldset, "flex", "items-center")}>
                  <legend className="a11yHidden">서비스 체크</legend>
                  <label className={classNames(css.labelTxt, "flex-none")}>서비스</label>
                  <div>
                    <input
                      className="a11yHidden"
                      type="checkbox"
                      name=""
                      id="hoteling"
                    />
                    <label htmlFor="hoteling">호텔링</label>
                  </div>
                  <div>
                    <input
                      className="a11yHidden"
                      type="checkbox"
                      name=""
                      id="playRoom"
                    />
                    <label htmlFor="playRoom">놀이방</label>
                  </div>
                  <div>
                    <input
                      className="a11yHidden"
                      type="checkbox"
                      name=""
                      id="both"
                    />
                    <label htmlFor="both">호텔링 + 놀이방</label>
                  </div>
                </fieldset>

                <fieldset className={classNames(css.fieldset, "flex", "items-center")}>
                  <label htmlFor="weight" className={classNames(css.labelTxt, "flex-none")}>몸무게</label>
                  <select id="weight" name="몸무게">
                    <option value="전체" selected>
                      전체
                    </option>
                    <option value="1kg~5kg">1kg이상~5kg미만</option>
                    <option value="5kg~10kg">5kg이상~10kg미만</option>
                    <option value="10kg~15kg">10kg이상~15kg미만</option>
                  </select>
                </fieldset>
              </form>
            </div>
            <button type="button">검색</button>
          </article>
        </main>

        <div className={css.bottomBar}>
          <span className="a11yHidden">하단 막대바</span>
        </div>
        <div className={css.dogImg}>
          <Image src={'/imgs/daengdaenge.png'} width={500} height={500} alt="강아지이미지" />
        </div>
      </div>
    </>
  );
}
