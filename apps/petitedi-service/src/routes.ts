import { Express, Request, Response } from 'express';
import axios from 'axios';
import CarModel from './app/models/car.model';
import moment from 'moment';
import log from './app/utils/log';


async function loopCars(maxToDate: moment.Moment, duration: number, city: number) {
  for (const m = moment().add(1, 'day'); m.isBefore(maxToDate); m.add(1, 'days')) {
    const fromDate = moment(m).set('hour', 10).set('minutes', 0).set('second', 0).set('milliseconds', 0);
    const toDate = moment(m).add(duration - 1, 'days').set('hour', 17).set('minutes', 0).set('second', 0).set('milliseconds', 0);


    log.info('from ' + fromDate.format('YYYY-MM-DD HH:mm:ss'));
    log.info('to ' + toDate.format('YYYY-MM-DD HH:mm:ss'));


    const response = await axios.post('https://bpcs-webjoi.oeamtc-mietwagen.at/web-joi/joi/vehicleRequest?pageSize=7', {
      'administration': {
        'language': 'de',
        'salesChannel': 3,
        'calledFrom': 15,
        'broker': true,
        'brokerId': '500336',
        'operator': 1
      },
      'travel': {
        'pickUpTime': {
          'date': fromDate.format('YYYY-MM-DD'),
          'time': '10:00'
        },
        'dropOffTime': {
          'date': toDate.format('YYYY-MM-DD'),
          'time': '18:00'
        },
        'pickUpLocation': {
          'cityId': city
        },
        'dropOffLocation': {
          'cityId': city
        }
      },
      'module': 'CAR',
      'filter': {
        'paymentTypes': [
          1
        ],
        'showOffersWithExcess': true,
        'showOffersWithoutExcess': true
      },
      'calledIP': 'OGJmYzgwNTk2NjUwNzEyZGY3NmY1MzM1OWM5NWQyNGRjMTdiNTcyZjJkNjJiMGQ4NWVlZDExY2I0ZDE5ZmM4Yw==',
      'captchaId': ''
    }, {
      headers: {
        authorization: 'Bearer mj/kOrj8A0e0bPK/+NiUnzhgFXxLZlK8R3t0DfVo7ynzUbXRjE75QbT77YD0QZgFsIPJLgCFzrShV9G90vNw+GfiJSh03cYwnl3t5JvFfiJVLbuK1rX6TYL5EFtLCL1gRtb7BNTNNX8wuoVrwb7c8rQglpYyqDjXbBHDfn3ZsXLqi98ipAIPvMnkR9LMGo/zIaRZ3y0cyrQNt8/v/TCdmDNNN+ZBeIgEHZKf3kzgcrM='
      }
    });

    const data: any = response.data;

    let perDay = 0;
    if (data && data?.resultList && data?.resultList.length > 0) {
      let resultLists = data?.resultList[0];
      if (resultLists.offerList && resultLists.offerList.length > 0 && !!resultLists.offerList[0].dailyPrice) {
        perDay = resultLists.offerList[0].dailyPrice.decimalAmount;
      }
    }


    // if (!data?.summary.minimalPrice) {
    //   console.log(data?.summary);
    //   return;
    // }

    let doc = {
      resultsFrom: moment().format('YYYY-MM-DD'),
      dateFrom: fromDate.toDate(),
      dateTo: toDate.toDate(),
      duration: duration,
      perDay: perDay,
      // minimalPrice: data?.summary.minimalPrice.decimalAmount,
      minimalPrice: 0,
      city: city
    };


    await CarModel.create(doc);

  }
}

function routes(app: Express) {
  app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

  app.get('/test', async (req: Request, res: Response) => {


    const maxToDate = moment().add(3, 'months');
    const city: number = 4317;
    await loopCars(maxToDate, 2, city);
    await loopCars(maxToDate, 3, city);
    await loopCars(maxToDate, 4, city);
    await loopCars(maxToDate, 5, city);
    await loopCars(maxToDate, 6, city);
    await loopCars(maxToDate, 7, city);


    // console.log(perDay);
    // res.json(data);
    res.sendStatus(200);

  });


}

export default routes;
