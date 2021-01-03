import * as React from 'react'
import {View, Text, Image, FlatList, StyleSheet} from 'react-native'
import {Calendar} from 'react-native-calendars'
import {timeStampFilter} from '../../utils/common'
import axios from 'axios'

const CustomDay = ({date, marking, holiday}) => {

  const HolidayBox = () => {
    holiday.forEach((item) => {
      if(item.dateString === date.dateString)
        <View>
          <Text>{item.name}</Text>
        </View>
    })
  }
  return (
    <View style={{width: '100%'}}>
      <Text style={{textAlign: 'center'}}>{date.day}</Text>
      <View>

        <HolidayBox />
        {/* <Text>{JSON.stringify(holiday)}</Text> */}
        {/* <Text>{JSON.stringify(date)}</Text> */}
        <View style={CustomDayStyle.scheduleBar}>
          <Text>{date.startingDay}</Text>
        </View>
      </View>
    </View>
  )
}

const CustomDayStyle = StyleSheet.create({
  scheduleBar: {
    height: 2,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    marginRight: 4,
    backgroundColor: 'purple'
  }
})
export default (props) => {
  const [isActive, changeActive] = React.useState()
  const [dateList, setDateList] = React.useState({})

  const currentHolidayList = React.useRef([])
  const [holidayList, setHolidayList] = React.useState(currentHolidayList.current)

  const [startDateObj, setStartDate] = React.useState()
  const [endDateObj, setEndDate] = React.useState()

  const currentYear = React.useRef(0)
  const currentMonth = React.useRef(0)
  const [pageYear, changePageYear] = React.useState(0)
  const [pageMonth, changePageMonth] = React.useState(0)


  // React.useEffect(() => {
  //   changePageYear(props.currentYear)
  //   changePageMonth(props.currentMonth)
  // }, [props.currentYear, props.currentMonth])

  React.useEffect(() => {
    const currentDate = new Date()
    currentYear.current = currentDate.getFullYear()
    currentMonth.current = currentDate.getMonth() + 1

    changePageYear(currentYear.current)
    changePageMonth(currentMonth.current)

    const key = 'Z1dX1c7SZ1tJgNke8ckBCRAZZsxTgUA%2BrjpwbYVXSNN%2BAv%2FhIPuxOOqRlDIkIBD%2Fi2ifp733QJ%2FG1mT67u53vw%3D%3D'
    axios.get(`http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?solYear=${currentYear.current}&ServiceKey=${key}&numOfRows=${100}`).then((result) =>{
      const resultData = result.data.response.body.items.item
      const holidayObj = resultData.map((item) => {
        const date = String(item.locdate)
        const dateString = `${date.substr(0,4)}-${date.substr(4,2)}-${date.substr(6,2)}`
        
        return {
          dateString: dateString,
          name: item.dateName
        }
      })
      currentHolidayList.current = holidayObj
    }).catch(() => {})
  }, [])
  // getRestDeInfo

  React.useEffect(() => {
    const key = 'Z1dX1c7SZ1tJgNke8ckBCRAZZsxTgUA%2BrjpwbYVXSNN%2BAv%2FhIPuxOOqRlDIkIBD%2Fi2ifp733QJ%2FG1mT67u53vw%3D%3D'
    axios.get(`http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?solYear=${pageYear}&ServiceKey=${key}&numOfRows=${100}`).then((result) =>{
      const resultData = result.data.response.body.items.item
      const holidayObj = resultData.map((item) => {
        const date = String(item.locdate)
        const dateString = `${date.substr(0,4)}-${date.substr(4,2)}-${date.substr(6,2)}`
        
        return {
          dateString: dateString,
          name: item.dateName
        }
      })
      console.log('tetrqerqwrt')
      setHolidayList(holidayObj)
    }).catch(() => {})
  },[pageYear])


  const onePickDate = () => {
    const dateString = timeStampFilter(startDateObj.timestamp)

    setDateList(() => ({
      [dateString]: {
        selected: true,
        startingDay: true,
        endingDay: true,
        color: '#70d7c7',
        textColor: 'white',
      },
    }))
  }

  const rangePickDate = () => {
    setDateList({})
    const betweenCnt =
      (endDateObj.timestamp - startDateObj.timestamp) / 86400000

    for (let i = 0; i <= betweenCnt; i++) {
      const timeStamp = startDateObj.timestamp + i * 86400000

      const dateString = timeStampFilter(timeStamp)
      if (i === 0) {
        setDateList((prevState) => ({
          ...prevState,
          [dateString]: {
            selected: true,
            startingDay: true,
            color: '#2DC5FF',
            textColor: '#ffffff',
          },
        }))
      } else if (i === betweenCnt) {
        setDateList((prevState) => ({
          ...prevState,
          [dateString]: {
            selected: true,
            endingDay: true,
            color: '#2DC5FF',
            textColor: '#ffffff',
          },
        }))
      } else {
        setDateList((prevState) => ({
          ...prevState,
          // 68D6FF
          // 51CFFF

          [dateString]: {color: '#68D6FF', textColor: '#ffffff'},
        }))
      }
    }
  }

  const changePageDate = (dateObj) => {
    // changePageYear(dateObj.year)
    // changePageMonth(dateObj.month)
    currentYear.current = dateObj.year
    currentMonth.current = dateObj.month
  }

  const HolidayBox = ({holiday, date}) => {
    return <Text>{JSON.stringify(holidayList)}</Text>
    // holiday.forEach((item) => {
    //   if(item.dateString === date.dateString)
    //     return ( <View>
    //       <Text>{item.name}</Text>
    //     </View>
    //     )
    // })
  }

  return (
    <View>
      <Calendar
        onMonthChange={(dateObj) => changePageDate(dateObj)}
        // markingType="multi-period"
        dayComponent={({date, state}) => {
          return (
            // <CustomDay date={date} marking={state} holiday={holidayList}/>
            <View style={{width: '100%'}}>
              <Text style={{textAlign: 'center'}}>{date.day}</Text>
              <View>
                {/* {
                  holidayList.forEach((item) => {
                    <Text>{JSON.stringify(item)}</Text>
                    if(item.dateString === date.dateString)
                      return ( 
                        <Text>{item.name}</Text>
                      )
                  })
                } */}
                {
                  holidayList.forEach((item) => {
                    <Text>{item}</Text>
                  })
                }

                <Text>{JSON.stringify(holidayList)}</Text>
                {/* <HolidayBox holiday={holidayList} date={date}/> */}
                {/* <Text>{JSON.stringify(holiday)}</Text> */}
                {/* <Text>{JSON.stringify(date)}</Text> */}
                <View style={CustomDayStyle.scheduleBar}>
                  <Text>{date.startingDay}</Text>
                </View>
              </View>
            </View>
          )
        }}
        // markedDates={{
        //   '2020-11-15': {
        //     periods: [
        //       {startingDay: true, endingDay: false, color: 'green',marked: true, textColor: '#efefef'},
        //       {startingDay: true, endingDay: true, color: 'orange'},
        //     ],
        //   },
        //   '2020-11-16': {
        //     periods: [
        //       { color: 'blue'},
        //       { color: 'green'}
        //     // {startingDay: false, endingDay: true, color: 'orange'},
        //     ],
        //   },
        //   '2020-11-17': {
        //     periods: [
        //       {startingDay: false, endingDay: true, color: 'green'},
        //     // {startingDay: false, endingDay: true, color: 'orange'},
        //     ],
        //   }
        // }}
        monthFormat={'yyyy년 MM월'}
      ></Calendar>

      {/* <Text>{JSON.stringify(holidayList)}</Text> */}
      <HolidayBox></HolidayBox>
      <Text>{pageMonth}</Text>
    </View>
  )
}
