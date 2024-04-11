package com.hionstudios.time;

import java.util.Calendar;
import java.util.TimeZone;

public interface TimeUtil {
    TimeZone TIMEZONE = TimeZone.getTimeZone("Pacific/Port_Moresby");

    static long start(long time) {
        Calendar cal = new PNGCalender();
        cal.setTimeInMillis(time);
        cal.set(Calendar.HOUR_OF_DAY, 0);
        cal.set(Calendar.MINUTE, 0);
        cal.set(Calendar.SECOND, 0);
        return cal.getTimeInMillis();
    }

    static long end(long time) {
        Calendar cal = new PNGCalender();
        cal.setTimeInMillis(time);
        cal.set(Calendar.HOUR_OF_DAY, 23);
        cal.set(Calendar.MINUTE, 59);
        cal.set(Calendar.SECOND, 59);
        return cal.getTimeInMillis();
    }

    static long currentTime() {
        return System.currentTimeMillis();
    }

    static String toString(long date) {
        return toString(date, "dd-MM-yyyy HH:mm:ss a");
    }

    static String toString(long date, String format) {
        return new PNGDateFormat(format).format(date);
    }

    static String toString(String format) {
        return toString(currentTime(), format);
    }

    static long getTime() {
        return currentTime();
    }

    static String toDateString(long date) {
        return toString(date, "dd-MM-yyyy");
    }

    static String toDateString() {
        return toDateString(currentTime());
    }

    static String toTimeString(long date) {
        return toString(date, "HH:mm:ss");
    }

    static int getCurrentYear() {
        return Integer.parseInt(toString(getTime(), "yyyy"));
    }

    static long today() {
        return start(getTime());
    }

    static long parse(String time, String format) {
        return new PNGDateFormat(format).parse(time).getTime();
    }

    static long parseDate(String date) {
        return parse(date, "dd-MM-yyyy");
    }

    static long days(long day) {
        return currentTime() + (day * 24 * 60 * 60 * 1000);
    }
}
