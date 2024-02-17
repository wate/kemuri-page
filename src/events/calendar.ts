// @see Documentation: https://fullcalendar.io/docs
// @see Plugin Index: https://fullcalendar.io/docs/plugin-index
import { Calendar } from '@fullcalendar/core';
import jaLocale from '@fullcalendar/core/locales/ja';
//support view: dayGridYear, dayGridMonth, dayGridWeek, dayGridDay, dayGrid
import dayGridPlugin from '@fullcalendar/daygrid';
//support view: timeGridWeek, timeGridDay, timeGrid
import timeGridPlugin from '@fullcalendar/timegrid';
//support view: listYear, listMonth, listWeek, listDay, list
import listPlugin from '@fullcalendar/list';
//support view: multiMonthYear, multiMonth
import multiMonthPlugin from '@fullcalendar/multimonth';
import interactionPlugin from '@fullcalendar/interaction';
import iCalendarPlugin from '@fullcalendar/icalendar';
import bootstrapPlugin from '@fullcalendar/bootstrap';

document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  if (calendarEl) {
    const calendar = new Calendar(calendarEl, {
      initialDate: new Date(),
      locale: jaLocale,
      editable: true,
      selectable: true,
      plugins: [
        dayGridPlugin,
        timeGridPlugin,
        listPlugin,
        multiMonthPlugin,
        interactionPlugin,
        iCalendarPlugin,
        bootstrapPlugin,
      ],
      initialView: 'timeGridDay',
      slotDuration: '00:10:00',
      slotMinTime: '09:00:00',
      slotMaxTime: '20:00:00',
      headerToolbar: {
        left: 'prev,next,today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listDay,multiMonthYear',
      },
      contentHeight: 'auto',
      themeSystem: 'bootstrap',
      nowIndicator: true,
      eventSources: [
        {
          url: '/ical/ja.japanese%23holiday%40group.v.calendar.google.com',
          color: 'orange',
          format: 'ics',
        }
      ],
    });
    calendar.render();
  } else {
    console.error('calendar element not found');
  }
});
