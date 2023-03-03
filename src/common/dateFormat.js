import moment from "moment";

function convertToMoment(date) {
  if (!date) return null;
  let m;
  if (moment.isMoment(date)) {
    m = date;
  } else {
    m = moment(date);
  }
  return m;
}
const formats = {
  time_ago: function (date) {
    if (!date) return date;
    let m = convertToMoment(date);
    let hours = moment().diff(m, "h");
    let mins = moment().diff(m, "m");
    if (hours === 0) {
      return mins + "mins";
    } else if (hours > 24) {
      return Math.floor(hours / 24).toString() + "d";
    }
    return hours + "h";
  },
  date: function (date) {
    let m = convertToMoment(date);
    if (!m) return date;
    return m.format("M/D/YY");
  },

  datetime: function (date) {
    let m = convertToMoment(date);
    if (!m) return date;
    return m.format("M/D/YY HH:mm");
  },
  datetime_a: function (date) {
    let m = convertToMoment(date);
    if (!m) return date;
    return m.format("MM/DD/YY hh:mm A");
  },
  datetime_without_year: function (date) {
    let m = convertToMoment(date);
    if (!m) return date;
    return m.format("M/D HH:mm");
  },
  date_without_year: function (date) {
    let m = convertToMoment(date);
    if (!m) return date;
    return m.format("M/D");
  },
  time: function (date) {
    let m = convertToMoment(date);
    if (!m) return date;
    return m.format("HH:mm");
  },
  date_month_day: function (date) {
    let m = convertToMoment(date);
    if (!m) return date;
    let thisYear = moment().year();
    if (m.year() < thisYear) {
      return m.format("M/D/YYYY");
    } else {
      return m.format("M/D");
    }
  },

  datecustom: function (date, formatString) {
    if (date === null) return;
    let m = convertToMoment(date);
    if (!m) return date;
    if (!formatString) {
      formatString = "MM/DD/YYYY HH:mm";
    }
    return m.format(formatString);
  },
};

export function formatDate(date, format) {
  let fn = formats[format];
  if (!fn) {
    return formats.datecustom(date, format);
  }

  return fn(date);
}

export function loginDateFormat(date, format) {
  let fn = formats[format];
  if (!fn) {
    return formats.datecustom(date, format);
  }

  return fn(date);
}
