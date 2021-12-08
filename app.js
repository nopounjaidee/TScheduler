const schedule = require('node-schedule');

Tscheduler(15,30)
async function Tscheduler(h,m){
  const rule = await new schedule.RecurrenceRule();
        rule.hour = h;
        rule.minute = m;
        rule.tz = 'Asia/Bangkok';
  const job = schedule.scheduleJob(rule, function(){
    console.log('The answer to life, the universe, and everything!');
  });
}
