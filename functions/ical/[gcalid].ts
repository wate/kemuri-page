const iCalContent: PagesFunction = async (context) => {
  try {
    const icalURL = new URL(`https://calendar.google.com/calendar/ical/${context.params.gcalid}/public/basic.ics`);
    const iCalData = await fetch(icalURL);
    if (!iCalData.ok) {
      return new Response("Failed to fetch iCal data", { status: 500 });
    }
    return new Response(iCalData.body, {
      status: 200,
      // headers: {
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Max-Age": "86400",
      // },
    });
  } catch (error) {
    return new Response(`${error.message}`, { status: 500 });
  }
};

export const onRequest = [iCalContent];
