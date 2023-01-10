import * as React from 'react';
import { useEffect, useState, FC } from 'react';
import * as moment from 'moment';

import Grid from '../UI/Grid/Grid';
import classes from './TimeZone.module.scss';

const TIMEZONE_LIST = [
  {
    id: 1,
    location: 'Osaka, Japan',
    dateTime: moment.now(),
  },
  {
    id: 2,
    location: 'San Francisco, USA',
    dateTime: moment.now(),
  },
  {
    id: 3,
    location: 'Shanghai, China',
    dateTime: moment.now(),
  },
  {
    id: 4,
    location: 'Singapore, Singapore',
    dateTime: moment.now(),
  },
  {
    id: 5,
    location: 'Zürich, Switzerland',
    dateTime: moment.now(),
  },
];

const ENDPOINT =
  'https://api.ipgeolocation.io/timezone?apiKey=75d4d4152d7b46c0b13976b343256957';

interface ITimeZoneProps {}

interface ITimeZone {
  id: number;
  location: string;
  dateTime: number;
}

const TimeZone: FC<ITimeZoneProps> = () => {
  const [timezones, setTimezones] = useState<ITimeZone[]>(TIMEZONE_LIST);

  const fetchTimezones = async (): Promise<void> => {
    TIMEZONE_LIST.forEach(async (timezone) => {
      const encodedLoc = encodeURI(timezone.location);
      const response = await fetch(`${ENDPOINT}&location=${encodedLoc}`);
      const data = await response.json();
      setTimezones((prevTimezones) => {
        const updated = [...prevTimezones];
        const ids = updated.map((i: ITimeZone) => i.id);
        const updatedIdx = ids.indexOf(timezone.id);
        updated[updatedIdx] = {
          ...updated[updatedIdx],
          dateTime: data.date_time,
        };
        return updated;
      });
    });
  };

  useEffect(() => {
    fetchTimezones().catch((e) => console.log(e));
    // const intervalId = setInterval(() => {
    //   fetchTimezones();
    // }, 60 * 1000);

    // return () => clearInterval(intervalId);
  }, []);

  return (
    <Grid
      title='GLOBAL TIMES'
      edit='Edit Time Zones'
      templateColumns={4}
      id='timeZones'
    >
      {timezones.map((item) => (
        <div key={item.id} className={classes.item}>
          <div className={classes.location}>{item.location}</div>
          <div className={classes.timeInfo}>
            <div className={classes.meridiem}>
              {moment(item.dateTime).format('a').toUpperCase()}{' '}
            </div>
            <div className={classes.time}>
              {moment(item.dateTime).format('h:mm')}
            </div>
          </div>
          <div className={classes.date}>
            {moment(item.dateTime).format('MMM Do YYYY')}
          </div>
        </div>
      ))}
    </Grid>
  );
};

export default TimeZone;
